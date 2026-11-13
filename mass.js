const blessed = require('blessed');
const { Client } = require('discord.js-selfbot-v13');
const { execFile } = require('child_process');
const fs = require('fs');
require('dotenv').config();

const TOKEN = process.env.DISCORD_TOKEN;
if (!TOKEN) { console.log("❌ TOKEN NOT FOUND in .env file!"); process.exit(1); }
const BOT_CLIENT_ID = process.env.BOT_CLIENT_ID;
if (!BOT_CLIENT_ID) { console.log("❌ BOT_CLIENT_ID NOT FOUND in .env file!"); process.exit(1); }

const BASE_DELAY = 45000;
const MAX_RETRIES = 3;
const getRandomDelay = () => Math.floor(Math.random() * 30000) + BASE_DELAY;
const STATE_FILE = 'created_servers.json';
const LINKS_FILE = 'links.txt';

if (process.stdout.columns === 1 || process.stdout.rows === 1) {
  process.stdout.columns = 80; process.stdout.rows = 24;
}

const screen = blessed.screen({ smartCSR: true, title: 'DISCORD SERVER GEN', tags: true });

const header = blessed.box({
  parent: screen, top: 0, left: 0, width: '100%', height: 3,
  content: '{center}⚡ DISCORD SERVER GEN ⚡{/center}',
  tags: true, border: { type: 'line' }, style: { border: { fg: 'cyan' } }
});

const currentLinkBox = blessed.box({
  parent: screen, top: 3, left: 0, width: '100%', height: 5,
  label: ' 🔗 Current Link ', border: { type: 'line' },
  style: { border: { fg: 'magenta' }, fg: 'cyan' },
  tags: true, content: ' Waiting... ', scrollable: true, alwaysScroll: true
});

const logBox = blessed.log({
  parent: screen, top: 8, left: 0, width: '100%', height: '100%-13',
  label: ' Logs ', border: { type: 'line' }, scrollable: true,
  alwaysScroll: true, keys: true, vi: true, tags: true, style: { border: { fg: 'green' } }
});

const progressBar = blessed.progressbar({
  parent: screen, bottom: 3, left: 0, width: '100%', height: 1,
  orientation: 'horizontal', style: { bar: { bg: 'green' } }
});

const statusLine = blessed.box({
  parent: screen, bottom: 1, left: 0, width: '100%', height: 1,
  content: ' Ready. Type number.',
  tags: true, style: { fg: 'yellow' }
});

const inputBox = blessed.textbox({
  parent: screen, bottom: 0, left: 0, width: '100%', height: 3,
  label: ' Input ', border: { type: 'line' }, inputOnFocus: true,
  keys: true, style: { border: { fg: 'yellow' } }
});

const state = {
  phase: 'ask_count', total: 0, created: 0, failed: 0, currentIndex: 1,
  client: null, startTime: 0, savedState: loadState(),
};

function loadState() {
  try {
    if (fs.existsSync(STATE_FILE)) {
      const data = JSON.parse(fs.readFileSync(STATE_FILE, 'utf8'));
      if (data && Array.isArray(data.created)) return data;
    }
  } catch (e) {}
  return { created: [], lastIndex: 0 };
}

function saveState(s) {
  try { fs.writeFileSync(STATE_FILE, JSON.stringify(s, null, 2)); } catch (e) {}
}

function updateStatus(msg, color = 'yellow') {
  statusLine.setContent(` ${msg}`);
  statusLine.style.fg = color;
  screen.render();
}

function updateProgress() {
  if (state.total > 0) {
    const percent = Math.min(100, ((state.created + state.failed) / state.total) * 100);
    progressBar.setProgress(percent);
  }
  screen.render();
}

async function processNextServer() {
  if (state.phase !== 'running') return;
  if (state.currentIndex > state.total) {
    state.phase = 'ask_count';
    logBox.log(`\n{green-fg}=== FINAL REPORT ==={/green-fg}`);
    logBox.log(`{green-fg}📊 Created: ${state.created} | ❌ Failed: ${state.failed}{/green-fg}`);
    updateStatus('Done. Type a new number.', 'green');
    screen.render();
    return;
  }

  const i = state.currentIndex;
  updateStatus(`🟢 Creating Server ${i}/${state.total}...`, 'cyan');
  screen.render();

  let success = false;
  let attempts = 0;

  while (!success && attempts < MAX_RETRIES) {
    attempts++;
    try {
      const guild = await state.client.guilds.create(`S-${i}`);
      state.created++;
      success = true;
      logBox.log(`{green-fg}✅ Created: ${guild.name}{/green-fg}`);
      
      state.savedState.created.push({ id: guild.id, name: guild.name, index: i });
      saveState(state.savedState);

      const url = `https://discord.com/oauth2/authorize?client_id=${BOT_CLIENT_ID}&scope=bot%20applications.commands&permissions=32&guild_id=${guild.id}&disable_guild_select=true`;
      
      currentLinkBox.setContent(` ${url}`);
      try { fs.appendFileSync(LINKS_FILE, url + '\n'); } catch (err) {}
      
      execFile("termux-open-url", [url], (err) => {});
      
      state.phase = 'waiting_for_bot';
      updateStatus(`Server ${i} ready. Add bot, then PRESS ENTER.`, 'yellow');
      screen.render();
      return;

    } catch (e) {
      if (e.message.includes('429')) {
        let waitTime = 60000;
        const match = e.message.match(/retry after (\d+)/i);
        if (match) waitTime = parseInt(match[1], 10) * 1000 + 5000;
        await new Promise(r => setTimeout(r, waitTime));
      } else if (attempts < MAX_RETRIES) {
        await new Promise(r => setTimeout(r, 5000));
      } else {
        state.failed++;
        logBox.log(`{red-fg}❌ Failed server ${i}{/red-fg}`);
      }
    }
  }
  state.currentIndex++;
  updateProgress();
  const delay = getRandomDelay();
  for (let s = Math.ceil(delay/1000); s > 0; s--) {
    updateStatus(`Waiting ${s}s...`, 'gray');
    await new Promise(r => setTimeout(r, 1000));
  }
  processNextServer();
}

async function checkBotAction() {
  updateStatus('Checking server Audit Logs...', 'cyan');
  screen.render();
  
  const guildId = state.savedState.created[state.savedState.created.length - 1]?.id;
  if (!guildId) return;

  try {
    const guild = state.client.guilds.cache.get(guildId);
    if (!guild) {
        const fetched = await state.client.guilds.fetch(guildId).catch(() => null);
        if (!fetched) throw new Error("Server not found.");
        await new Promise(r => setTimeout(r, 2000));
    }

    const targetGuild = state.client.guilds.cache.get(guildId);
    const auditLogs = await targetGuild.fetchAuditLogs({ type: 'BOT_ADD', limit: 5 });
    const botAddLog = auditLogs.entries.find(entry => entry.target && entry.target.id === BOT_CLIENT_ID);
    
    if (botAddLog) {
      logBox.log(`{green-fg}✅ Bot detected in server ${state.currentIndex}!{/green-fg}`);
      state.currentIndex++;
      state.phase = 'running';
      updateProgress();
      updateStatus(`⏳ Preparing next server...`, 'cyan');
      screen.render();
      
      setTimeout(() => { processNextServer(); }, 3000);
    } else {
      logBox.log(`{red-fg}❌ Bot NOT found. Wait 5s and press ENTER again.{/red-fg}`);
      updateStatus("Bot not found. Press ENTER to retry.", 'red');
    }
  } catch (e) {
    logBox.log(`{red-fg}Error: ${e.message}{/red-fg}`);
  }
}

inputBox.on('submit', async (value) => {
  const trimmed = value.trim().toLowerCase();
  inputBox.clearValue();
  inputBox.focus();

  if (state.phase === 'waiting_for_bot') {
    await checkBotAction();
    screen.render();
    return;
  }

  if (state.phase === 'ask_count') {
    const num = parseInt(trimmed, 10);
    if (isNaN(num) || num <= 0 || num > 50) {
      logBox.log('{red-fg}❌ Invalid. Max 50.{/red-fg}');
      return;
    }
    
    state.total = num; state.created = 0; state.failed = 0; state.currentIndex = 1; state.phase = 'running'; state.startTime = Date.now();
    logBox.log(`{green-fg}🚀 Target: ${num} servers{/green-fg}`);
    
    if (!state.client) {
      state.client = new Client();
      state.client.once('ready', async () => {
        logBox.log(`{green-fg}✅ Connected: ${state.client.user.tag}{/green-fg}`);
        processNextServer();
      });
      state.client.login(TOKEN).catch(err => {
        logBox.log(`{red-fg}❌ Login failed: ${err.message}{/red-fg}`);
        state.phase = 'ask_count';
      });
    } else { processNextServer(); }
  }
  screen.render();
});

screen.key(['escape', 'C-c'], () => {
  if (state.client) state.client.destroy();
  process.exit(0);
});

inputBox.focus();
logBox.log('{cyan-fg}Welcome to v7.0{/cyan-fg}');
logBox.log('Type a number to create servers. Add bot, then press ENTER.');
screen.render();

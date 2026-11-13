فت🚀 Discord Server Generator

<p align="center">
  <strong>A Node.js Terminal Tool for Discord Server Automation</strong>
  <br>
  <strong>أداة طرفية لأتمتة عمليات سيرفرات ديسكورد</strong>
</p>---

⚠️ DISCLAIMER | تحذير مهم جداً

🇸🇦 العربية

تنبيه: هذا المشروع يستخدم Self-Bot (User Token) بدلاً من حساب بوت رسمي.

استخدام Self-Bots مخالف لشروط خدمة Discord (Discord Terms of Service).

قد يؤدي استخدام هذه الأداة إلى:

- الحظر الدائم لحساب Discord المستخدم.
- تقييد الحساب أو تعطيل بعض وظائفه.
- فقدان الوصول إلى السيرفرات والبيانات المرتبطة بالحساب.
- اتخاذ إجراءات أخرى من Discord وفقاً لسياساتها.

استخدامك لهذا المشروع يكون على مسؤوليتك الشخصية بالكامل.

لا يتحمل مطور المشروع أي مسؤولية عن حظر الحسابات أو فقدان البيانات أو أي أضرار ناتجة عن استخدام الأداة.

هذا المشروع غير رسمي، وغير تابع لشركة Discord أو معتمد منها.

🇬🇧 English

WARNING: This project uses a Self-Bot (User Token) instead of an official Discord Bot account.

Using Self-Bots violates Discord's Terms of Service (ToS).

Using this tool may result in:

- Permanent suspension of your Discord account.
- Account restrictions or disabled functionality.
- Loss of access to servers and associated data.
- Additional enforcement actions by Discord.

You use this project entirely at your own risk.

The developer assumes no responsibility for account bans, data loss, or any damages resulting from its use.

This is an unofficial project and is not affiliated with or endorsed by Discord.

---

📖 About the Project | حول المشروع

Discord Server Generator is a Node.js-based terminal application designed to automate certain Discord server-related workflows.

The project uses an interactive Terminal User Interface (TUI) built with the "blessed" library.

The application was designed around automated workflows, browser-based OAuth2 authorization, and monitoring Discord server activity.

🇸🇦 بالعربية

Discord Server Generator هي أداة طرفية مكتوبة بلغة JavaScript باستخدام Node.js.

تهدف إلى تنظيم وأتمتة بعض العمليات المتعلقة بسيرفرات Discord، من خلال واجهة طرفية تفاعلية ونظام متابعة للعمليات.

---

✨ Features | المميزات

- 🖥️ Interactive Terminal UI: واجهة طرفية تفاعلية باستخدام مكتبة Blessed.
- ⚙️ Configurable Workflows: إمكانية تحديد إعدادات العمليات من واجهة الأداة.
- 🌐 OAuth2 Integration: دعم تدفقات التفويض الرسمية لإضافة البوتات.
- 📋 Activity Monitoring: متابعة الأحداث والأنشطة المرتبطة بالسيرفرات.
- 🔗 Link Management: تنظيم روابط التفويض وحفظها محلياً.
- 🔄 Error Handling: التعامل مع الأخطاء والاستجابات غير المتوقعة.
- ⏱️ Rate Limit Awareness: مراعاة حدود الطلبات التي تفرضها Discord.
- 📱 Termux Compatibility: إمكانية تشغيل واجهة Node.js على بيئة Termux المتوافقة.

«ملاحظة: لا تعني هذه الميزات أن الأداة معتمدة من Discord أو أن جميع العمليات مدعومة رسمياً.»

---

🛠️ Requirements | المتطلبات

المتطلبات العامة لتشغيل بيئة المشروع:

Requirement| Description
Node.js| Version 18 or newer
npm| Node.js package manager
Git| Repository management
Termux| Optional for Android
Termux:API| Optional Android integration

---

📁 Project Structure | هيكل المشروع

discord-server-generator/
│
├── mass.js
│   └── Main application entry point
│
├── package.json
│   └── Project dependencies and scripts
│
├── .env.example
│   └── Environment variable template
│
├── .gitignore
│   └── Excluded files and sensitive data
│
├── links.txt
│   └── Locally stored link records
│
└── README.md
    └── Project documentation

File Descriptions

- mass.js: Main application source file.
- package.json: Defines dependencies and project metadata.
- .env.example: Example environment configuration.
- .gitignore: Prevents sensitive and unnecessary files from being committed.
- links.txt: Local record file for generated links.
- README.md: Project documentation.

---

🔐 Security | الأمان

Security is important when working with Discord integrations.

Recommended practices:

1. Never publish Discord account tokens.
2. Never upload your ".env" file to GitHub.
3. Keep sensitive credentials outside the source code.
4. Use official Discord OAuth2 authorization for bot integrations.
5. Never share authentication credentials with third-party services.
6. Revoke exposed credentials immediately.
7. Avoid storing unnecessary personal information.

Important: A Discord user token is highly sensitive authentication information. It should never be treated like an ordinary API key.

---

❓ FAQ | الأسئلة الشائعة

1. What does TOKEN_INVALID mean?

This error indicates that an authentication token was rejected.

Do not share your token with anyone. If it has been exposed, secure your account and review its active sessions.

2. Why isn't the bot being recognized?

Possible reasons include:

- Incorrect bot application configuration.
- Incorrect application/client ID.
- Missing permissions.
- OAuth2 configuration problems.

Verify the application through the official Discord Developer Portal.

3. Why doesn't the browser open automatically?

On Android, browser integration may depend on Termux and its supported API components.

Check that your Android environment supports the required integration.

4. Is this an official Discord application?

No. This is an independent, unofficial project.

5. Is using a Self-Bot safe?

No. Self-Bot automation violates Discord's Terms of Service and may result in account suspension.

6. Can I use an official bot instead?

Yes. For supported integrations, use the official Discord Developer Portal and OAuth2 bot authorization.

---

🔗 Useful Resources | روابط مفيدة

- "Discord Official Website" (https://discord.com/)
- "Discord Developer Portal" (https://discord.com/developers/applications)
- "Discord Developer Documentation" (https://discord.com/developers/docs)
- "Discord Terms of Service" (https://discord.com/terms)
- "Discord Developer Policy" (https://discord.com/developers/docs/policies-and-agreements/developer-policy)

---

⚖️ Legal Notice | إخلاء المسؤولية

This project is provided for educational and research purposes.

The project is not affiliated with, maintained, sponsored, or endorsed by Discord Inc.

Discord is a trademark of Discord Inc.

The developer does not guarantee uninterrupted operation, compatibility, or availability of third-party services.

---

👨‍💻 Author | المطور

Discord Server Generator

Developed with Node.js and JavaScript.

---

<p align="center">
  Made with ❤️ for the developer community
  <br>
  <strong>Unofficial Discord Project</strong>
</p>

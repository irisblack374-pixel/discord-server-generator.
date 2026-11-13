# Discord Server Gen

A Node.js terminal-interface project using Blessed and dotenv.

> **Unofficial project notice:** The supplied source uses `discord.js-selfbot-v13` to automate a normal user account. Discord prohibits self-bots; use may result in account enforcement, including termination. Prefer official Discord bot accounts and supported APIs.

---

## العربية

### نبذة عن المشروع

مشروع Node.js بواجهة طرفية بعنوان `DISCORD SERVER GEN`. تستخدم الواجهة مكتبة Blessed لعرض:

- **Current Link:** قسم عرض الرابط الحالي.
- **Logs:** سجل رسائل الحالة.
- **Input:** حقل استقبال إدخال المستخدم.

### خيارات الإدخال كما تظهر في الكود

**1. إدخال رقم**

في مرحلة `ask_count`، يحاول الكود قراءة رقم موجب مثل `10` وتعيينه إلى العدد المطلوب `total`.

**2. إدخال `delete`**

يتعرف معالج الإدخال على كلمة `delete`، لكن منطق الحذف في المقتطف المرسل غير مكتمل؛ يحتوي على تعليق فقط ولا ينفذ الحذف فعليًا.

**3. مرحلة الانتظار**

يعرض الكود الرسالة:

`Server X ready. Add bot, then PRESS ENTER.`

عند إرسال حقل الإدخال أثناء هذه المرحلة، يستدعي الكود دالة التحقق. لا يفحص الكود قيمة النص المرسل، لذلك Enter أو كتابة `ok` ثم Enter يؤديان إلى استدعاء المعالج نفسه.

### رسائل الحالة

| الرسالة | المعنى |
|---|---|
| `Ready. Type number or "delete".` | انتظار إدخال المستخدم |
| `Creating Server X/Y...` | رسالة حالة للإنشاء |
| `Server X ready. Add bot, then PRESS ENTER.` | مرحلة انتظار إدخال المستخدم |
| `Checking server Audit Logs...` | رسالة حالة لفحص سجلات التدقيق |
| `Bot detected in server X!` | رسالة تفيد باكتشاف البوت |
| `Bot NOT found. Wait 5s and press ENTER again.` | رسالة تفيد بعدم العثور على البوت |
| `Preparing next server...` | رسالة التحضير للمرحلة التالية |

### المتطلبات والتثبيت

- Node.js
- npm

لتثبيت المكتبات المعرفة في `package.json`:

```bash
npm install
```

### متغيرات البيئة

يقرأ الكود المتغيرين التاليين من ملف محلي اسمه `.env`:

```env
DISCORD_TOKEN=YOUR_TOKEN
BOT_CLIENT_ID=YOUR_APPLICATION_ID
```

لا ترفع ملف `.env` إلى GitHub، ولا تشارك أي Token حقيقي.

### ملاحظات على المقتطف البرمجي

المقتطف المرسل ليس تطبيقًا مكتملًا بمفرده. من الأجزاء غير الموجودة فيه أو التي تحتاج إلى استكمال:

- تهيئة `state.client` وتسجيل دخوله.
- تعريف `state.savedState` قبل استخدامها في التحقق.
- تعريف الدالة `updateStatus`.
- تنفيذ منطق الحذف بدل التعليق الموجود.
- استكمال إدارة حالة السيرفرات ومعالجة أخطاء التحقق.

لذلك لا يعني ظهور رسالة حالة أن العملية اكتملت أو تم التحقق منها فعليًا.

---

## English

### Overview

A Node.js terminal-interface project titled `DISCORD SERVER GEN`. The Blessed interface contains:

- **Current Link:** a panel for the current link.
- **Logs:** a status and event log.
- **Input:** a field for user input.

### Input options shown in the source

**1. Numeric input**

During the `ask_count` phase, the handler attempts to parse a positive number, such as `10`, and assign it to `total`.

**2. The `delete` input**

The handler recognizes `delete`, but the deletion branch in the supplied snippet is incomplete. It contains a placeholder comment and does not perform deletion.

**3. Waiting stage**

The source displays:

`Server X ready. Add bot, then PRESS ENTER.`

Submitting the input field during this phase invokes the verification function. The handler does not inspect the submitted text, so pressing Enter or entering `ok` and then pressing Enter invokes the same handler.

### Status messages

| Message | Meaning |
|---|---|
| `Ready. Type number or "delete".` | Waiting for user input |
| `Creating Server X/Y...` | Creation status message |
| `Server X ready. Add bot, then PRESS ENTER.` | Waiting for user input |
| `Checking server Audit Logs...` | Audit-log check status |
| `Bot detected in server X!` | Message indicating bot detection |
| `Bot NOT found. Wait 5s and press ENTER again.` | Message indicating the bot was not found |
| `Preparing next server...` | Preparation status for the next stage |

### Requirements and installation

- Node.js
- npm

Install the dependencies declared in `package.json`:

```bash
npm install
```

### Environment variables

The source reads these variables from a local `.env` file:

```env
DISCORD_TOKEN=YOUR_TOKEN
BOT_CLIENT_ID=YOUR_APPLICATION_ID
```

Never commit `.env` or publish a real token.

### Source-code limitations

The supplied snippet is not a complete standalone application. It still requires:

- Initializing and authenticating `state.client`.
- Defining `state.savedState` before verification uses it.
- Defining the `updateStatus` function.
- Implementing the deletion branch instead of leaving it as a placeholder.
- Completing server-state management and verification error handling.

A displayed status message alone does not prove that an operation completed or was verified.

---

## Discord policy and account safety

The supplied source uses `discord.js-selfbot-v13` to automate a normal user account. Discord prohibits self-bots, and their use may result in account enforcement, including termination. This is an unofficial third-party project and is not endorsed by Discord. Use official bot accounts and supported APIs for legitimate integrations.

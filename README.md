<div align="center">

# 🚀 Discord Server Generator

### A Node.js Terminal Application
### أداة طرفية لإدارة عمليات سيرفرات Discord

<p>
  <img alt="Node.js 18+" src="https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
  <img alt="Terminal UI" src="https://img.shields.io/badge/Terminal-Interactive-3867D6?style=for-the-badge">
  <img alt="Unofficial project" src="https://img.shields.io/badge/Discord-Unofficial-5865F2?style=for-the-badge&logo=discord&logoColor=white">
</p>

**English** · [العربية](#-نبذة-عن-المشروع--about)

</div>

---

> [!CAUTION]
> ## ⚠️ تنبيه مهم وإخلاء المسؤولية | Disclaimer
>
> ### 🇸🇦 العربية

 هذا المشروع يتضمن آلية **Self-Bot (User Token)** بدلاً من الاعتماد حصراً على حساب بوت رسمي. استخدام Self-Bots يخالف شروط خدمة Discord (Terms of Service)، وقد يؤدي إلى تقييد الحساب أو حظره نهائياً. استخدامك للمشروع يكون على مسؤوليتك الشخصية بالكامل. أنت تتحمل مسؤولية أي نتائج، بما في ذلك حظر الحساب أو فقدان البيانات. لا يتحمل مطور المشروع مسؤولية أي أضرار ناتجة عن الاستخدام. المشروع غير رسمي وغير تابع لـDiscord Inc. أو معتمد منها.
>
> ### 🇬🇧 English

 This project includes **Self-Bot (User Token)** functionality rather than relying exclusively on an official Discord bot account. Self-Bots violate Discord's Terms of Service and may result in account restrictions or permanent suspension. You use this project entirely at your own risk and are responsible for any consequences, including account bans or data loss. The developer accepts no responsibility for damages resulting from use. This is an unofficial project and is not affiliated with or endorsed by Discord Inc.

---

<div align="center">

## 🧭 دليل المحتويات | Navigation

*انتقل مباشرةً إلى القسم الذي تحتاجه · Jump to any section*

</div>

- [📖 نبذة عن المشروع | About](#-نبذة-عن-المشروع--about)
- [✨ المميزات | Features](#-المميزات--features)
- [🛠️ المتطلبات | Requirements](#️-المتطلبات--requirements)
- [🚀 التثبيت والإعداد | Setup & Installation](#-التثبيت-والإعداد--setup--installation)
- [🎮 نظرة عامة على الواجهة والملفات | Interface & Files Overview](#-نظرة-عامة-على-الواجهة-والملفات--interface--files-overview)
- [📁 هيكل الملفات | Project Structure](#-هيكل-الملفات--project-structure)
- [🔐 الأمان | Security](#-الأمان--security)
- [❓ الأسئلة الشائعة | FAQ](#-الأسئلة-الشائعة--faq)
- [🔗 المراجع الرسمية | Official Resources](#-المراجع-الرسمية--official-resources)

---

## 📖 نبذة عن المشروع
### 🇬🇧 About the Project

> **Project overview** · نظرة سريعة على فكرة المشروع وتقنياته.

### 🇸🇦 العربية

**Discord Server Generator** أداة طرفية مكتوبة بلغة JavaScript باستخدام Node.js. صُممت لتنظيم بعض العمليات المتعلقة بسيرفرات Discord من خلال واجهة طرفية تفاعلية (TUI). تعتمد الواجهة على مكتبة `blessed`، ويتضمن المشروع مكونات لإدارة الإعدادات ومتابعة الأحداث والتعامل مع سجلات الروابط والأخطاء.

### 🇬🇧 English

**Discord Server Generator** is a terminal application written in JavaScript and powered by Node.js. It is designed to organize Discord server-related workflows through an interactive Terminal User Interface (TUI). The interface uses the `blessed` library, and the project includes components for configuration, activity monitoring, link records, and error handling.

---

## ✨ المميزات
### 🇬🇧 Features

الوظائف العامة والمكونات الرئيسية للمشروع · A summary of the project's main components.

| الميزة | Feature | الوصف | Description |
|:--|:--:|:--|:--|
| 🖥️ واجهة طرفية تفاعلية | Interactive TUI | واجهة تفاعلية باستخدام مكتبة `blessed`. | Interactive terminal interface powered by `blessed`. |
| ⚙️ إدخال الإعدادات | Configurable Input | إدخال الخيارات من خلال الواجهة. | Enter options through the terminal interface. |
| 🌐 تكامل OAuth2 | OAuth2 Integration | مكونات للتعامل مع روابط التفويض. | Components for handling authorization links. |
| 📋 متابعة الأحداث | Activity Monitoring | متابعة الأحداث ذات الصلة. | Monitoring of relevant events. |
| 🔗 إدارة الروابط | Link Management | حفظ سجلات الروابط محلياً. | Local link record management. |
| 🔄 معالجة الأخطاء | Error Handling | التعامل مع الأخطاء والاستجابات غير المتوقعة. | Handling errors and unexpected responses. |
| ⏱️ التعامل مع حدود الطلبات | Rate Limit Handling | مراعاة استجابات حدود الطلبات. | Awareness of rate-limit responses. |
| 📱 دعم Termux | Termux Compatibility | إمكانية تجهيز بيئة Node.js على Android. | Node.js environment setup on Android. |

> **ملاحظة | Note:** ذكر هذه المميزات لا يعني أن المشروع معتمد من Discord أو أن جميع عملياته مدعومة رسمياً.  
> These features do not imply Discord endorsement or official support for every operation.

---

## 🛠️ المتطلبات

### 🇸🇦 العربية

| المتطلب | Requirement | التفاصيل | Details |
|:--|:--|:--|:--|
| Node.js | Node.js | الإصدار 18 أو أحدث | Version 18 or newer |
| npm | npm | مدير الحزم المرفق مع Node.js | Package manager included with Node.js |
| Git | Git | لإدارة واستنساخ المستودع | Repository management and cloning |
| Termux | Termux | لمستخدمي Android | For Android users |
| Termux:API | Termux:API | تكامل Android اختياري عند الحاجة | Optional Android integration when required |

---

## 🚀 التثبيت والإعداد

### 🇸🇦 العربية

اتبع متطلبات البيئة وإرشادات الإعداد قبل فحص ملفات المشروع.

Review the environment requirements and setup notes before inspecting the project.

### 1. تثبيت Node.js وTermux | Install Node.js & Termux

**العربية:** يحتاج المشروع إلى Node.js الإصدار 18 أو أحدث. على Android، ثبّت Termux من مصدر موثوق، ثم افتحه ونفّذ:

```bash
pkg update && pkg upgrade
pkg install nodejs git
```

تحقق من تثبيت الأدوات:

```bash
node -v
npm -v
git --version
```

**English:** Node.js 18 or newer is required. On Android, install Termux from a trusted source, open it, and run:

```bash
pkg update && pkg upgrade
pkg install nodejs git
```

Verify the installation with `node -v`, `npm -v`, and `git --version`.

### 2. تثبيت المكتبات | Install Dependencies

من المجلد الرئيسي للمشروع، نفّذ:

```bash
npm install
```

يقوم npm بقراءة `package.json` وتثبيت الاعتماديات المسجلة فيه.

From the project root directory, run `npm install` to install the dependencies listed in `package.json`.

### 3. إعداد متغيرات البيئة | Environment Variables

إذا كان ملف `.env.example` موجوداً، استخدمه كمرجع لإنشاء ملف محلي باسم `.env`. قد تتضمن إعدادات المشروع المتغيرات التالية:

```env
DISCORD_TOKEN=your_token_here
BOT_CLIENT_ID=your_bot_client_id_here
```

| المتغير | الشرح |
|:--|:--|
| `DISCORD_TOKEN` | متغير مصادقة حساس. لا تضع فيه توكن حساب Discord الشخصي. لا تستخدم إلا بيانات اعتماد بوت رسمي ضمن تكامل يدعمه التطبيق. |
| `BOT_CLIENT_ID` | معرّف تطبيق البوت (Application Client ID)، وليس رمزاً سرياً. |

> [!CAUTION]
> **تحذير أمني:** لا تشارك ملف `.env` ولا ترفعه إلى GitHub. تأكد من إدراجه في `.gitignore`. لا تضع User Token في المستودع أو الصور أو الرسائل. وجود متغير في ملف الإعدادات لا يجعل استخدام Self-Bot مسموحاً أو آمناً.

If `.env.example` is available, use it as a reference for a local `.env` file. Never publish the file or put a personal Discord user token in it. Only use official bot credentials where the application supports an official bot integration. Ensure `.env` is listed in `.gitignore`.

### 4. فحص الصياغة | Syntax Check

لفحص صياغة JavaScript في الملف دون تشغيل التطبيق أو الاتصال بـDiscord، نفّذ:

```bash
node --check mass.js
```

عدم ظهور أخطاء يعني أن فحص الصياغة اجتاز هذه المرحلة فقط؛ ولا يثبت سلامة المنطق أو نجاح التشغيل.

To check JavaScript syntax without executing the application or connecting to Discord, run `node --check mass.js`. A clean result confirms syntax only; it does not guarantee correct runtime behavior.

---

## 🎮 نظرة عامة على الواجهة والملفات

### 🇸🇦 العربية

### 🖥️ واجهة الأداة | Terminal Interface

**العربية:** تستخدم الأداة واجهة طرفية تفاعلية مبنية بمكتبة `blessed`. حقل الإدخال مخصص لاستقبال القيمة أو الخيار الذي تعرضه الواجهة في المرحلة الحالية. تعرض الواجهة حالة التفاعل والرسائل المرتبطة به. هذا وصف عام لمكونات الواجهة، وليس دليلاً لتنفيذ عمليات Self-Bot.

**English:** The application uses an interactive terminal interface built with `blessed`. Its input field receives the value or option requested by the current screen, while the interface displays interaction status and related messages. This is a general description of the UI, not an operational guide for Self-Bot activity.

### 🔗 ملف الروابط | Links File

**العربية:** ملف `links.txt` مخصص للاحتفاظ بسجلات الروابط التي ينتجها التطبيق، بحيث تبقى السجلات النصية متاحة للمراجعة لاحقاً. تعامل مع محتوياته بحذر، ولا تنشر روابط خاصة أو بيانات قد تمنح وصولاً غير مقصود.

**English:** The `links.txt` file is intended to keep text records of links produced by the application for later reference. Treat its contents carefully and do not publish private links or information that could grant unintended access.

---

## 📁 هيكل الملفات

### 🇸🇦 العربية

نظرة منظمة على الملفات الأساسية ووظيفة كل منها · A concise map of the main project files.

```text
discord-server-generator/
│
├── mass.js          # Main application source
├── package.json     # Project metadata and dependencies
├── .env.example     # Environment variable template
├── .gitignore       # Git exclusion rules
├── links.txt        # Local link records (if created)
└── README.md        # Project documentation
```

| الملف | الوظيفة |
|:--|:--|
| `mass.js` | الملف الأساسي الذي يحتوي على كود التطبيق. |
| `package.json` | بيانات المشروع والمكتبات المطلوبة. |
| `.env.example` | نموذج لمتغيرات البيئة. |
| `.gitignore` | تحديد الملفات التي يجب استثناؤها من Git. |
| `links.txt` | سجل نصي محلي للروابط، إذا تم إنشاؤه. |
| `README.md` | توثيق المشروع. |

---

## 🔐 الأمان

### 🇸🇦 العربية

> تعامل مع بيانات المصادقة والروابط الخاصة باعتبارها معلومات حساسة.

Treat credentials and private links as sensitive information.

- لا تنشر رموز الدخول أو بيانات المصادقة.
- لا ترفع ملف `.env` إلى GitHub.
- لا تضع بيانات الاعتماد مباشرة داخل الكود.
- تعامل مع User Token باعتباره معلومة سرية شديدة الحساسية.
- لا تشارك بيانات المصادقة مع أي جهة أخرى.
- إذا انكشفت بيانات اعتماد، اتخذ إجراءات تأمين الحساب فوراً.
- راجع صلاحيات التطبيقات والروابط قبل منحها.

Security best practices:

- Never publish authentication tokens or credentials.
- Never commit your `.env` file to GitHub.
- Do not hardcode credentials into source files.
- Treat user tokens as highly sensitive information.
- Never share credentials with third parties.
- Secure the relevant account immediately if credentials are exposed.
- Review application permissions and authorization links before granting access.

---

## ❓ الأسئلة الشائعة

### 🇸🇦 العربية

<details>
<summary><strong>🔴 ماذا يعني الخطأ TOKEN_INVALID؟</strong></summary>

يعني أن بيانات المصادقة المقدمة لم يتم قبولها. تحقق من إعداداتك، ولا تشارك بيانات الدخول مع أي شخص.

It means the supplied authentication credentials were rejected. Review your configuration and never share credentials.
</details>

<details>
<summary><strong>🟠 لماذا لا يتم التعرف على البوت؟</strong></summary>

قد تكون هناك مشكلة في إعدادات التطبيق أو Client ID أو الصلاحيات. راجع إعدادات التطبيق في Discord Developer Portal.

The application configuration, Client ID, or permissions may be incorrect. Review the application in the Discord Developer Portal.
</details>

<details>
<summary><strong>🟡 لماذا لا يفتح المتصفح تلقائياً؟</strong></summary>

قد يعتمد ذلك على بيئة التشغيل وإعدادات Android ومكونات Termux المتوافقة، بما في ذلك Termux:API عند الحاجة.

This may depend on the runtime environment, Android settings, and compatible Termux components, including Termux:API where needed.
</details>

<details>
<summary><strong>🔵 هل الأداة رسمية من Discord؟</strong></summary>

لا. هذا مشروع مستقل وغير تابع لشركة Discord Inc. أو معتمد منها.

No. This is an independent project and is not affiliated with or endorsed by Discord Inc.
</details>

<details>
<summary><strong>🟣 هل استخدام Self-Bot آمن؟</strong></summary>

لا يمكن اعتباره استخداماً آمناً أو مدعوماً؛ فهو يخالف شروط خدمة Discord وقد يؤدي إلى تقييد الحساب أو حظره.

It is not a safe or supported usage pattern. Self-Bots violate Discord's Terms of Service and may result in account restrictions or suspension.
</details>

---

## 🔗 المراجع الرسمية

### 🇸🇦 العربية

- [Discord Official Website](https://discord.com/)
- [Discord Developer Portal](https://discord.com/developers/applications)
- [Discord Developer Documentation](https://discord.com/developers/docs)
- [Discord Terms of Service](https://discord.com/terms)
- [Discord Developer Policy](https://discord.com/developers/docs/policies-and-agreements/developer-policy)
- [Node.js Downloads](https://nodejs.org/en/download)

---

## ⚖️ إخلاء المسؤولية القانوني

### 🇸🇦 العربية

هذا المشروع مستقل ومقدم كما هو، ولا توجد أي علاقة رسمية بينه وبين Discord Inc. لا يقدم المطور أي ضمان لاستمرارية عمل الخدمات الخارجية أو توافقها. يتحمل المستخدم مسؤولية التأكد من أن استخدامه للمشروع يتوافق مع القوانين والشروط المعمول بها.

This is an independent project provided "as is" and is not affiliated with Discord Inc. The developer makes no guarantees regarding third-party service availability or compatibility. Users are responsible for ensuring that their use of the project complies with applicable laws and terms.

**Discord is a trademark of Discord Inc.**

---

<p align="center">
  <strong>Made with ❤️ for the developer community</strong>
  <br>
  <sub>Unofficial Discord Project</sub>
</p>

# 🚀 Discord Server Generator

<p align="center">
  <strong>A Node.js Terminal Tool for Discord Server Automation</strong>
  <br>
  <strong>أداة طرفية لأتمتة عمليات سيرفرات ديسكورد</strong>
</p>

<p align="center">
  <img alt="Node.js 18+" src="https://img.shields.io/badge/Node.js-18%2B-339933?style=flat-square&logo=node.js&logoColor=white">
  <img alt="JavaScript" src="https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=flat-square&logo=javascript&logoColor=black">
  <img alt="Terminal UI" src="https://img.shields.io/badge/Interface-Terminal-blue?style=flat-square">
  <img alt="Unofficial Discord project" src="https://img.shields.io/badge/Discord-Unofficial-5865F2?style=flat-square&logo=discord&logoColor=white">
</p>

<p align="center">
  <a href="#-تنبيه-وإخلاء-المسؤولية">العربية</a> ·
  <a href="#-disclaimer">English</a>
</p>

---

> [!CAUTION]
> ## ⚠️ تنبيه مهم — اقرأ قبل الاستخدام
>
> يستخدم هذا المشروع آلية **Self-Bot (User Token)** بدلاً من حساب بوت Discord رسمي. استخدام Self-Bots يخالف **شروط خدمة Discord (Terms of Service)**، وقد يؤدي إلى تقييد الحساب أو حظره نهائياً.
>
> باستخدامك للمشروع، فأنت تتحمل المسؤولية الكاملة عن النتائج المترتبة على استخدامه، بما في ذلك حظر الحساب أو فقدان البيانات. لا يتحمل مطور المشروع مسؤولية هذه النتائج.
>
> المشروع غير رسمي، ولا يتبع Discord Inc. أو يحظى بموافقتها.

> [!CAUTION]
> ## ⚠️ Important Disclaimer
>
> This project uses **Self-Bot (User Token)** functionality instead of an official Discord bot account. Self-Bots violate the **Discord Terms of Service** and may result in account restrictions or permanent suspension.
>
> You are entirely responsible for your use of this project and any resulting consequences, including account bans or data loss. The developer accepts no responsibility for such consequences.
>
> This is an unofficial project and is not affiliated with or endorsed by Discord Inc.

---

## 📚 المحتويات | Table of Contents

- [نبذة عن المشروع | About](#-نبذة-عن-المشروع--about)
- [المميزات | Features](#-المميزات--features)
- [المتطلبات | Requirements](#-المتطلبات--requirements)
- [هيكل الملفات | Project Structure](#-هيكل-الملفات--project-structure)
- [الأمان | Security](#-الأمان--security)
- [الأسئلة الشائعة | FAQ](#-الأسئلة-الشائعة--faq)
- [المراجع الرسمية | Official Resources](#-المراجع-الرسمية--official-resources)

---

## 📖 نبذة عن المشروع | About

### 🇸🇦 العربية

**Discord Server Generator** أداة تعمل من خلال سطر الأوامر، ومكتوبة بلغة **JavaScript** باستخدام **Node.js**. صُممت لتنظيم وأتمتة مجموعة من العمليات المتعلقة بسيرفرات Discord من خلال واجهة طرفية تفاعلية (TUI).

تعتمد واجهة الأداة على مكتبة `blessed`، وتتضمن مكونات للتعامل مع عمليات التفويض ومتابعة الأحداث وإدارة سجلات الروابط ومعالجة الأخطاء.

### 🇬🇧 English

**Discord Server Generator** is a command-line application written in **JavaScript** and powered by **Node.js**. It is designed to organize and automate a set of Discord server-related workflows through an interactive Terminal User Interface (TUI).

The interface is built with the `blessed` library. The project includes components for authorization workflows, activity monitoring, link records, and error handling.

---

## ✨ المميزات | Features

| الميزة | Feature | الوصف | Description |
|:--|:--:|:--|:--|
| 🖥️ واجهة طرفية تفاعلية | Interactive TUI | واجهة تفاعلية باستخدام مكتبة `blessed`. | Interactive terminal interface powered by `blessed`. |
| ⚙️ إدخال الإعدادات | Configurable Input | تحديد إعدادات العملية من داخل الواجهة. | Configure workflow options through the interface. |
| 🌐 تكامل OAuth2 | OAuth2 Integration | التعامل مع روابط التفويض الخاصة بالتطبيقات. | Handles application authorization links. |
| 📋 متابعة الأحداث | Activity Monitoring | متابعة الأحداث ذات الصلة أثناء التشغيل. | Monitors relevant activity during operation. |
| 🔗 إدارة الروابط | Link Management | حفظ سجلات الروابط في ملف محلي. | Stores link records in a local file. |
| 🔄 معالجة الأخطاء | Error Handling | التعامل مع الأخطاء والاستجابات غير المتوقعة. | Handles errors and unexpected responses. |
| ⏱️ مراعاة حدود المعدل | Rate Limit Awareness | التعامل مع استجابات حدود الطلبات. | Accounts for rate-limit responses. |
| 📱 دعم Termux | Termux Compatibility | إمكانية تشغيل بيئة المشروع على Termux. | Supports running the project environment in Termux. |

> **ملاحظة | Note:** ذكر هذه المميزات لا يعني أن المشروع معتمد من Discord أو أن جميع عملياته مدعومة رسمياً.  
> These features do not imply Discord endorsement or official support for every operation.

---

## 🛠️ المتطلبات | Requirements

| المتطلب | Requirement | التفاصيل | Details |
|:--|:--|:--|:--|
| Node.js | Node.js | الإصدار 18 أو أحدث | Version 18 or newer |
| npm | npm | مدير الحزم المرفق مع Node.js | Package manager included with Node.js |
| Git | Git | لإدارة واستنساخ المستودع | For repository management and cloning |
| Termux | Termux | لمستخدمي Android | For Android users |
| Termux:API | Termux:API | تكامل إضافي مع Android عند الحاجة | Optional Android integration when required |

---

## 🚀 Setup & Installation | التثبيت والإعداد

> [!WARNING]
> **مهم:** الملف `mass.js` الحالي يتضمن تسجيل دخول باستخدام Self-Bot وإنشاء سيرفرات عبر حساب مستخدم. هذا يخالف شروط Discord. لذلك يقتصر هذا القسم على تجهيز البيئة وفحص الملفات محلياً، ولا يشرح تشغيل هذا السلوك أو إعداد بيانات دخول له.

### المتطلبات | Requirements

- Node.js 18 أو أحدث.
- npm (يأتي مع Node.js).
- Git، إذا أردت تنزيل المستودع باستخدام Git.
- على Android يمكن استخدام Termux لتجهيز بيئة Node.js.

### تجهيز البيئة | Prepare the environment

1. ثبّت Node.js وnpm من مصدرهما الرسمي. في Termux يمكن تثبيت Node.js بالأمر:

   ```bash
   pkg update
   pkg install nodejs git
   ```

2. انتقل إلى مجلد المشروع بعد تنزيله.
3. افحص `package.json` واقرأ أسماء المكتبات قبل تثبيتها. يحتوي المشروع على اعتماد `discord.js-selfbot-v13`؛ لا تستخدمه لتسجيل الدخول بحساب مستخدم أو لأتمتة الحساب.

### فحص JavaScript دون تشغيل التطبيق | Syntax check only

يمكنك فحص الصياغة البرمجية للملف دون تنفيذ التطبيق أو الاتصال بـDiscord:

```bash
node --check mass.js
```

إذا لم يظهر أي خطأ، فهذا يعني أن فحص الصياغة مرّ بنجاح فقط؛ ولا يعني أن التطبيق آمن أو أن وظائفه تعمل بشكل صحيح.

### ملاحظة حول ملفات البيئة | Environment files

لا تضف Discord User Token أو أي بيانات اعتماد إلى README أو ملفات Git. لا تشارك ملفات البيئة أو بيانات الدخول. لا يوجد في هذا الدليل إعداد لتسجيل الدخول أو تشغيل وظائف Self-Bot.

---

## 📁 هيكل الملفات | Project Structure

```text
discord-server-generator/
│
├── mass.js
│   └── الملف الأساسي للتطبيق
│
├── package.json
│   └── معلومات المشروع والمكتبات المطلوبة
│
├── .env.example
│   └── نموذج متغيرات البيئة
│
├── .gitignore
│   └── الملفات المستثناة من Git
│
├── links.txt
│   └── سجل الروابط المحلي
│
└── README.md
    └── توثيق المشروع
```

### وظيفة الملفات | File Descriptions

| الملف | الوظيفة |
|:--|:--|
| `mass.js` | الملف الرئيسي الذي يحتوي على كود التطبيق. |
| `package.json` | يحدد بيانات المشروع والمكتبات المطلوبة. |
| `.env.example` | نموذج توضيحي لمتغيرات البيئة. |
| `.gitignore` | يمنع إضافة الملفات الحساسة أو غير الضرورية إلى Git. |
| `links.txt` | ملف محلي للاحتفاظ بسجلات الروابط. |
| `README.md` | ملف توثيق المشروع. |

---

## 🔐 الأمان | Security

### 🇸🇦 إرشادات الأمان

- لا تنشر رموز الدخول أو بيانات المصادقة.
- لا ترفع ملف `.env` إلى مستودع GitHub.
- لا تضع بيانات الاعتماد مباشرة داخل الكود.
- تعامل مع User Token باعتباره معلومة سرية شديدة الحساسية.
- لا تشارك بيانات المصادقة مع أي جهة أخرى.
- إذا انكشف أي رمز دخول، اتخذ الإجراءات اللازمة لتأمين الحساب فوراً.

### 🇬🇧 Security Guidelines

- Never publish authentication tokens or credentials.
- Never commit your `.env` file to GitHub.
- Do not hardcode credentials into source files.
- Treat user tokens as highly sensitive information.
- Never share authentication credentials with third parties.
- If a credential is exposed, take immediate steps to secure the account.

---

## ❓ الأسئلة الشائعة | FAQ

<details>
<summary><strong>🔴 ما معنى الخطأ TOKEN_INVALID؟</strong></summary>

يعني أن بيانات المصادقة المقدمة لم يتم قبولها. تحقق من إعدادات المصادقة، ولا تشارك بيانات الدخول مع أي شخص.
</details>

<details>
<summary><strong>🟠 لماذا لا يتم التعرف على البوت؟</strong></summary>

قد تكون هناك مشكلة في إعدادات التطبيق أو Client ID أو إعدادات التفويض أو الصلاحيات المطلوبة. راجع إعدادات التطبيق في Discord Developer Portal.
</details>

<details>
<summary><strong>🟡 لماذا لا يفتح المتصفح تلقائياً؟</strong></summary>

قد يعتمد فتح المتصفح على بيئة التشغيل وإعدادات Android ومكونات Termux المتوافقة، بما في ذلك Termux:API عند الحاجة.
</details>

<details>
<summary><strong>🔵 هل الأداة رسمية من Discord؟</strong></summary>

لا. هذا مشروع مستقل وغير تابع لشركة Discord Inc. أو معتمد منها.
</details>

<details>
<summary><strong>🟣 هل استخدام Self-Bot آمن؟</strong></summary>

لا يمكن اعتباره استخداماً آمناً أو مدعوماً؛ فهو يخالف شروط خدمة Discord وقد يؤدي إلى تقييد الحساب أو حظره.
</details>

<details>
<summary><strong>🟢 أين أجد معلومات Discord الرسمية؟</strong></summary>

يمكنك الرجوع إلى [Discord Developer Portal](https://discord.com/developers/applications) و[وثائق المطورين](https://discord.com/developers/docs).
</details>

---

## 🌐 المراجع الرسمية | Official Resources

| المصدر | الرابط |
|:--|:--|
| Discord | [discord.com](https://discord.com/) |
| Discord Developer Portal | [Applications](https://discord.com/developers/applications) |
| Discord Developer Documentation | [Documentation](https://discord.com/developers/docs) |
| Discord Terms of Service | [Terms](https://discord.com/terms) |
| Discord Developer Policy | [Policy](https://discord.com/developers/docs/policies-and-agreements/developer-policy) |

---

## ⚖️ إخلاء المسؤولية | Legal Notice

هذا المشروع مستقل ومقدم كما هو، لأغراض التعلم والبحث. لا توجد أي علاقة رسمية بينه وبين Discord Inc. ولا يقدم المطور أي ضمان لاستمرارية عمل الخدمات الخارجية أو توافقها.

This is an independent project provided "as is" for educational and research purposes. It is not affiliated with Discord Inc. The developer makes no guarantees regarding the availability, compatibility, or uninterrupted operation of third-party services.

**Discord is a trademark of Discord Inc.**

---

## 👨‍💻 المطور | Author

**Discord Server Generator**  
Built with **Node.js** and **JavaScript**.

<p align="center">
  <strong>Made with ❤️ for the developer community</strong>
  <br>
  <sub>Unofficial Discord Project</sub>
</p>

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
- [التثبيت والإعداد | Setup & Installation](#-التثبيت-والإعداد--setup--installation)
- [طريقة التشغيل | Usage](#-طريقة-التشغيل--usage)
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

## 🚀 التثبيت والإعداد | Setup & Installation

### تجهيز البيئة | Prepare the environment

1. ثبّت Node.js وnpm من مصدرهما الرسمي. في Termux يمكن تثبيت Node.js بالأمر:

   ```bash
   pkg update
   pkg install nodejs git

# Discord Server Gen

> **Unofficial third-party project. Not affiliated with, endorsed by, or supported by Discord.**

## العربية

### نبذة
أداة واجهة طرفية تفاعلية تعرض عنوان **DISCORD SERVER GEN**، ورابطًا حاليًا في قسم **Current Link**، وسجل الأحداث في **Logs**، وحقل إدخال **Input**.

### عناصر الواجهة ورسائل الحالة
| النص الظاهر | التوضيح |
|---|---|
| `Ready. Type number or "delete".` | الواجهة تعرض أنها بانتظار إدخال. |
| `Creating Server X/Y...` | حالة إنشاء معروضة في الواجهة. |
| `Server X ready. Add bot, then PRESS ENTER.` | إشعار بأن مرحلة السيرفر وصلت إلى حالة الجاهزية. |
| `Checking server Audit Logs...` | حالة فحص سجلات التدقيق. |
| `Bot detected in server X!` | رسالة تفيد بأن الأداة رصدت البوت. |
| `Bot NOT found. Wait 5s and press ENTER again.` | رسالة تفيد بأن البوت لم يُرصد في الفحص. |
| `Preparing next server...` | الواجهة تعرض التحضير للمرحلة التالية. |

### التثبيت
يتطلب المشروع إصدار Node.js المتوافق مع ملف `package.json` الخاص بالمشروع. بعد الحصول على ملفات المصدر:

```bash
npm install
```

### إعدادات البيئة
قد يستخدم المشروع متغيرات بيئة مثل `DISCORD_TOKEN` و`BOT_CLIENT_ID`. راجع الكود ومصدر المشروع لتحديد نوع بيانات الاعتماد المطلوبة بدقة. لا تضع أبدًا أي Token حقيقي في README أو في مستودع عام، ولا تشارك بيانات اعتماد حسابك.

### تنبيه مهم
وفق شروط Discord، أتمتة حسابات المستخدمين عبر Self-Bots غير مسموح بها وقد تؤدي إلى إجراءات على الحساب، بما فيها تعطيله. هذا المشروع غير رسمي، واستخدامه لا يعني موافقة Discord عليه. لا تستخدمه لإزعاج الآخرين أو إرسال دعوات غير مرغوبة أو تنفيذ نشاط جماعي غير مصرح به.

---

## English

### Overview
An interactive terminal UI displaying the **DISCORD SERVER GEN** header, a **Current Link** panel, an event **Logs** panel, and an **Input** field.

### Interface labels and status messages
| Displayed text | Description |
|---|---|
| `Ready. Type number or "delete".` | The interface indicates that it is waiting for input. |
| `Creating Server X/Y...` | Creation status displayed by the interface. |
| `Server X ready. Add bot, then PRESS ENTER.` | Indicates that the server stage has reached its ready state. |
| `Checking server Audit Logs...` | Audit-log checking status. |
| `Bot detected in server X!` | The UI reports that the bot was detected. |
| `Bot NOT found. Wait 5s and press ENTER again.` | The UI reports that the bot was not detected. |
| `Preparing next server...` | The interface indicates preparation for the next stage. |

### Installation
Use a Node.js version compatible with the project's own `package.json`. After obtaining the source files, install the dependencies:

```bash
npm install
```

### Environment configuration
The project may refer to environment variables such as `DISCORD_TOKEN` and `BOT_CLIENT_ID`. Check the actual source code to confirm the required credential type. Never publish a real token in this README or in a public repository, and never share account credentials.

### Important disclaimer
Discord does not permit automating normal user accounts through Self-Bots. This may lead to enforcement action, including account termination. This is an unofficial third-party project and is not approved by Discord. Do not use it for harassment, unsolicited invitations, or unauthorized bulk activity.

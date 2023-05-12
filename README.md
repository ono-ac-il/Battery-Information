<div dir="rtl">

# מידע על סוללה
בתרגיל זה המשתמש יזין פרטי סוללה ואנחנו נביא לו מידע על הסוללה

בתרגיל זה אתם תצרו 2 קבצים בתוך תיקיה. קובץ אחד בשם `index.html` וקובץ נוסף בשם `script.js`.
בקובץ `index.html` יש לכתוב קוד html כלשהו, ובקובץ `script.js` יש לכתוב קוד javascript.


## קוד html
בקובץ index.html יש לכתוב קוד html כלשהו. יש להוסיף שדה קלט (input) וכפתור (button) לדף.
עליכם לתת לאלמנטים הללו id ייחודיים כדי שתוכלו להשתמש בהם בקוד javascript.
 יש להוסיף שדה נוסף שיכיל את שם המפלגה שהפונקציה מחזירה


## קוד javascript
### חלק 1: כתיבת פונקציה
יש לכתוב פונקציה בשם `getBatteryInfo`. 
הפונקציה תשלוף מתוך ה-html את נתוני השדות שהמשתמש הזין ותכתוב לתוך האלמנט המתאים בדף ה-html את התשובה.

### הקלט הרצוי מהמשתמש והפלט לדף
המשתמש יזין אחת מהאפשרויות הבאות: `Lead Acid`, `Li-ion Cobalt`, `NiMH`, `NiCd`.

הפלט עבור כל אחד מהקלטים:

- `Lead Acid`: **Life Cycle: 200-300, Cell Voltage: 2V, Peak Load Current: 5C, Toxicity: Very high**
- `Li-ion Cobalt` : **Life Cycle: 500-1000, Cell Voltage: 3.6V, Peak Load Current: >3C, Toxicity: Low**
- `NiMH`: **Life Cycle: 300-500, Cell Voltage: 1.2V, Peak Load Current: 5C, Toxicity: Low**
- `NiCd`: **Life Cycle: 1000, Cell Voltage: 1.2V, Peak Load Current: 20C, Toxicity: Very high**

</div>
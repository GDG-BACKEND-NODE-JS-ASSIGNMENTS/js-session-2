# 📌 **Student Task 3: JavaScript Functions & Loops**

## **Task Overview**
In this task, you will write a JavaScript program that:
- Asks the user for input using `prompt()`.
- Uses `if-else` to determine if the entered number is **even or odd**.
- Uses a `for` loop to print numbers from **1 to 10**.

---

## **📂 File Structure**
- Write your code **only** in the following file:  
  📁 `Assignment/index.js`
- **Do not modify any other files**. If you edit other files, your submission **will be rejected**.

---

## **✅ Instructions**
1. **Write your code in `Assignment/index.js`**:
   - Implement a function `checkEvenOdd(number)` that:
     - Takes a number as input.
     - Returns `"Even"` if the number is even.
     - Returns `"Odd"` if the number is odd.
     - Returns `"Invalid input"` if the input is not a number.
   - Implement a function `printNumbers()` that:
     - Uses a `for` loop to generate numbers from **1 to 10**.
     - Returns an array containing these numbers.

2. **Export Your Functions Properly**
   - At the end of your file, export the functions like this:
     ```js
     module.exports = { checkEvenOdd, printNumbers };
     ```
  
3. **Follow Submission Rules**
   - ❌ Do **not** change any file except `Assignment/index.js`.
   - ❌ Do **not** modify `package.json`, test files, or other directories.
   - ✅ Ensure your code runs without syntax errors.

---

## **💡 Example Behavior**
If the user inputs `4`, the function should return:
```js
checkEvenOdd(4); // "Even"
```
If the user inputs `7`, the function should return:
```js
checkEvenOdd(7); // "Odd"
```
The `printNumbers()` function should return:
```js
printNumbers(); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

---

## **🚀 Submission Guidelines**
- Ensure your functions are correctly implemented and exported.
- Push your code to **GitHub Classroom** before the deadline.
- **Breaking any rules (e.g., modifying other files) will result in submission removal.**

Good luck! 🎯
# Personal Assignment 1 Report Template

## 1. Project Overview

**Project Name:** 
Salary Tax Calculator

**What does your calculator do?**  
This calculator helps for users calculate their net salary after tax. The users enters their name, salary tax rate. Also the program calculates how much tax they pay and how much money recieve after tax. It shows the income cetegory

---

## 2. Inputs

List and explain all inputs you used.

| Input Name | Unit | What it Represents |
| Name |Text|users name|
| Salary | KZT| Monthly salary before tax |
| Tax Rate | % | Tax persentage |

Explain in words:  
These inputs are important because we need them to calculate the final salary. Salary shows how much money taken by tax. The name makes result personal.

---

## 3. Process (Calculation Logic)

**Formula or Calculation Used:**  
Tax amoun = salary * (tax rate / 100)

Example:  
Net salary = salary - tax amount

**Steps:**
1. Get values from HTML 
2. Change salary and tax rate into numbers 
3. Check in inputs are correct
4. Calculate tax amounr
5. Calculate net salary
6. Show the result

---

## 4. Conditional Logic (if / else)

The program checks the income level:

if net salary is less than 300,000 kzt → Low income
if net salary is between 3000,000 and 800,000 kzt → Middle income
if net salary is 800,000 kzt or more → HIgh income

The program also check

Name is empty
Salary is zero or negative
Tax rate is negative

If something is wrong, it shows an error message.

---

## 5. Output

What does your program show to the user?
Greeting with users name
Tax amount
Net salary
Income category
- Number are formatted with thousands separtor

---

## 6. Edge Cases / Unusual Inputs

if the enters wrong information emty fields, zero salary, negative numbers, the program shows:

PLease enter valid information in all fields

This prevents mistakes in calculation.

---

## 7. Optional Features (If You Added Any)

Personalized message
Income category system
Number formatting
Modern design with gradient background

---

## 8. How to Run the Project

1. Open index.html 
2. Enter name, salary, and tax rate 
3. Click the calculate button
4. See the result 

---

## 9. AI Usage (If Used)

Did you use AI tools?  
(Yes)

If yes, explain briefly:
- I asked AI to help me organize the structure of the report, explain some JS function  
- I modified the income categories and improved the design also logic by myself
- So now I fully understand how the calculation works how to use if/else coditions and how to connect HTML, CSS, AND JavaScript

---

## 10. Reflection

This assigment, I learned how to build a simple web calculator.I understood better how JS works with HTML inputs and I also learned how to use conditions and formulas in real - life situation. This project helped me confidient in coding.

(2–4 sentences)

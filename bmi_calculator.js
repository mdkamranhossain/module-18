/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

let weightKg = 62;
let heightCm = 1.55;
let bmi = (weightKg / (heightCm*heightCm));
console.log(bmi.toFixed(2));

if (bmi < 18.5){
    console.log('You are underweight');
}

else if (bmi <= 29.9){
    console.log('You are overweight');
}
else if (bmi <= 25){
    console.log('You are normal');
}
else {
    console.log('You are obese.');
}






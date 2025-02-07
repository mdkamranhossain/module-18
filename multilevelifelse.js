const marks = 50;


if (marks <= 32){
    console.log("Fail (F Grade)");
}

else if (marks > 100 || marks < 0){
    console.log("Invalid marks");
}
else if (marks >= 80){
    console.log("A+ Grade");
}
else if (marks >= 70){
    console.log("A Grade");
}
else if (marks >= 60){
    console.log("A- Grade");
}
else if (marks >= 50){
    console.log("B Grade");
}
else if (marks >= 39){
    console.log("C Grade");
}
else if (marks >= 33){
    console.log("D Grade");
}
else {
    console.log("Invalid marks");
}
/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

let mark = 80;
if (mark <= 59){
    console.log('F Grade')
}
else if (mark <= 69){
    console.log('D Grade')
}
else if (mark <= 79){
    console.log('C Grade')
}
else if (mark <= 89){
    console.log('B Grade')
}
else if (mark <= 100){
    console.log('A Grade')
}
else {
    console.log("Invalid Marks")
}


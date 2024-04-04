const student = {
    fName: 'Craig',
    lName: 'Schechtman',
    age: '15',
    englishGrade: 'A',
    spanishGrade: 'C',
    mathGrade: 'A'
};

function studentGrades(){
    console.log("The student's grades are " + student.englishGrade + " " + student.spanishGrade + " and " + student.mathGrade);
}

student.grades = studentGrades;

student.grades();
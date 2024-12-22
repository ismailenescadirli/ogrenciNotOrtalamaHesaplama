let students=[
    {
       name:"Enes",
       point1:75,
       point2:100,
    },
    {
        name:"Ege",
        point1:100,
        point2:100,
    },
    {
        name:"Eren",
        point1:60,
        point2:80,
    },

    {
        name:"Baran",
        point1:70,
        point2:55,
    },


    {
        name:"Ömer",
        point1:40,
        point2:55,
    }

];

function grades(students){
   return students.map(student => {

   const average=(student.point1+student.point2)/2;
    let grade;
   if (average>=90) {
      grade="A";
   }
   else if (average>=80) {
    grade="B";
   }
   else if (average>=70) {
    grade="C";
   }
   else if(average>=60){
    grade="D";
   }
   else{
    grade="F"
   }

   return {name: student.name ,average,grade}
})
}

const StudentPointAverageAndGrade=grades(students);

console.log(StudentPointAverageAndGrade);

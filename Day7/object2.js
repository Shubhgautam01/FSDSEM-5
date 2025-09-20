const student = {
    name : "Shubh",
    course: "B-Tech",
    branch: "CS",
    section: "C",
    PhoneNo: {
        PhoneNo1 : 7451843770,
        PhoneNo1 : 7451843770,
    },
    address:{
        HouseNo:1205,
        Street:"Paramount",
        City: "Ghaziabad",
        State:"UP"
    }
}

const student2 = {
    name : "Ayush",
    course: "B-Tech",
    branch: "CSE",
    section: "C",
    PhoneNo: {
        PhoneNo1 : 7451843734,
        PhoneNo1 : 7451843755,
    },
    address:{
        HouseNo:1205,
        Street:"Paramount",
        City: "Ghaziabad",
        State:"UP"
    }
}
console.log("Before modification newstudent value of student is:",student.section);
console.log("Before modification newstudent value of student is:",student.address.City);

const newStudent= Object.assign({},student);
console.log(newStudent);


newStudent.section="A";
newStudent.address.City="Noida";



console.log("Before modification newstudent value of student is:",student.section);
console.log("Before modification newstudent value of student is:",student.address.City);
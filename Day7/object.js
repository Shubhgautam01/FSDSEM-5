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
//Accessing obj properties:
console.log(student.name);
console.log(student['name']);

let x = 'name';
console.log(student[x]);

function modifystudent(obj){
    obj.name = "ABC"
}
modifystudent(student);

console.log(student.name);
console.log(student['name']);


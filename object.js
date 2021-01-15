//การใช้งาน object
function Student(name, age, school,){
    this.name = name;
    this.age = age;
    this.school = school;
}
let student1 = new Student('ศศิธร ศรีจันทร์', 19, 'โรงเรียนเตรียมอุดมศึกษาน้อมเกล้า');
console.log(student1);
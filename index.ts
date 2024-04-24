#! /usr/bin/env node

import chalk from "chalk";
console.log(chalk.bold.rgb(204,204,204)('\n \t\t <<<<<<< =================================================  >>>>>>>\n'));
console.log(chalk.bold.rgb(204,204,204)(chalk.magenta.bold("\t\t Welcome To \ 'Code With Faheela'\ Student Management Application\n")));
console.log(chalk.bold.rgb(204,204,204)(' \t\t <<<<<<< =================================================== >>>>>>'));

 class school{
     name:string;
     students:student[] = [];
     teachers:teacher[] = [];

   addStudent(studentObj:student){
      this.students.push(studentObj)
 }
    addteacher(teacherObj:teacher){
         this.teachers.push(teacherObj)
 }
     constructor(name:string){
        this.name = name;
     }
}
class student{
    name:string;
    age:number;
    schoolName:string;

    constructor(name:string,age:number,schoolName:string){
        this.name = name;
        this.age = age;
        this.schoolName = schoolName;
    }
}
 class teacher extends student{}

 //==========>school=========>
let school1  = new school("Happy Palace")
let school2 = new school("National Schooling System")
let school3 = new school("The City Grammer School")


//===========>student=======>
let student1 = new student("pari",8, school1.name)
let student2 = new student("Aiesh",9, school2.name)
let student3 = new student("Ayeza",10, school3.name)


//===========Teacher=========>
let teacher1 = new teacher("Faheela",25, school1.name)
let teacher2 = new teacher("Yusra",20, school2.name)
let teacher3 = new teacher("Simra",22, school3.name)

//=========>Add student========>
school1.addStudent(student1)
school2.addStudent(student2)
school3.addStudent(student3)


//==========>Add teacher=======>
school1.addteacher(teacher1)
school2.addteacher(teacher2)
school3.addteacher(teacher3)

//=========>print school========>
console.log(school1)
console.log(school2)
console.log(school3)

















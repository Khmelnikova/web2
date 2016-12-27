"use strict"
class Person {
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id;
        id++;
    }
    get info() {
        return `name : ${this.name}, age : ${this.age}`;
    }
    set info(Val) {
        [this.name, this.age ] = Val.split(' ');
    }
}

class Student extends Person {
    constructor(name='Nadya',age=18, id , course = 1, group = 1) {
        super(name,age,id);
        this.course = course;
        this.group = group;
        
    }
    get info() {
        return super.info + `course : ${this.course}, group : ${this.group}`;
    }
};

class Teacher extends Person {
    constructor(name='Marina Ivanovna',age=30,id, subject = 'English') {
        super(name,age,id);
        this.subject = subject;
    }
    get info() {
        super.info + `subject : ${this.subject}`;
    }
};



let students = [];
let teachers = [];

let id = 0;

$(document).ready( function () {
    $(".error").hide();
    $(document).on("click", "#new_student", function () {
        newStudent();
    });
    $(document).on("click", "#new_teacher", function () {
        newTeacher();
    });
    $(document).on("click", ".delete_student", function () {
        deleteStudent(this.id);
    });
        $(document).on("click", ".delete_teacher", function () {
        deleteTeacher(this.id);
    });
    $(document).on("click", ".change_student", function () {
        changeStudent(this.id);
    });
        $(document).on("click", ".change_teacher", function () {
        changeTeacher(this.id);
    });
});

function newStudent(){
    let name=$(".name").val();
    let age=$(".age").val();
    let course=$("#course").val();
    let group=$("#group").val();
        let student = new Student(name, age, id, course, group);
        students.push(student);
        console.log(students);
        addStudent(students);
    id++;
};
function addStudent(students){
    let templateStudent = Handlebars.compile( 
        $("#templateStudent").html()  
    );
    $(".students").empty().append( 
        templateStudent(students) 
    );
}

function deleteStudent(id) {
    for(let i = 0; i < students.length; ++i) {
        if(students[i].id == id) {
            students.splice(i,1);
            break;
        }
    }
    $("#"+id).remove();
};

function newTeacher(){
    let name=$(".nameT").val();
    let age=$(".ageT").val();
    let subject=$("#subject").val();
        let teacher = new Teacher(name, age, id, subject);
        teachers.push(teacher);
        console.log(teachers);
        addTeachers(teachers);
    id++;
};
function addTeachers(teachers){
    let templateTeacher = Handlebars.compile( 
        $("#templateTeacher").html()  
    );
    $(".teachers").empty().append( 
        templateTeacher(teachers) 
    );
}

function deleteTeacher(id) {
    for(let i = 0; i < teachers.length; ++i) {
        if(teachers[i].id == id) {
            teachers.splice(i,1);
            break;
        }
    }
    $("#"+id).remove();
};

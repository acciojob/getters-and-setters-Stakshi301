//complete this code
class Person {
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	get name(){
		return this.name;
	}
	set age(){
		return this.age;
	};
}

class Student extends Person {
	function study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	function teach(){
		console.log(`${name} is teaching`)
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

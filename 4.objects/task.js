function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
  this.marks = [];
}

const studentFirst = new Student("Anna", "female", 23);
const studentSecond = new Student("Igor", "male", 54);
const studentThird = new Student("Nina", "female", 32);

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marksToAdd) {
  if(!this.hasOwnProperty("marks")) {
    console.log("Студент отчислен");
    return
  }
  this.marks.push(...marksToAdd);
}

Student.prototype.getAverage = function () {
  if(!this.marks || this.marks.length === 0){
    return 0;
  }

  let sum = 0;

  for(let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];
  }

  return sum / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;
  delete this.marks;

  this.excluded = reason;
}

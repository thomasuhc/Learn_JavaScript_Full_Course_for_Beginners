var miau = {
    name: "Miau",
    yearOfBirth: 1999,
    job: "Dev"
};

var Person = function(name, yearOfBirth, job) {

    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
};

Person.prototype.calculateAge = function() {
    console.log(2020 - this.yearOfBirth);
}


Person.prototype.lastName = "Meow"

var miau = new Person("Miau", 1999, "Dev");
var angela = new Person("Angela", 2000, "Teacher");
var camila = new Person("Camila", 1998, "Student");

miau.calculateAge();
angela.calculateAge();
camila.calculateAge();

console.log(miau.lastName);
console.log(angela.lastName);
console.log(camila.lastName);

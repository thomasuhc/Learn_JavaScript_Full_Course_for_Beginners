/* var miau = {
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
 */

/*  var personProto = {
     calculateAge: function() {
         console.log(2020 - this.yearOfBirth);
     }
 };

 var miau = Object.create(personProto);
 miau.name = "Miau";
 miau.yearOfBirth =1999;
 miau.job = "Cat";

 var camila = Object.create(personProto, {
     
    name: { value: "Camila" },
    yearOfBirth: { value: 1999 },
    job: { value: "Cat" }
 });
  */

/*   var a = 23;
  var b = a;
  a = 46;
  console.log(a);
  console.log(b);

  var obj1 = {
      name: "miau",
      age: 12
  };

  var obj2 = obj1;
  obj1.age = 38;
  console.log(obj1.age);
  console.log(obj2.age);


var age = 15;
 var obj = {
      name: "Angela",
      city: "Toronto"
  };

  function change(a, b) {
      age = 10;
      b.city = "Montreal";
  }

  change(age, obj);
  
  console.log(age);
  console.log(obj.city);
 */

/* var years = [1990, 2000, 2010, 2015, 2020];

 function arrayCalc (arr, fn) {

    var arrRes = [];

    for(var i = 0; i < arr.length; i++) {

        arrRes.push(fn(arr[i]));
    }
     return arrRes;
 }

 function calculateAge(el){
     return 2020 - el;
 }

 function fullAge(el) {
     return el >= 18;
 }

 function maxHeartRate(el){

    if(el >= 18 && el <= 81) {
        return Math.round(265.9 - (0.76 * el));
    } else {
        return -1;
    }
    
 }

 var ages = arrayCalc(years, calculateAge);

 var fullAge = arrayCalc(ages, fullAge);

 var rates = arrayCalc(ages, maxHeartRate);

 console.log(ages);
 console.log(fullAge);
 console.log(rates);
 */

/* function interviewQuestion (job) {
    
    if(job === "dev") {
        return function (name) {
            console.log(name + ", can explain something funny");
            }
        } else if (job === "teacher") {
            return function (name) {
                console.log("Subject are teacher ?: " + name);
            }
        } else {
            return function (name) {
                console.log("Hello " + name + " hi dude");
            }
        }
    
 }

 var teacherQuestion = interviewQuestion("teacher");

 var designQuestion = interviewQuestion("dev")

 teacherQuestion("Miau");
 designQuestion("Mila");

 interviewQuestion("Camila")("student"); */


/*  function game(){
     var score = Math.random() * 10;
     console.log(score >= 5);
 }

 game();

 
 (function game(){
    var score = Math.random() * 10;
    console.log(score >= 5);
})();


(function game(goodLuck){
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5); */



/* function retirement(retirementAge) {

    var a = " left until retirement"

    return function(yearOfBirth) {
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

var retirementBR = retirement(65);

retirementBR(1999);


function interviewQuestion (job) {

    return function(name) {

        if(job === "dev") {
       
            console.log(name + ", can explain something funny");
            
        } else if (job === "teacher") {
          
            console.log("Subject are teacher ?: " + name);
            
        } else {

            console.log("Hello " + name + " hi dude");
            }
    }
}

 interviewQuestion("Dev")("Miau"); */




/*  var miau = {
    name: "Miau",
    age: 8,
    job: "cat",
    presentation: function(style, timeOfDay) {
        if(style === "formal") {
            console.log("Hi people !!!" + timeOfDay);
        } else if (style === "friendly") {
            console.log("Hey, cat nice day" + timeOfDay);
        }
    }
 }

 var mila = {
    name: "Mila",
    age: 12,
    job: "Student",
 };

 miau.presentation("formal", "night");

 miau.presentation.call(mila, "friendly", "afternoon");

var miauFriend = miau.presentation.bind(miau, "friendly");

miauFriend("morning");
miauFriend("night");

var milaFormal = miau.presentation.bind(mila, "formal");

milaFormal("Afternoon"); */
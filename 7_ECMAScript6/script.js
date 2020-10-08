// Variable Declarations with let and const

// ES5

var name5 = "Angela";
var age5 = 20;
name5 = "Angela Miau";
console.log(name5);

// ES6

const name6 = "Angela Mila";
let age6 = 20;
//name6 = "Angela Li";
console.log(name6);

// ES5

function driverLicence5(passedTest) {
    
    if(passedTest) {
        var firstName = "Camila";
        var yearOfBirth = 2000;

      
    }

    console.log(firstName + " " + yearOfBirth);
}

driverLicence5(true);

// ES6

function driverLicence6(passedTest) {

    let firstName;
    const yearOfBirth = 2010;


    if(passedTest) {

        firstName = "Yana";
        
    }

    console.log(firstName + " " + yearOfBirth);
}

driverLicence6(true);


let i = 23;

for (let i = 0; i < 5; i++) {
    
    console.log(i);
}

console.log(i);


// Blocks and IIFEs


// ES5

(function() {

    var c = 3;
    
})

console.log(c);


// ES6

{
    const a = 1;
    let b = 2;
    var c = 4;
}

console.log(c);

// Strings in ES6


let firstName = "Ana";
let lastName = "Paula";
const yearOfBirth = 2003;

function calcAge(year) {

    return 2020 - year;    
}

console.log(`${firstName} ${lastName}. ${yearOfBirth} ${calcAge(yearOfBirth)}`);


const n = `${firstName} ${lastName}`;
console.log(n.startsWith('A'));
console.log(n.endsWith('a'));
console.log(n.includes('na'));
console.log(`${firstName} `.repeat(5));

//  Arrow Functions: Basics

// ES5

const years = [2000, 2005, 2010, 2015, 2020];

var ages5 = years.map(function(el) {

    return 2020 - el;    
});

console.log(ages5);


// ES6

let ages6 = years.map(el => 2020 - el);

console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2020 - el}`);

console.log(ages6);

ages6 = years.map((el, index) => {
    
    const now = new Date().getFullYear();
    const age = now - el;

    return `Age element ${index + 1}: ${age}`;
});

console.log(ages6);



// Arrow Functions: Lexical 'this' Keyword

// ES5

var box5 = {

    color: "green",
    position: 1,
    clickMe: function() {

        var self = this;

        document.querySelector(".green").addEventListener("click", function() {

            var str = self.position + " " + self.color;

            alert(str);
            
        });
        
    }
}

//box5.clickMe();

// ES6

const box6 = {

    color: "green",
    position: 1,
    clickMe: function() {

        document.querySelector(".green").addEventListener("click", () => {

            var str = this.position + " " + this.color;

            alert(str);
            
        });
        
    }
}

//box6.clickMe();

const box66 = {

    color: "green",
    position: 1,
    clickMe: () => {

        document.querySelector(".green").addEventListener("click", () => {

            var str = this.position + " " + this.color;

            alert(str);
            
        });
        
    }
}

box66.clickMe();

/////////////////////////////////////////////


function Person(name) {

    this.name = name;
    
} 

// ES5


Person.prototype.myFriends5 = function(friends) {

    var arr = friends.map(function(el) {

        return this.name + " oi " + el;
        
    }.bind(this));

    console.log(arr);
    
}

var friends = ["Ana", "Aline", "Miau"];

new Person("Angela").myFriends5(friends);



// ES6


Person.prototype.myFriends6 = function(friends) {

    var arr = friends.map(el => `${this.name} ${el}`);

    console.log(arr);
    
}

new Person("Serena").myFriends6(friends);


// Destructuring

// ES5

var miauu = ["Miau1", 12];
var name1 = miauu[0];
var age1 = miauu[1];

// ES6

const [name2, age2] = ["Miau3", 5];
console.log(name2);
console.log(age2);

const obj = {
    firstName3: "auau",
    lastName3: "mia"
}


const {firstName3, lastName3} = obj;
console.log(firstName3);
console.log(lastName3);

const {firstName3: a, lastName3: b} = obj;
console.log(a);
console.log(b);

function calcAgeR(year) {
    const ager = new Date().getFullYear() - year;
    return[ager, 65 - ager];
}

const [ager, ret] = calcAgeR(2000);
console.log(ager);
console.log(ret);
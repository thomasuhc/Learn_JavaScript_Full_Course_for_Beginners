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


// Arrays in ES6

const boxes = document.querySelectorAll(".box");

// ES5

var boxesArr5 = Array.prototype.slice.call(boxes);

boxesArr5.forEach(function(cur) {

    // cur.style.backgroundColor = "dodgerblue";
    
});

// ES6

/* const boxesArr6 = Array.from(boxes);
boxesArr6.forEach(cur => cur.style.backgroundColor = "dodgerblue"); */


/* const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = "dodgerblue"); */

///////////////////////////////

// ES5

for (var k = 0; k < boxesArr5.length; k++) {

    if(boxesArr5[k].className === "box blue") {

        //continue;
        break;

    }
     //boxesArr5[k].textContent = "Hello blue";
}

// ES6

/* for (const cur of boxesArr6) {

    if(cur.className.includes("blue")) {

        continue;

    }

    cur.textContent = "Hello blue";
} */

///////////////////////////////////////

// ES5

var agesC = [12, 13, 5, 7, 2, 18];

var full = agesC.map(function(cur){
    return cur >=17;
});

console.log(full);
console.log(full.indexOf(true));
console.log(agesC[full.indexOf(true)]);

// ES6

console.log(agesC.findIndex(cur => cur >=17));
console.log(agesC.find(cur => cur >= 17));


// The Spread Operator


function AddFourAges(a, b, c, d) {
    return a + b + c + d;
}


var sum1 = AddFourAges(18, 36, 16, 5);
console.log(sum1);


// ES5

var agesL = [12, 4, 5, 8];
var sum2 = AddFourAges.apply(null, agesL);
console.log(sum2);

// ES6

const sum3 = AddFourAges(...agesL)
console.log(sum3);

const familyMiau = ["Auau", "Meow", "Lili", "Mow"];

const familyLu = ["Sam", "Mila", "Lulu", "Mi"];

const bigFamily = [...familyMiau, "Yuli", ...familyLu];

console.log(bigFamily);



const h = document.querySelector("h1");
const boxesx = document.querySelectorAll(".box");
const all = [h, ...boxesx];

Array.from(all). forEach(cur => cur.style.color = "");


////////////////////////////////////////////////////

// Rest Parameters

// ES5

function isFullA5() {

    //console.log(arguments);

    var argArr = Array.prototype.slice.call(arguments);

    argArr.forEach(function(cur){
        //console.log((2020 - cur) >= 18);
    })

}

isFullA5(2000, 2010, 1990);

// ES6

function isFullA6(...years) {

    //years.forEach(cur => console.log((2020 - cur) >= 18));

}

isFullA6(2000, 2010, 1990, 1999);

////////////////////////////////////////////////////

// ES5

function isFullA5(limit) {

    //console.log(arguments);

    var argArr = Array.prototype.slice.call(arguments);

    //console.log(argArr);

    argArr.forEach(function(cur){
        //console.log((2020 - cur) >= limit);
    })

}

isFullA5(21, 1998, 2010, 1990);

// ES6

function isFullA6(limit, ...years) {

   years.forEach(cur => console.log((2020 - cur) >= limit));

}

isFullA6(2000, 2010, 1990, 1999);


// Default Parameters

// ES5

function AuMiauPerson( firstNamee, yearOfBirthh, lastNamee, nationality) {

    lastNamee === undefined ? lastNamee = "Miau" : lastNamee = lastNamee;

    nationality === undefined ? nationality = "Canadian" : nationality = nationality;

    this.firstNamee = firstNamee;
    this.lastNamee = lastNamee;
    this.yearOfBirthh = yearOfBirthh;
    this.nationality = nationality;

}

var miau = new AuMiauPerson("Miau", 2015);

var miafox = new AuMiauPerson("Mia", 2018, "Fox", "American");


// ES6

function AuPerson(firstnamex, yearOfBirthx, lastNamex = "liu", nacionalityx = "Brazil") {

    this.firstNamex = firstnamex;
    this.lastNamex = lastNamex;
    this.yearOfBirthx = yearOfBirthx;
    this.nacionalityx = nacionalityx;

    }


var miau = new AuPerson("Miau", 2015);

var miafox = new AuPerson("Mia", 2018, "Fox", "American");



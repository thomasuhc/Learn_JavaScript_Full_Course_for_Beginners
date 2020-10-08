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


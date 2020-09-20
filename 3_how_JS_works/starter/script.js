///////////////////////////////////////
// Lecture: Hoisting

calculateAge(1999);

function calculateAge (year) {

    console.log(2020 - year);
}


var retirement = function (year) {
    console.log(65 - (2020 -year));
}

console.log(age);
var age = 23;





///////////////////////////////////////
// Lecture: Scoping


// First scoping example


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}




// Example to show the differece between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}



///////////////////////////////////////
// Lecture: The this keyword

console.log(1999);

function calculateAge(year) {

    console.log( 2020 - year);
    console.log(this);
}

var cintia = {
    name : 'Cintia',
    yearOfBirth: 1998,
    calculateAge: function() {
        console(this);
        console.log(2020 - this.yearOfBirth);

        function innerFunction () {
            console.log(this);
        }
        innerFunction();
    }
}

cintia.calculateAge();


var bruna = {
    name : 'Bruna',
    yearOfBirth: 1998,
    }

bruna.calculateAge = cintia.calculateAge;
bruna.calculateAge();
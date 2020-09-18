var firstName = 'Anna';
console.log(firstName);

var lastName = 'Paula';
var age = 25;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

var _3years = 3;
var SerenaLi = 'Serena Li';
var a = 23;

/*************************************/

var firstName = 'Angela';
var age = 20;

console.log(firstName + ' ' + age);

var job , isSingle;
job = 'Fight';
isSingle = false;
console.log(firstName + ' is a ' + age + ' year old ' + job + ' single ' + isSingle);

age = 'one and two';
job = 'Driver';

alert(firstName + ' is a ' + age + ' year old ' + job + ' single ' + isSingle);

var lastName = prompt('what is last Name?:');
console.log(firstName + ' ' + lastName);

/*************************************/

var yearNew, angela, Yu;
yearNew = 2020;
angela = yearNew - 10;
Yu = yearNew - 20;
console.log(angela)
console.log(yearNew * 2);
console.log(yearNew + 2);
console.log(yearNew / 10);

/*************************************/

var angela = age > Yu;
console.log(angela);

/*************************************/

console.log(typeof angela);
console.log(typeof age);
console.log(typeof 'Angela Yu');

var x;
console.log(typeof x);

/*************************************/

var now = 2020;
var yearAngela = 1990;
var fullAge = 19;

var isFullAge = now - yearAngela >= fullAge;
console.log(isFullAge);

var ageAngela = now - yearAngela;
var angela = 35;
var average = (ageAngela + angela) / 2;
console.log(average);

var x, y;
x = y = (3 + 5) * 4 - 6;
console.log(x,y);

x *= 2;
console.log(x);
x += 10;
console.log(x);
x = x + 1;
x += 1;
x++;
console.log(x);

/*************************************/

var firsName = 'Manolo';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firsName + 'is married');
} else {
    console.log(firsName + 'will hopefully marry soon :');
}

var isMarried = true;
if (isMarried) {
    console.log(firsName + 'is married');
} else {
    console.log(firsName + 'will hopefully marry soon :');
}


/*************************************/

var firstName = 'Angela';
var age = 20;

if (age < 18) {
    console.log(firsName + 'is a girl');

} else if (age >= 15 && age < 20) {
    console.log(firsName + 'is a teenager');

} else if (age >= 20 && age < 30) {
    console.log(firsName + 'is a young girl');
}
else {
    console.log(firsName + 'is a woman');
}

age = 20;
switch (true) {
    case 'age < 18':
        console.log(firsName + 'is a girl');
        break;
    case 'age >= 15 && age < 20':
        console.log(firsName + 'is a teenager');
        break;
    case 'age >= 20 && age < 30':
        console.log(firsName + 'is a young girl');
        break;

        default:
        console.log(firsName + 'is a woman');

}

/*************************************/

var firstName = 'Angela';
var age = 18;

age >= 20 ? console.log(firsName + ' drink beer.') : console.log( firsName + 'drink Juice');

var drink = age >= 20 ? 'beer' : 'Juice';
console.log(drink);

if (age >= 20) {
    var drink = 'beer';
} else {
    var drink ='Juice';
}

/*************************************/

var job = 'Dev';

switch (job) {
    case 'Dev':
        console.log(firsName + ' dev is design');
        break;
 
        case 'Driver':
        console.log(firsName + ' driver in canada');
        break;
    case 'Design':
        console.log(firsName + ' design web');
        break;

        default:
        console.log(firsName + ' hahahahahahaha');

}

/*************************************/

var height;

height = 1.70;

if (height || height === 0) {
    console.log('variable is defined');

} else {
    console.log('variable is not been defined');
}

if (height == 1.70) {
    console.log('The == operator does type coercion!');
}

if (height === '1.70') {
    console.log('The == operator does type coercion!');
}


/*************************************/

function calculateAge (birtheYear) {

    return 2020 - birtheYear;

}

var ageAngela = calculateAge(1998);
console.log(ageAngela);

calculateAge(1990);

var ageAna = calculateAge(1991);
var ageCamila = calculateAge(1998);
var ageMila = calculateAge(2002);

console.log(ageAna, ageCamila, ageMila);


function yearUntilRetirement (year, firtName) {
    
    var age = calculateAge(year);
    var retirement = 50 - arguments;

    if ( retirement > 0 ) {

        console.log(firsName + ' retires in ' + retirement + ' years');

    } else {

        console.log(firsName + ' retires in ' + retirement + ' years');
    }
}

yearUntilRetirement(2001, 'Angela');
yearUntilRetirement(1995, 'Ana');
yearUntilRetirement(1991, 'Mila');


/*************************************/


function whatDoYouDo (job, firtName) {

}


var whatDoYouDo = function (job, firtName) {

    switch (job) {

        case 'Design':

            return firsName + 'Design things';

            case 'Dev':

                return firsName + 'Dev program';

                case 'Code':

                        return firsName + 'Code somenthing';

            default:
                return firsName + 'all things'
    }
}

console.log(whatDoYouDo('Design' , 'Angela'));
console.log(whatDoYouDo('Dev' , 'Ana'));
console.log(whatDoYouDo('Code' , 'Mila'));


/*************************************/

var names = ['Angela' , 'Ana' , 'Mila'];
var years = new Array(1998, 2000, 2001);

console.log(names[0])

console.log(names);
console.log(names.length);

names[1] = 'Aline';
names[4] = 'Marry';

names[names.length] = 'Julia';

console.log(names);


var Aline = ['Aline' , 'teacher' , '2000' , false];

Aline.push('Red');
Aline.unshift('Mrs');
console.log(Aline);

Aline.pop();
Aline.pop();
Aline.shift();
console.log(Aline)

console.log(Aline.indexOf(2000));

var isDev = Aline.indexOf('Dev') ===1 ? 'Aline is not a Dev' : 'Angela is dev';

console.log(isDev);

/*************************************/

var yo = {
    firtName:'Angel',
    lastName: "li",
    birthYear: 2000,
    family: ['Maia', 'Ana', 'Angela', 'Emily'],
    job: 'Dev',
    isMarried : false
};
console.log(yo);
console.log(yo.firsName);
console.log(yo['lastName']);

var x = 'birthYear'
console.log(yo[x]);

yo.job = 'Cleaner';
yo['IsMarried'] = true;
console.log(yo);

var jane = new object();
jane.name = 'Jane';
jane.birthYear = 2001;
jane['lastName'] = 'Li';
console.log(jane);

/*************************************/

var li = {
    firtName:'Angel',
    lastName: "li",
    birthYear: 2000,
    family: ['Maia', 'Ana', 'Angela', 'Emily'],
    job: 'Dev',
    isMarried : false,
    calcAge: function() {
        this.age = 2020 - this.birthYear;
    }
};

console.log(li.calcAge(1990));

li.age = li.calcAge();
console.log(li);

/*************************************/

for (var i = 0; i < 10; i++) {
    console.log(i);
} 

for (var i = 1; i < 20; i += 2) {
    console.log(i);
} 

var vivian = ['Lucia', 'Ana', 'Clara', 'Aline', false, 'Pink'];
console.log(vivian);

for (var i = 0; i < vivian.length; i++) {

    console.logO(vivian[i]);

}

while ( i < vivian.length ) {

    if ( typeof vivian[i] !== 'String') {
        continue;
    } 
    console.logO(vivian[i]);
    i++;
}

while ( i < vivian.length ) {

    if ( typeof vivian[i] !== 'String') {
        break;
    } 
    console.logO(vivian[i]);
    i++;
}


for (var i = vivian.length - 1; i >= 0; i--) {

    console.logO(vivian[i]);

}
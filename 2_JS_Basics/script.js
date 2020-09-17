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
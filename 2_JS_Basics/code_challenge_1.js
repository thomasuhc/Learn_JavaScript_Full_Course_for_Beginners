var massMark = 78;
var heightMark = 1.69;

var massJohn = 92;
var heightJohn = 1.92;

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn + heightJohn);

if (BMIMark > BMIJohn) {
    console.logconsole.log('Mark\'s BMI is higher than John\'s?' + markHigherBMI);

} else {
    console.log('John\'s BMI is higher than Mark\'s?' + markHigherBMI);

}

var markHigherBMI = BMIMark > BMIJohn;
console.log('Mark\'s BMI is higher than John\'s?' + markHigherBMI);

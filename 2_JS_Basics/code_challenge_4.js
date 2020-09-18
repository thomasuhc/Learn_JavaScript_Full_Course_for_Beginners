var john = {
    fullName: 'John New',
    mass: 92,
    height: 1.95,
    CalcBMI: function() {
        this.bmi = this.mass / (this.height * this.heigt);
        return this.bmi;
    }
}

var mark = {
    fullName: 'Mark old',
    mass: 78,
    height: 1.70,
    CalcBMI: function() {
        this.bmi = this.mass / (this.height * this.heigt);
        return this.bmi;
    }
}

if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + ' has a higher BMI of' + john.bmi);
} else if (mark.calcBMI > john.calcBMI) {
    console.log(mark.fullName + ' has a higher BMI of' + mark.bmi);
} else {
    console.log('They have the same BMI');
}
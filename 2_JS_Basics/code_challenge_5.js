var vivian = {
    fullName: 'Vivian Smile',
    bills: [120, 50, 500, 200, 40],
    calcTips: function () {
        this.tips = [];
        this.finalValue = [];

        for(var i = 0; i < this.bills.length; i++) {

            var percentage;

            if(this.bills[i] < 100){

                percentage = .2;

            } else if (this.bills[i] >= 100 && this.bills[i] < 300) {
                percentage = .1;
            } else {
                percentage = .25;
            }
                this.tips[i] = bill * percentage;
                this.finalValue[i] = bill + bill * percentage;
        }
    }
}

function calcAverage(tips) {

    var sum = 0;

    for (var i = 0; i < tips.length; i++) {
        sum = sum + tips[i];
    }
     return sum / tips.length;
}

vivian.calcTips();
console.log(vivian);

vivian.average = calcAverage(vivian.tips);
console.log(vivian);


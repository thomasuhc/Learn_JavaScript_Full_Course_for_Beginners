var scoreJohn = (89 + 120 + 103) / 3;

var scoreMike = (116 + 94 + 123) / 3;

var scoreMarry = (97 + 134 + 105) /3;

console.log(scoreJohn, scoreMike, scoreMarry);

if (scoreJohn > scoreMike && scoreJohn > scoreMarry){

    console.log(' John\'s team wins with \'s?' + scoreJohn);

} else if ( scoreMike > scoreJohn && scoreMike > scoreMarry) {

    console.log(' Mike\'s team wins with \'s?' + scoreMike);

} else if (scoreMarry > scoreJohn && scoreMarry > scoreMike) {

    console.log(' Marry\'s team wins with \'s?' + scoreMarry);

} else {

    console.log('There is a Draw');
}


if (scoreJohn > scoreMike) {

    console.log(' John\'s team wins with \'s?' + scoreJohn);

} else if (scoreMike > scoreJohn) {

    console.log('Mike\'s team wins with \'?' + scoreMike);
} else {
    console.log('There is a Draw');
}
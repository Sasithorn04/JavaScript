//การใช้คำสั่ง map filter reduce find
let scores = [95, 74, 43, 88, 37, 56];

//map
let passFailScores = scores.map((score) => {
    if (score >= 50) {
        return 'passed';
    }
    else {
        return 'failed';
    }
});

//filter
let passScores = scores.filter((score) => {
    return score >= 50;
});

//reduce
let  sumScores = scores.reduce((sum, score) => {
    return sum + score;
});

//find
let failedScore = scores.find((score) => {
    return score < 50;
});

console.log(scores);
console.log(passFailScores);
console.log(passScores);
console.log(sumScores);
console.log(failedScore);
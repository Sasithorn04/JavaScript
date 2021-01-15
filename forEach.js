//มีคนสอบได้คะแนนเกิน 50 กี่คน
let scores = [95, 74, 43, 88, 37, 56];
let passedCount = 0;
scores.forEach((score) => {
    if (score >= 50) {
        passedCount++;
    }
})
console.log(passedCount);
//การใช้คำสั่ง every some
let scores = [95, 74, 43, 88, 37, 56];

//every
let everyonePassed = scores.every((score) => {
    return score > 50;
});

//some
let someonePassed = scores.some((score) => {
    return score > 50;
});
console.log(everyonePassed);
console.log(someonePassed);
console.log("Задание 3")
let с = 0;
let m = 100;
let min = Math.min(с, m);
let max = Math.max(с, m);
let minus = max - min;
let number = Math.floor(Math.random() * minus / 2) * 2 + 1;
console.log(number);
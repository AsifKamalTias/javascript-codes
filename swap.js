//swap
let a = 5;
let b = 7;
let temp;
console.log(`Before Swap a : ${a}, b : ${b}`);

temp = a;
a = b;
b = temp;
console.log(`After Swap a : ${a}, b : ${b}`);

//Swap without temp

let m = 12;
let n = 15;
console.log(`Before Swap m : ${m}, n : ${n}`);

m = m+n;
n = m-n;
m = m-n;
console.log(`After Swap m : ${m}, n : ${n}`)

//Using JS

let x = 20;
let y = 30;
console.log(`Before Swap x : ${x}, y : ${y}`);

[x,y] = [y,x]
console.log(`After Swap x : ${x}, y : ${y}`);
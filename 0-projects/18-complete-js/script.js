// Rest Pattern and Parameters

//SPREAD -> because on the RIGHT side of the equal sign =
const arr = [1, 2, [55, 98]];
console.log(...arr);

const arr1 = [1, 2, ...[55, 98]];
console.log(...arr1);

//REST ->
const [a, b, ...others] = [1, 2, 4, 77, 8];
console.log(a, b, others);

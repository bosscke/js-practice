var numbers = [177, 50, 25];

document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

function myFunc(a, b) {
    return a + b;
}
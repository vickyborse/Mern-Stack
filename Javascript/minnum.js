let num = [10, 20, 30, 40, 5];

let min = num.reduce((min, el) => {
    if (min < el) {
        return min;
    } else {
        return el;
    }
});

console.log("Minimum number is:", min);

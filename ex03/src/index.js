if (startN <= endN) {
    return [startN, (n - 1), endN];


    const countArray = rangeOfNumbers(n - 1);
    countArray.unshift(n);
    return countArray;
} else {

    return ("The starting number will always be less then or equal to the ending number");
};



console.log(rangeOfNumbers(1, 7));
console.log(rangeOfNumbers(3, 10));
console.log(rangeOfNumbers(5, 5));
console.log(rangeOfNumbers(7, 5));
module.exports = rangeOfNumbers;
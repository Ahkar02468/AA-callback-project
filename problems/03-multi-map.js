/*******************************************************************************
Write a function `multiMap` that accepts a value, a number n, and a callback.
The function should return the new value that results from running the original value
through the callback n times.

Examples:

let result1 = multiMap(7, 2, function(n) {
  return n * 10;
});
console.log(result1); // 700

let result2 = multiMap(7, 3, function(n) {
    return n * 10;
});
console.log(result2); // 7000

let result3 = multiMap("hi", 5, function(s) {
  return s + "!";
});
console.log(result3); // hi!!!!!
*******************************************************************************/

let multiMap = function(value,nTime,callback) {
  let newValue = value;
  for(let i = 0; i < nTime; i++){
    // let newValue = value;
    newValue = callback(newValue);
    // newValue = value + i;
    // newValue = value;

  }
  // console.log(newValue)
  return newValue;
};
let myCallback = function(x){
  return x + 1;
}

console.log(multiMap(3, 4, myCallback));




/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = multiMap;

/*******************************************************************************
Write a function `myFilter` that accepts an array and a callback as arguments.
The function should call the callback on each element of the array, passing in
the element. The function should return a new array containing
the elements that result in true when passed to the callback.

Do not use the built in Array#filter.

Examples:

let result1 = myFilter([5, 7, 4, 3, 8], function (n) {
    return n % 2 === 0;
});
console.log(result1);       // [ 4, 8 ]

let result2 = myFilter(['choose', 'big', 'words', 'only'], function (s) {
    return s.length > 3;
});
console.log(result2);      // ['choose', 'words', 'only']
*******************************************************************************/

let myFilter = function(newArr, callBack) {
    let resultArr = [];
    for(let i = 0; i < newArr.length; i++){
        let result = 0;
        result = callBack(newArr[i]);
        if(result){
            resultArr.push(newArr[i]);
        }

    }
    return resultArr;
};

let myCallBack = function(x){
    return x % 2 === 0;
}

let myArr = [2,4,6,9,10];
console.log(myFilter(myArr,myCallBack));







/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = myFilter;

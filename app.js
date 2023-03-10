// Rest / Spread Operator Exercises
// In this exercise, you’ll refactor some ES5 code into ES2015.

// Given this function:
function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}
// Refactor it to use the rest operator & an arrow function:
/* Write an ES2015 Version */

// filters out odds
// function name   (input arr)  (copy and filter)   (function checks and returns odd)
const filterOutOdds = nums => [...nums].filter(evens => evens % 2 === 0);


// findMin
// Write a function called findMin that accepts a variable number of arguments and returns the smallest argument. Make sure to do this using the rest and spread operator.

const findMin = (...nums) => Math.min(...nums)

findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1

// mergeObjects
// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}

// (function name)    (input obj's)     (combine obj's with spread)
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

// doubleAndReturnArgs
// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
doubleAndReturnArgs([2],10,4) // [2, 20, 8]

// function                 (parameters)       ((create new array with original))
                                                    // array and argum doubled 
const doubleAndReturnArgs = (arr, ...nums) => [...arr, ...nums.map(num => num * 2)]


// Slice and Dice!
// For this section, write the following functions using rest, spread and refactor these functions to be arrow functions! Make sure that you are always returning a new array or object and not modifying the existing inputs.

/** remove a random element in the items array
and return a new array without that item. */

// 
const removeRandom = items => {
    // generate a random index
    let index = Math.floor(Math.random() * items.length);
    // return array with random element removed from the inputed array
    return [...items.slice(0,index), ...items.slice(index + 1)];
}


/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
    return [...array1, ...array2];
}

/** Return a new object with all the keys and values
from obj and a new key/value pair */
//                      (arguments) 
const addKeyValue = (obj, key, value) => {
//  returns inputted obj makes new obj with key and value 
    return { ...obj, [key]: value };
}

/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    let newObj = {...obj}
    delete newObj[key]
    return newObj;
}


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    return {...obj, [key]: val}
}

update({name: 'greg'}, 'name', 'steph')
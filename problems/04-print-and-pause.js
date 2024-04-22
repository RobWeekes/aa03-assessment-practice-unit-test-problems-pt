/***********************************************************************
Given a list of positive integers, print each integer and pause for that
many milliseconds before printing the next one. Make sure you use a recursive
approach to solve this problem.

Example:

printAndPause([200, 800, 200, 800, 200, 800])
200
// pause 200ms
800
// pause 800ms
200
// pause 200ms
800
// pause 800ms
200
// pause 200ms
800
// pause 800ms

***********************************************************************/

function printAndPause(nums) {
    // for(let i = 0; i < nums.length; i++) {}    // use recursive approach, not iterative
    // console.log(nums);

    // base case --
    if(nums.length === 0) return;

    // iterative case - print first number, then wait that many milis and recurse
    // console.log(nums);
    let first = nums.shift();       // let last = nums[nums.length - 1];
    console.log(first);
    // console.log(nums);
    setTimeout(() => {
        return printAndPause(nums);
    }, first)
}

// printAndPause([200, 800, 200, 800, 200, 800]);
// 200
// pause 200ms
// 800
// pause 800ms
// 200
// pause 200ms
// 800
// pause 800ms
// 200
// pause 200ms
// 800
// pause 800ms



// function printAndPause(nums) {
//     // console.log(nums);

//     // base case with empty array
//     if(nums.length === 0) {
//         return;
//     }

//     // console.log(nums.length);   // comment out

//     // recursive case shorten array by 1 element

//     let number = nums.shift();
//     console.log(number);

//     setTimeout(() => {
//     // console.log(number);
//     return printAndPause(nums)
//     }, number);

// }

// printAndPause([200, 800, 200, 800, 200, 800]);
// 200
// // pause 200ms
// 800
// // pause 800ms
// 200
// // pause 200ms
// 800
// // pause 800ms
// 200
// // pause 200ms
// 800
// // pause 800ms


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = printAndPause;
} catch {
  module.exports = null;
}

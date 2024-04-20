/***********************************************************************
Write a recursive function called `mostFrequentVowel(words, counter)` which
takes in an array of words as lowercase strings and returns the vowel that shows
up the most in all the strings in the array.

If there are no vowels at all, return an empty string "".

Your function should also accept a `counter` parameter that will be an empty
object by default.*/

const VOWELS = ['a', 'e', 'i', 'o', 'u'];
// function mostFrequentVowel(words, counter = {}) {
const mostFrequentVowel = function(words, counter = {}) {

    // base case
    if(words.length === 0) {

    let highestVowel = 0;
    for(let vowel in counter) {

    }

        return highestVowel;   // return the most frequent vowel
    }

    // recursive case
    let lastWord = words.pop();   // invoke .pop
    // add values from word to the counter, mutating the counter
    vowelCounter(lastWord, counter);

    // look at the counters, choose the highest,

    return mostFrequentVowel(words, counter);
}








// use helper function -- vowel counter

///// REPLACE MAP WITH OBJECT COUNTERS  \/
// let vowelCounter = (word, counter) => {
//     const letterCounts = new Map();
//     let lettersArr = word.split('');
//     // console.log(word);   // 'word' string is unchanged
//     console.log(lettersArr);

//     lettersArr.forEach((letter) => {
//         console.log(letter);

//         if(!letterCounts.has(letter)) {    // scan words for new letters, initialize with "key" = 0
//             letterCounts.set(letter, 0);
//         }
//         // then pass through every letter again, adding + 1 count for each letter
//         letterCounts.set(letter, letterCounts.get(letter) + 1);
//     })

//     // this map object changes after deleting the consonants in shallow copy
//     console.log(letterCounts);

//     // for vowels array, count vowels only and delete the consonant map keys
//     vowelCounts = letterCounts;     // shallow copy created? changing one changes the other
//     // console.log(letterCounts);
//     // console.log(vowelCounts);

//     vowelCounts.forEach(returnVowels);
//     function returnVowels(value, key, map) {
//         // console.log(`key: ${key}, value: ${value}`);
//         // console.log(vowelCounts);
//         if(!VOWELS.includes(key)) {
//             map.delete(key);
//         }
//         // console.log(vowelCounts);
//     }
//     console.log(letterCounts);    // copying the Map & deleting keys mutates both maps!
//     console.log(vowelCounts);     // to preserve original 'letterCounts' map w/ consonants,
//     return vowelCounts;           // create a new map manually passing in the vowel keys only

//   }
  // Map { 't': 2, 'e': 1, 's': 1, 'a': 3, 'i': 2, 'o': 1 }
  console.log(vowelCounter('test aaaiio'));
  console.log(vowelCounter('aabccccdddefffg'));
  // Map { 'a': 2, 'b': 1, 'c': 4, 'd': 3, 'e': 1, 'f': 3, 'g': 1 }

  // letterCounts.forEach(logMapElements);         //  (iterating Map for practice)
  // function logMapElements(value, key, map) {
  //     console.log(`key: ${key}, value: ${value}`);
  //     console.log(map.get(key));  // prints values not keys, why?
  // }


// returns the vowel that shows up the most in all the strings in the array.

// Each recursive step should count the vowels in the last string in the array
// and add them to the `counter`. Return the vowel with the greatest count in
// the `counter` object.

// Only the following will be considered as vowels: 'a', 'e', 'i', 'o', 'u'.

words = ['apple', 'pear', 'melon', 'coconut', 'lime']
counter = {}
mostFrequentVowel(words, counter)

// Step 0: Call `mostFrequentVowel` on the `words` array
// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = {}
// mostFrequentVowel(words, counter)

// Step 1: Count the vowels in 'lime'
// words = ['apple', 'pear', 'melon', 'coconut', 'lime']
// counter = { i: 1, e: 1 }
// mostFrequentVowel(words, counter)

// Step 2: Count the vowels in 'coconut'
// words = ['apple', 'pear', 'melon', 'coconut']
// counter = { i: 1, e: 1, o: 2, u: 1 }
// mostFrequentVowel(words, counter)

// Step 3: Count the vowels in 'melon'
// words = ['apple', 'pear', 'melon']
// counter = { i: 1, e: 2, o: 3, u: 1 }
// mostFrequentVowel(words, counter)

// Step 4: Count the vowels in 'pear'
// words = ['apple', 'pear']
// counter = { i: 1, e: 3, o: 3, u: 1, a: 1 }
// mostFrequentVowel(words, counter)

// Step 5: Count the vowels in 'apple'
// words = ['apple']
// counter = { i: 1, e: 4, o: 3, u: 1, a: 2 }
// mostFrequentVowel(words, counter)

// Step 6: No words remaining, return 'e'
// words = []
// counter = { i: 1, e: 4, o: 3, u: 1, a: 3 }
// mostFrequentVowel(words, counter)

// Example:
// mostFrequentVowel(['dog', 'cow', 'pig', 'chicken', 'horse']); // 'o'
// mostFrequentVowel(['dog', 'cow', 'pig', 'chicken']); // 'i' or 'o'

/***********************************************************************/

// const VOWELS = ['a', 'e', 'i', 'o', 'u'];
// const mostFrequentVowel = function (words, counter = {}) {
//   // Your code here
// }

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = mostFrequentVowel;
} catch {
  module.exports = null;
}

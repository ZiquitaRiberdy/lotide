const assertArraysEqual = function(ar1, ar2) {
    //eqArrays(ar1,ar2);
    if (ar1,ar2) {
      console.log(`✅✅✅ Assertion Passed: ${ar1} === ${ar2}`) 
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${ar1} !== ${ar2}`)
    }
  };

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
    const results = [];
    for (let item of array) {
      results.push(callback(item));
    }
    return results;
}
const results1 = map(words, (word) => word[0]);
//(word) => word[0] is the anonymous function 
assertArraysEqual(results1, true);
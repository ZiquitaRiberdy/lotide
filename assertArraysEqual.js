
const eqArrays = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  
  };

const assertArraysEqual = function(arr1, arr2, compare){
    let answer = true;

    if (arr1.length !== arr2.length){
        answer = false;
    } else {
        for (let i = 0; i < arr1.length; i++){
            if (arr1[i] !== arr2[i]) {
                answer = false;
                break;
            }
        }
    }
    //return answer;
    eqArrays(answer, compare);
  }



//TEST
assertArraysEqual([1, 2, 3], [1, "car", 3], false);
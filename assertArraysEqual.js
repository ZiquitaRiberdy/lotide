
const assertArraysEqual = function(actual) {
    if (actual === true) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === true`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} === false`);
    }
  
  };

const eqArrays = function(arr1, arr2, compare){
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
    assertArraysEqual(answer);
  }



//TEST
eqArrays([1, 2, 3], [1, "car", 3]);
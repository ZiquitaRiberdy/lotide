
const assertArraysEqual = function(ar1, ar2) {
    //eqArrays(ar1,ar2);
    if (eqArrays(ar1,ar2)=== true) {
      console.log("✅✅✅ Assertion Passed: array1 === array2") 
    } else {
        console.log("🛑🛑🛑 Assertion Failed: array1 !== array2")
    }
  };

const eqArrays = function(arr1, arr2){
    let answer = true;

    if (arr1.length !== arr2.length){
        answer = false;
    } else {
        //return answer;
        for (let i = 0; i < arr1.length; i++){
            if (arr1[i] !== arr2[i]) {
                answer = false;
                break;
            }
        }
    }
    return answer;
    //assertArraysEqual(answer);
  }



//TEST
assertArraysEqual([1, 2, 3], [1, "car", 3]);
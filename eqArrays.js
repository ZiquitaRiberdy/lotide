const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  
  };
  
  // TEST CODE
  //assertEqual("Lighthouse Labs", "Bootcamp");
  //assertEqual(1, 1);
  //assertEqual("Lighthouse Labs", "Lighthouse Labs");
  //assertEqual(1, 10);
  

  let answer = true;

  const eqArrays = function(arr1, arr2){

    if (arr1.length !== arr2.length){
        answer = false;
    } else {
        for (i = 0; i <= arr1.length; i++){
            if (arr1[i] !== arr2[i]) {
                answer = false;
            }
        }
    }
    return answer;
  }

//TEST
//eqArrays([1, 2, 3], [1, 2, 3])
//eqArrays([1, 2, 3], [3, 2, 1])
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 4, 3], [1, 2, 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, "car", 3]), false);
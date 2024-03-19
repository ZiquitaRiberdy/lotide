
const assertArraysEqual = function(ar1, ar2) {
    eqArrays(ar1,ar2);
  
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
eqArrays([1, 2, 3], [1, "car", 3]);
const flatten = function(array){
    let newArray = [];
    for(item of array){
        if (Array.isArray(item)){
            for (element of item){
                newArray.push(element)
            }
        } else {
            newArray.push(item);
        }
    }
    //console.log(newArray)
    return newArray;
}

const assertArraysEqual = function(ar1, ar2) {
    //eqArrays(ar1,ar2);
    if (eqArrays(ar1,ar2)) {
      console.log(`✅✅✅ Assertion Passed: ${ar1} === ${ar2}`) 
    } else {
        console.log(`🛑🛑🛑 Assertion Failed: ${ar1} !== ${ar2}`)
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
  flatten([1, 2, [3, 4], 5, [6]])


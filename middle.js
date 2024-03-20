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

const middle = function(array){
    if (array.length <= 2){
        //console.log([])
        return [];
    } else if(array.length % 2 == 0) {
        //console.log(array.length / 2)
        let a = Math.floor(array.length / 2)
        //console.log(a)
        let b = a - 1;
        //console.log(array[a], array[b])
        return [array[b], array[a]];
    } else {
        let c = Math.floor(array.length / 2)
        //console.log(array[c])
        return [array[c]];
    }
}

middle([2,3,4,5,6]);

middle([2,3,4,9,12,3,6,8,9,0]);

middle([2,3]);

assertArraysEqual(middle([4,5,6,7,8]), true)
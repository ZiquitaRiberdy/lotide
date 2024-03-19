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

const without = function(source, itemsToRemove){
    let source2 = source.slice();
    //let p = 0;
    for (let i = 0; i < source2.length; i++){
        for (let p = 0; p < itemsToRemove.length; p++){
            if (itemsToRemove[p] === source[i]){
                source2.splice(i, 1);
            }
        }
    }
    console.log(source2);
    //return source2;
}



//TEST
//assertArraysEqual([1, 2, 3], [1, "car", 3]);
without([1, 2, 3], [2]) 
without(["1", "2", "3"], [1, 2, "3"])
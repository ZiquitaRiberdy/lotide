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
    let source2 = source;
    //let p = 0;
    for (let i = 0; i < source.length; i++){
        for (let p = 0; p < itemsToRemove.length; p++){
            if (itemsToRemove[p] === source[i]){
                delete source2[i];
            }
        }
    }
    
    // for (let g = 0; g < source2.length; g++){
    //     if (source2[g] === undefined){
    //         console.log(source2.slice(g, 1))
    //     }
    // }
    //console.log(source2);
    //console.log(typeof source[2])
    //return source2;
}



//TEST
//assertArraysEqual([1, 2, 3], [1, "car", 3]);
//without([1, 2, 3], [2]) 
without(["1", "2", "3"], [1, 2, "3"])
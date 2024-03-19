const assertArrayEqual = function(arr1, arr2){
    let answer = true;

    if (arr1.length !== arr2.length){
        //return false;
        console.log(`False ${arr1} and ${arr2} are not equal`);

    } else {
        for (let i = 0; i < arr1.length; i++){
            if (arr1[i] !== arr2[i]) {
              console.log(`False ${arr1} and ${arr2} are not equal`);
              break;
        }console.log(`True ${arr1} and ${arr2} are equal`);
    } //console.log(`True ${arr1} and ${arr2} are equal`);
  }
}

//TEST
eqArrays([1, 2, 3], [1, 2, 3])
eqArrays([1, 2, 3], [3, 2, 1])
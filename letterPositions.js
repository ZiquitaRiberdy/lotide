const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  
  };

  const letterPositions = function(sentence){
  const obj = {};
    
    for (let i = 0; i < sentence.length; i++) {
        if (obj[sentence[i]]) {
            obj[sentence[i]].push(i)
        } else {
            obj[sentence[i]] = [i];
        }
    }

    //console.log(obj)
    return obj;

  }

//   TESTS
//const result = "here is where i live";
assertEqual(letterPositions(result).h, [2])
//letterPositions("here is where i live")
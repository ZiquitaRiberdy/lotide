const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  
  };

  const countLetters = function(sentence){
    const obj = {};
    for (letter of sentence){
        if (obj[letter]){
            obj[letter] += 1;
        } else {
            obj[letter] = 1;
        }
    }
    return obj;

  }

//   TESTS
const result = countLetters("here is where i live")
assertEqual(result["h"], 2)
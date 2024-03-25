const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  
  };

  const eqObjects = function (object1, object2) {
    let count = 0;
    if (Object.keys(object1).length !== Object.keys(object2).length) {
        return false;
    } else {
        for (item in object1){
            for(element in object2){
                if (object2[element] === object1[item]) {
                    console.log("it's equal")
                    count ++
                }
            }
        }

        if (count === Object.keys(object1).length) {
            return true;
        } else {
            return false;
        }
    }

  }

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject, anotherShirtObject), true); 

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); 
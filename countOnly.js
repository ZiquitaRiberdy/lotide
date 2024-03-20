const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  
  };

  const countOnly = function(allItems, itemsToCount){
    const results = {};

    for (const item of allItems){
        //printing each item
        console.log(item)
        //if the item(key) is found in the list of items to count then...
        if (itemsToCount[item]) {
            //and if the item(key) is part of all the items
            if(results[item]) {
                //add one count to that item/key
                results[item] += 1;
            } else {
                //or make that item/key have a coutn of one if it's curently zero
                results[item] = 1;
            }   
        }
    }

    return results;
  }


  //TEST
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  
  assertEqual(result1["Jason"], 1);
  assertEqual(result1["Karima"], undefined);
  assertEqual(result1["Fang"], 2);
  assertEqual(result1["Agouhanna"], undefined);
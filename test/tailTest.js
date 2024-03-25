const assertEqual = require('../assertEqual');
const tail = require('../tail');

assertEqual(words.length, 3);
assertEqual(tail(words),2);
assertEqual(tail(words),10);
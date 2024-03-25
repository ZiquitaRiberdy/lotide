const assertEqual = require("./assertEqual");

const tail = (tailArray) => {
  return tailArray.slice(1).length;
}

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it

module.exports = tail;
function addNumbers(numberA, numberB) {
  return (numberA + numberB);
}

var twoPlusTwo = addNumbers(2, 2)

console.log(twoPlusTwo) // 4

function yell(string) {
  console.log(string.toUpperCase());
}
yell("hello");

function yell10(string) {
  console.log(string.toUpperCase().repeat(10));
}
yell10("racecar");

function longest(a, b) {
  var longer;
  if (a.length > b.length) {
    longer = a;
  } else {
    longer = b;
  }
  return longer;
}

var dogs = ["Gunther", "Millie", "KJ", "Dolly"];
var cats = ["Garfield"];

console.log(longest("sam", "abby"));
console.log(longest("abby", "samuel"));
console.log(longest(dogs, cats));


function isVowel(x) {
  var x = x.toLowerCase();
  if (x === "a" || x === "e" || x === "i" || x === "o" || x === "u" ) {
    return true;
  }
  else {
    return false;
  }
}

console.log(isVowel("x"));
console.log(isVowel("A"));
console.log(isVowel("o"));

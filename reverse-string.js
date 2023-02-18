// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  // return str
  //   .split('')
  //   .reverse()
  //   .join('');

  //////////////////////////

  // let revString = '';
  // for(let i = str.length - 1; i >= 0; i--) {
  //   revString = revString + str[i];
  // }
  // return revString;

  /////////////////////////

  // let revString = '';
  // for(let i = 0; i <= str.length - 1; i++) {
  //   revString = str[i] + revString;
  // }
  // return revString;

  ////////////////////////

  // let revString = '';
  // for(let char of str) {
  //   revString = char + revString;
  // }
  // return revString;

  ///////////////////////

  // let revString = '';
  // str.split('').forEach(char => revString = char + revString);
  // return revString;

  //////////////////////
  
  
  //let arr = [...str];
  //let newArr = arr.map((_, i, arr) => {
  //     return arr[arr.length - 1 - i];
  //   });
  //return newArr.join("");



  return str.split('').reduce((revString, char) => char + revString, '');
}


// Reversing a string without using built-in function
// Contributed by - Ankita Patil

function reverseString(str) {
  let reversedString = "";
  
  for(character of str) {
    reversedString = character + reversedString;
  }
  
  return reversedString;
}

// Another solution to reverse a string
// Contributed by Ankita Patil

function reverseString(str) {
  return str.split("").reduce((reversedString, character) => character + reversedString, "");
}
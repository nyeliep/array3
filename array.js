// Write a function that accepts an array of strings and console.logs each element using a for loop.
 let names = ["Tek", "Job","Emanuel","Giel"]
 string(names)
 function string(names){
 for(let i = 0; i < names.length; i++)
  console.log(names[i]);
 }

// Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
let nums = [35,54,80,42,22]
let multiply = 2
nums.forEach(myMultiplication);

function myMultiplication(num){
  console.log(multiply*num)
}
// Write a function that takes in an array of numbers and
//  consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
let arr = [12, 36, 32, 11, 9, 5, 3, 24];
manipulateArray(arr)

function manipulateArray(arr) {
  for (let i = 0; i < 4; i++) {
    arr[i] *= 8;
  }

  let len = arr.length;
  for (let i = len - 2; i < len; i++) {
    arr[i] += 5;
  }
  console.log(arr);
}



// Write a function that takes in the following array and use a while loop to iterate and
//  break when the item is equal to the fourth index
// let arrNum = [1,2,3,4,5,6,7,8,9];
let arrNum = [1,2,3,4,5,6,7,8,9];
let i = 0;
fourthIndex(arrNum)

function fourthIndex(arrNum) {

  while (i < arrNum.length) {
    if (i === 4) {
      break;
    }
    console.log(arrNum[i]);
    i++;
  }
}

// Write a function that takes in a an array of strings and 
// use a continue statement when the item is at the second index
// let fruits= ['apple','plum','banana','strawberries','kiwi']
let fruits= ['apple','plum','banana','strawberries','kiwi']
skipIndex(fruits)

function skipIndex(fruits) {
  for (let i = 0; i < fruits.length; i++) {
    if (i === 2) {
      continue;
    }
    console.log(fruits[i]);
  }
}

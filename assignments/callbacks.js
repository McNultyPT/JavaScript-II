// Create a callback function and invoke the function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/


// 1
function getLength(arr, cb) {
  return cb(arr.length);
}

getLength(items, function(length) {
  console.log(length);
})


// 2
function last(arr, cb) {
  return cb(arr.pop());
}

last(items, function(lastItem) {
  console.log(lastItem);
})


// 3
function sumNums(x, y, cb) {
  return cb(x + y);
}

sumNums(1,2, function(add) {
  console.log(add);
})


// 4
function multiplyNums(x, y, cb) {
  return cb(x * y);
}

multiplyNums(1,2, function(multiply) {
  console.log(multiply);
})


// 5
// const list = [];
// const item = "";
function contains(item, list, cb) {
  for (let i = 0; i < list.length; i++) {
    if (list[i] === item) {
      return cb(true);
    } else {
      return cb(false);
    }
  }
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
}

contains('Pencil', items, function(present) {
  console.log(present);
})

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}

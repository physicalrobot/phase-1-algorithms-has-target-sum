function hasTargetSum(array, target) {

  const sum = []

  // pass a function to map

  for (let i = 1; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (i != j) {
        sum.push(array[j] + array[i]);
      } else {
        sum.splice(array[j] + array[i])
      }
    }
  }
  for (element in sum) {
    if (sum[element] === target) {
      return sum[element] === target
    }
  }
  return (sum[element] === target);


}


/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;

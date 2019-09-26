const findLargestLevel = function(node) {
  //starting at level 0 (root) push sum to our array
  let level = 0;
  let sum = 0;
  let sumArray = [];
  //level 0 value
  sumArray.push(node.value);

  //recursive function to find the sums and add to our array
  function findSumNode(node) {
    let sum1 = 0;
    if (node.left && node.right) {
      sum1 += node.left.value + node.right.value;
    } else {
      if (node.left) {
        sum1 += node.left.value;
      }
      if (node.right) {
        sum1 += node.right.value;
      }
    }
    sumArray.push(sum1);
  }

  //recursively find sums of levels
  while (node.left || node.right) {
    if (node.left) {
      node = node.left;
      findSumNode(node);
    }
    if (node.right) {
      node = node.right;
      findSumNode(node);
    }
  }

  console.log("SumNodeArray: ", sumArray);
  //calculating biggest value in our array to find the level
  let biggest = sumArray[0];

  for (let i = 1; i < sumArray.length; i++) {
    if (biggest < sumArray[i]) {
      biggest = [sumArray[i]];
      level = i;
    }
  }

  return level;
};

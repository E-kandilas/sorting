function split(wholeArray) {
  //when we have a base case with arr.length == 1
  //we should call a function inside that base case taht we can spy on
  let middle = Math.floor(wholeArray.length / 2);
  let leftArr = wholeArray.slice(0, middle);
  let rightArr = wholeArray.slice(middle);

  return [leftArr, rightArr];
}

function merge(leftRight) {
  let leftArr = leftRight[0];
  let rightArr = leftRight[1];
  let finalArr = [];
  let i = 0;
  let j = 0;
  while (leftArr[i] && rightArr[j]) {
    // if (leftArr[i] === undefined) {
    //   finalArr = [...finalArr, ...rightArr.slice(j)];
    //   return finalArr;
    // }
    // if (rightArr[j] === undefined) {
    //   finalArr = [...finalArr, ...leftArr.slice(i)];
    //   return finalArr;
    // }

    // if (leftArr[i] < rightArr[j]) {
    //   finalArr.push(leftArr[i]);
    //   i++;
    // } else if (leftArr[i] > rightArr[j]) {
    //   finalArr.push(rightArr[j]);
    //   j++;
    // } else {
    //   finalArr.push(leftArr[i], rightArr[j]);
    //   i++;
    //   j++;
    // }
    if (leftArr[i] < rightArr[j]) {
        finalArr.push(leftArr[i])
        i++
    } else {
        finalArr.push(rightArr[j])
        j++
    }

  }
  leftArr[i] ? finalArr.concat(leftArr.slice(i)) : finalArr.concat(rightArr.slice(j))

  return finalArr;
}
function mergeSort(array) {
  //takes an unsorted array
  //e.g. [1,2,3,4,5,6]
  //
  //1. merge sort until split 0, or split 1, has a lenght of 1
  //2. then identify which one of the ^ has a length of one
  //3. then call merge on them

  if (array.length <= 1) return array;

  let splitted = split(array);
  let leftArray = splitted[0];
  let rightArray = splitted[1];
  let sortedLeft = mergeSort(leftArray);
  let sortedRight = mergeSort(rightArray);

  let mergedArr = merge([sortedLeft, sortedRight]);

  return mergedArr;
}

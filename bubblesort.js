function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function bubbleSort(array) {
  //let swapped;

  for (let i = 0; i < array.length; i++) {
    //swapped = false;

    for (let j = 0; j < array.length; j++) {
      if (array[i] < array[j]) {
        swap(array, i, j);
        swapped = true;
      }
    }
    //if (swapped === false) break;
  }

  return array;
}

// function bubbleSort(arr)
// {

//    let swapped = Boolean
//    for (let i = 0; i < n-1; i++)
//    {
//      swapped = false;
//      for (let j = 0; j < n-i-1; j++)
//      {
//         if (arr[j] > arr[j+1])
//         {
//            swap(&arr[j], &arr[j+1]);
//            swapped = true;
//         }
//      }

//      // IF no two elements were swapped by inner loop, then break
//      if (swapped == false)
//         break;
//    }
// }

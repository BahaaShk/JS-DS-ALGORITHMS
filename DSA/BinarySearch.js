function binarySearch(arr,tar){
  let leftIndex = 0;
  let rightIndex = arr.length -1;

while(leftIndex <= rightIndex){
  let midIndex = Math.floor((leftIndex + rightIndex) / 2);
  if(tar === arr[midIndex]){
    return midIndex
  }

  if(tar < arr[midIndex]){
    rightIndex = midIndex - 1;
  } else {
    leftIndex = midIndex + 1
  }
}
return -1;
}
console.log(binarySearch([10, 20, 30, 40, 50], 30));
console.log(binarySearch([10, 20, 30, 40, 50], 60));
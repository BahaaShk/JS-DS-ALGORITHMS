function linearSearch(arr, t) {
for (let i=0; i<arr.length; i++){
if(arr[i] === t) {
return i; // Return the index of the target element
}

 }
 return -1; // Return -1 if the target element is not found
}

console.log(linearSearch([10, 20, 30, 40, 50], 30)); // Output: 2

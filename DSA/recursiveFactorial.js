function recursiveFactorial(num){
if(num <= 1){
  return 1
}

  return num * recursiveFactorial(num - 1);

}

console.log(recursiveFactorial(5)); // Output: 120
console.log(recursiveFactorial(1)); // Output: 0

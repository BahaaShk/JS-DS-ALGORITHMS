function recursiveFibonnaci(num){
if(num < 2){
    return num;
}

return recursiveFibonnaci(num - 1) + recursiveFibonnaci(num - 2);

} 

console.log(recursiveFibonnaci(0));
console.log(recursiveFibonnaci(1));
console.log(recursiveFibonnaci(6));

function FactorialOfNum(num){
  let result = 1;
if(num<=1) return 1;
// return num * FactorialOfNum(num-1);

// while (num>=1){
// result *= num;
// num--
// }
// return result
// }

// for(let i = 2; i<=num;i++){
//   result = result * i;
// }
// return result
// }
return [...Array(num).keys()].map(n => n+1).reduce((acc,curr) => acc * curr)
}

console.log(FactorialOfNum(5));

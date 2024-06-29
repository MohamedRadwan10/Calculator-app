// let n=5
// let x=0
// let x =prompt("enter num of factorial")
// let factorial = 1
// for(let i=1;i<=x;i++){
//     factorial *=i
// }
// console.log(factorial)







// let x = parseInt(prompt("Enter a number"));

// function isPrime(num) {
//     let sum = 0
//   if (num <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       return ;
//     }
//   }
//   return true;
// }

// if (isPrime(x)) {
//   console.log("true");
// } else {
//   console.log("false");
// }












// for (let i = 1; i <= 100; i++) {
//     if (i % 3 === 0) {
//       console.log("FIZZ");
//     } else if (i % 5 === 0) {
//       console.log("BUZZ");
//     }else if(i % 3 === 0 && i % 5 === 0){
//         console.log("FIZZBUZZ");
//     } 
//     else {
//       console.log(i);
//     }
//   }
  






// function LinearSearch(arr, value) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] == value) {
//         return i;
//       }
//     }
//     return -1;
//   }
  
//   let x = [1, 3, 5, 7, 9];
//   console.log(LinearSearch(x, 6));
  


















// let arr = [1,2,3,4,5,6,7,8,9,10]

// function sumprime(num){
//     if(num < 2){
//         return false
//     }
//     for(let i =2;i < num;i++){
//         if(num % i ==0){
//             return false
//         }
//     }
    

// }


// function isPrime(num) {
//     if (num < 2) {
//       return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
  
//   let size = parseInt(prompt("Enter size of array"));
//   let arr = new Array(size);

//   function sumPrimes(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = parseInt(prompt("Enter Number " + (i+1)));
//     }
//     for (let i = 0; i < arr.length; i++) {
//       if (isPrime(arr[i])){
//         sum += arr[i];
//       }
//     }
//     return sum;
//   }

//   console.log(sumPrimes(arr));
  
  







// function isPrime(num) {
//     if (num < 2) {
//       return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
   
//     let count = 0 
//   function primeNumber(num){
//     for (let i = 0;i <= num; i++){
//         if(isPrime(i)){
//             count+=1
//         }
        
//     }
//     console.log(count)
//   }
//   primeNumber(20)









// function persistence(num) {
//   let count = 0;

//   while (num >= 10) {
//     let product = 1;
//     while (num > 0) {
//       product *= num % 10;
//       num = Math.floor(num / 10);
//     }
//     num = product;
//     count++;
//   }

//   return count;
// }

// console.log(persistence(39)); 
// console.log(persistence(999));
// console.log(persistence(4));






function findNextSquare(sq) {
  const sqrt = Math.sqrt(sq);
  if (Number.isInteger(sqrt)) {
    const nextSquare = Math.pow(sqrt + 1, 2);
    return nextSquare;
  } else {
    return -1;
  }
}

console.log(findNextSquare(121)); 
console.log(findNextSquare(625));
console.log(findNextSquare(114));























// function getSum(a, b) {
//   let sum = 0;

//   if (a == b) {
//     return a;
//   }

//   if (a > b) {
//     for (let i = b; i <= a; i++) {
//       sum += i;
//     }
//   } else {
//     for (let i = a; i <= b; i++) {
//       sum += i;
//     }
//   }

//   return sum;
// }

// console.log(getSum(1, 0)); 
// console.log(getSum(1, 2));
// console.log(getSum(0, 1));
// console.log(getSum(1, 1));
// console.log(getSum(-1, 0));
// console.log(getSum(-1, 2));










// function isIsogram(str) {
//   const chars = [];
//   str = str.toLowerCase();

//   for (let i = 0; i < str.length; i++) {
//     const newChar = str[i];
//     if (chars.includes(newChar)) {
//       return false;
//     }
//     chars.push(newChar);
//   }

//   return true;
// }

// console.log(isIsogram("Dermatoglyphics")); 
// console.log(isIsogram("aba"));
// console.log(isIsogram("moOse")); 








// let x =parseInt(prompt("Enter Number"))

// for(let i=0;i<=x;i++){
//     if(i % 2 == 0){
//         console.log(i)
//     }
// }



// let arr = new Array(7);
// let salary = 10
// let overTimeSalary = 15
// let daysalary =0
// let sum = 0
 
// function WeeklySalary(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = prompt("Enter Hours Day " + (i + 1));
//     }
//     for (let i = 0; i < arr.length; i++){
//         if(arr[i] == 8){
//             daysalary = 8*salary
//         }else if(arr[i] == 10){
//             daysalary = (8*salary)+(2*15)
//         }else{
//             daysalary =0
//         }
//         sum +=daysalary
//         }
//         for (let i = 0; i < arr.length; i++){
//             console.log(arr[i])
//         }
    
//     console.log(sum)
// }

// WeeklySalary(arr);


































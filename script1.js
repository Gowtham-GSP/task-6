// Q.1 Fix the code to gen Title caps.

// var arr = ["guvi", "geek", "zen", "fullstack"];
// //var ano = function(arro) {
//  for (var i = 0; i <= arr.length; i++) {
//  console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
//  }
// //}
// // ano();  ANS:[Guvi,geek,zen,fullstack]


//Q.2 Fix the code to return the Prime numbers

const newArray=[1,3,2,5,10];
const myPrime=newArray.filter(num=>{
 for(let i=2;i<=num;i++){
 if(num%i===0)
 {
 return true;
 }
 }
 return num===1;
});
console.log(myPrime);


// Fix the code to sum the number in that array

const num = [10, 20, 30, 40,50,60,70,80,90,100] 
const sum1 = (a, b) =>
 a + b
const sum = num.reduce(sum1)
console.log(sum);


// Fix the code to rotate an array by k times and return rotated array using IIFE function

// var arr = [1, 2, 3, 6, 8, 6, 1, 9, 10, 12, 13];
// var k = 3;
// k = arr.length % k;
// (function() {
//  arr = {};
//  out = arr.slice(k + 1, arr.length);
//  var count = out.length;
//  for (var i = 0; i < k + 1; i++) {
//  out[count] = arr[i];
//  count += 1;
//  }
//  console.log(out);})();

//  Q.print all odd numbers in an array using IIFE function

var arr = [1, 2, 3, 5, 7, 79, 7, 2, 6, 9, 4];
(function() {
 for (var i = 0; i < arr.length; i++) {
 if (arr[i] % 2 === 0) {
 console.log(arr[i]);
 }}
})();
 

// Fix the code to reverse.

(function(str){
 str = str.split("").reverse().join("");
 console.log(str); 
})("ABCD")
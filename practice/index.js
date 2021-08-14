// var t = document.getElementsByTagName('p')[0]
//  //z = t.getElementsByClassName('container_test2')
//  console.log(t)


//3. javascript variable
//what is varible,

//Ans. containers to store data values

// var number = 34;
// var number2 = 36;

// console.log(number + number2);


//4. data types in javascripts

//string

// var str = "this is string";
// var str2 = " thsi also a strng"; 

//objects

// var marks = {
//     ravi: 34,
//     subham: 54,
//     Nasir: 65
// }
 
// undefined

//var und; or 
//var und = undefined;


// null

//var und = null;

/*
there ar etwo types of data types in javascript

1. Primitive data types: undefined, null, number, symbol, string
2. Refference data types: array, objects

*/
//array

// var arr = [1, 2, "bablu", 3, 5];
// console.log(arr);


//operators

//1. Arithmatic Operators like +, -, *, %, /
//2. Assignment Operators like  =, -=, +=, *=
//3.comparison operators like ==, ===, !=, !==, >, <, <=, >= etc
//4.logical opertors like &&, ||, !


//Functions

// function avg(a,b){
//     return (a+b)/2
// }

// var  c= avg(6,4); 

// console.log(c);


//loops

//var arr = [1,2,3,4,5,6,8];

// for loop
// for(var i=0; i< arr.length; i++){
//     console.log(arr[i]);
// }

//foreach loop
// arr.forEach(function(e){
//     console.log(e);
// })

//while loop
//let j= 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

//do-while loop
// do{
//     console.log(arr[j]);
//     j++
// }while(j < arr.length)

//new practice with harry

// var arr = ['heavy', '', 2, true, 'sam'];
// console.log(arr);
//  var len = arr.length;
//  console.log(len);

// arr.unshift('nasir');
//  console.log(arr);
//  const newlen = arr.length;
//  console.log(len, newlen);

 ///// string in javascript
// var arr = ['heavy', '', 2, true, 'sam'];
//  var str = arr.toString();

//  console.log(str);

 //lenth property can be used for string length

  //var mylovelyString = "Nasir is a good person good good man";

//  console.log(mylovelyString.length);

 //index of used to get index of an character

//  console.log(mylovelyString.indexOf("g"));
//console.log(mylovelyString.lastIndexOf("good"));


//replace is used for repace character/characters (first) and replace all replace all matching characters

//console.log(mylovelyString.replaceAll("g", "b"));




//Date in javascript


// let date  = new Date();
// console.log(date);

// console.log(date.getUTCFullYear());


//DOM (Document Object Model) document can be used to access our page and can manipulate our html

//appnedChild() append an child element


//createElement() can create an element 

// removeChild() can replace element

// start video after 2:23:00



//classList and add and remove

// let elemClass = document.getElementsByClassName('container');
// console.log(elemClass);

// elemClass[0].classList.add('new');

// elemClass[0].classList.remove('new');

//removeChild(); remove an element

//Slecting using Query

// Sel = document.querySelector('#para');
// console.log(Sel);

//Java script Event

// function clicked(){
//   console.log('button is clicked');
// }

// window.onload = function(){
//   console.log('documnent loaded');
// }
// document.getElementById('first_button').addEventListener('mouseover', addListner);

// function addListner(){
// //document.querySelectorAll('#divContainer')[0].innerHTML = "on click";
// console.log('clicked completed');
// }

//arrow function
// function sum(a,b){
//   return a + b;
// }

// sum = (a,b)=>{
//   return a+b;
// }
// console.log(sum(5,10));


// setTimeout and setinterval
// logKro = ()=>{
//   console.log('fired');
// }
// logKro1 = ()=>{
//   console.log('fired another');
// }

//setTimeout(logKro, 2000);

// clr = setInterval(() => {
//   logKro();
//   logKro1();
// }, 2000);

// console.log(clr);

// clearInterval(clr);

// clearInerval and clearTimeout is used to stop setInterval and setTimeout by passing return value of setInteral and setTimeout

// localstorage : local storage is used to store data locally on browser;

// localStorage.setItem('name', 'Nasir');
// console.log(localStorage.getItem('name'));
//localStorage.clear();

//JSON

// obj = {name: "Nasir", length: 1};
// js = JSON.stringify(obj);
// type = typeof(obj)
// console.log(js);
// console.log(type);

// parsed = JSON.parse('{"name": "Nasir", "length": 1}');
// console.log(parsed);

//template literals  - Backticks
// var n = 5;
// console.log('new name '  + n);


//start after 3:11:00 
////////////*****************************/////////////

//Namaste JavaScript Tutorial notes

// var x = 1;
// a();
// b();
// console.log(x);
// function a(){
//   var x = 10;
//   console.log(x);
// }
// function b(){
//   var x = 100;
//   console.log(x);
// }



// function a(){
//   var b = 10;
//   c(10);
//   //console.log(e);
//   function c(d){
//      console.log(b);
//      console.log(e);
//      if(d){
//        var e = 1000;
//       console.log(b);
//       console.log(e);
//      }
//      console.log(e);
//   }
// }
// a();
// console.log(b);
// var t = 100;
// if(t ==100){
//   var g =198;
//   console.log(g);
// }
// console.log(g);

//let,const amd temporal dead zone
//let cant access before initialized

//Temporal Dead Zone:
/* Temporal deadzone in a time since when let variable 
was hoisted and till it is initilaize some value. 
Time between that is known as Temporal deadzone. */

//SyntaxError: 
/* Nothing will run. 
There is some problem with syntax.*/

//RefferenceError:
/* If we din't find any variable initialized. */

//TypeError
/* If we change type of variable declaration.  */

// let a;
// console.log(a);

// var b = 100;







////////////********************GEEKSFORGEEKS***********************///////////
//$ sign use to access jQuery

$(document).ready(function(){
  // $('p').hover(function(){
  //   $(this).css('background-color', 'blue');
  // }, function(){
  //   $(this).css('background-color', 'orange');
  // });
});

////////*********************************************************************//////////

//Ecma Script 6 (EC6) BY Technical Thapa

//var let and const

 /*
var - function scope
let/const - block scoped
 */

//var name = "nasir";
//let name = "nasir";
// const name = "nasir";
// console.log(name);
// let fname;
// function test(love){
// if(love){
//  fname = 'Nasir Khan';
//   console.log('my name is in block ' + fname);
// }
// console.log('my name is in function' + fname);
// }

// test(true);
// console.log('my name is out of' + fname);
// console.log('my name is ' + test(true));

//template literals
// let name = "Nasir";
// let age = 26;
// console.log(`my name is ${name}. My age is ${age}`);

//template string  methods
// const fname = `${name} `;
// const mage = `${age}`;
// console.log(fname.startsWith('N'));
// console.log(fname.endsWith('n'));
// console.log(fname.includes('n'));
// console.log(fname.repeat('10'));


//  function findMedianSortedArrays(nums1, nums2) {
//   var n = nums1.length;
//   var m  = nums2.length;
//   var t = m+n;
//   var i = 0;
//   var j = 0;
//   var k = 0;
//   var count=  0;
//   console.log(t);
//   var  arr = new Array(m+n);
//   while(i < n && j < m){
//     console.log(i+'='+j);
//     count++;
//     //console.log(nums1[i]+'='+nums2[j]);

//       if(nums1[i] < nums2[j]){
//           arr[k] = nums1[i];
//           i++;
//           k++;
          
//       // } else if(nums1[i] == nums2[j]){
//       //              arr[k] = nums1[i];
//       //              arr[k+1] = nums2[j];
//       //              i++;
//       //              j++;
//       //              k=k+2;
//       } else if(nums1[i] > nums2[j]){
//                       arr[k] = nums2[j];
//                       j++;
//                       k++; 
//       }
//   }
//   console.log(count);
//   while(i<n){
//       arr[k] = nums1[i];
//       i++;
//       k++;  
//   }
//   while(j<m){
//       arr[k] = nums2[j];
//       j++;
//       k++; 
//   }
//   console.log(arr);
//   if((t)%2!=0){
//       var median_index = (t-1)/2;
//        console.log(arr[median_index]);
//   } else {
//     var median_index1 = ((t)/2)-1;
//     var median_index2 = median_index1+1;
//     var median = (arr[median_index1]+arr[median_index2])/2;
//     console.log(median_index1);
//     console.log(median_index2);
//     console.log(median);
//   }
  
// };
// let num1 = [1,3];
// let num2 = [2,7]
// findMedianSortedArrays(num1,num2);


//  function lengthOfLongestSubstring(s) {
    
//   var str = '';
//   var temp = '';
//   var k = 0;
//   for(let i =0; i<s.length; i++){
//       if(str.includes(s[i]) == false){
//           str += s[i];
//       } else {
//           if(str.length > temp.length){
//               k++;
//               temp = '';
//               temp = str;
//               i = k;
//           } else {
//               i = k;
//               str = '';
//           }
//       }
//   }
//   // return temp.length;
//   console.log(temp);
  
// };

function lengthOfLongestSubstring(s) {
    
  var str = '';
    var temp = '';
    var  temp_new = '';
    for(let i =0; i<s.length; i++){
        if(str.includes(s[i]) == true){
            temp = str;
            if(temp_new.length < temp.length){
              temp_new = '';
              temp_new = temp;
              }
            //console.log(str);
            console.log(temp);
            let index = str.indexOf(s[i]);
            str = str.substr(index + 1);
            //console.log(str);
        } 
        str += s[i];
        console.log(str);
        // if(temp_new.length < temp.length){
        // temp_new = '';
        // temp_new = temp;
        // }
    }
  // return temp.length;
  console.log(temp_new.length);
  
};
var t = "aab";
lengthOfLongestSubstring(t);
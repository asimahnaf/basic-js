//  #module 13 basic javascript


// var number1 = "10";
// var number2 = 20;
// // console.log(parseInt(number1));
// number1 = parseInt(number1);
// console.log(typeof number1);
// console.log(typeof '' +number2);
// console.log(typeof number1);
// var number3 = 23.2;
// number3 = '' + number3;
// console.log(typeof number3);
// // varname.toFixed(1);

// number1 = 0.1;
// number2 = 0.2;
// var total = number1 + number2;
// total = total.toFixed(1);
// console.log(total);

// //javascript time zone

// var time = new Date();
// console.log(time);



// ****************************************
// Array

// var friendsAge = [ 12, 29, 21, 12];

// var sabina = friendsAge[0];

// friendsAge[1] = 15;
// // console.log(friendsAge);

// var position = friendsAge.indexOf(15);
// console.log(position);

// friendsAge.push(40);
// console.log(friendsAge.length);
// friendsAge.shift(12, 15);
// console.log(friendsAge);

// var num = 10;
// while (num < 15){
//     console.log(num);
//     num++;
// }

// for loop
// var num = [ 23, 444, 42,52,12];
// for (var i= 0; i < num.length; i++) {
//     console.log (num[i]);
    
// }

// var array = [12, 32,31, 43, 56, 65, 45];
// var size = array.length;
// console.log(size, array);

// var i = 0;


// while(i < size){
//     console.log(array[i]);
//     i++;
// }

// var num = 100;
// switch (num){
//     case 100:
//         console.log("hi i am 100")
//         break;
// }



// *********************
// function call

// function myLove(){
//     console.log('love you my dear');
//     console.log('every where');
// }

// myLove();

// function multiple(x, y){
//     var result = x * y;
//     return result;
// }

// var store = multiple(5, 2);
// console.log(store);
// console.log(multiple(3, 10));



// ************************************
// Object Diclearition

// var student = { id: 234, phone:03223, name:"mahi"}


// var NameofStudent = student ['name'];
// var PhoneNumber = student ['phone'];
// console.log(student.name);
// console.log(PhoneNumber);

// student.phone = 32123;
// console.log(student.phone);
// student['phone'] = 22222;
// console.log(student.phone);


// #module 14
// ************************
// feet to inch calculator

// function feetTOIntch(x){
//     var feet = x/12;
//     return feet;
// }

// var senior = [12, 123, 121, 32];
// console.log(feetTOIntch(senior[0]));
// console.log(feetTOIntch(12));


// ******************
// check lepe year

// function isLepeYear(year){
//     let remainder = year % 4;
//     if(remainder == 0){
//         return true;
//     }
//     else {
//         return false;
//     }

// }

// const check2021 = isLepeYear(2021);
// console.log(check2021);

// **************************************************************
// factrorial use for and while loop with function and without function

// var n = 10;
// var stor = 0;

// // for(var i=0; i<=n; i++){
// //     stor+= i;
// //     console.log(i, stor);
// // }
// function factorial(n){
//     console.log("new thing");
//     stor = 1;
//     for(var i = 1; i<=n; i++){
//         stor*=i;
//         return i, stor;
//     }
    
// }
// var x  = factorial(5);
// console.log(x);




// function Returncall(n){
//     if(n==1){         //this is call stopping condition
//         return 1;
//     }
//     else{
//         console.log(n);
//         return Returncall(n -1);
        
//     }
    
// }
// let stor = Returncall(10)
// console.log(stor);

// console.log("hello world");
// let array = [20, 12, 40];
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     // console.log(element);
    
// }
// ********************************************************************
// DOM 
// using dom 
// console.log(document.body);
// var first = document.getElementById('first');
// first.style.color = 'red';

// var secund =document.getElementById('secund');
// secund.style.color = 'green';
// var secund =document.getElementById('secund');
// secund.style.fontSize = '45px';

// var Third = document.getElementById('first');
// first.style.backgroundColor = 'yellow';

// var authors = document.getElementsByClassName('author');
// console.log(authors);
// for (let i = 0; i < authors.length; i++) {
//     var element = authors[i];
//     element.innerHTML = 'lekhol' + (i+1);
//     console.log(element.innerHTML);
//     element.style.backgroundColor = 'lightblue'
//     element.style.margin = '10px'
//     element.style.padding = '5px'
//     element.style.borderRadius = '05px'
//     console.log(element);
    
// }

// document.body.style.background = 'lightgrey';

// document.querySelector('h1').setAttribute('title', 'give me your mouse');

// var stor = document.querySelector('h1');
// stor.style.color = 'green';
// stor.style.fontSize = '40px';
// stor.style.backgroundColor = 'lightgrey'


// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// #module 19-1 function recap
// let array = [20, 40, 23, 52, 42, 12, 31 ,33, 41, 24, 42];

// function evenfiy(num) {
//     if (element % 2==0) {
//         return ":is even", element;
//     }
//     else{
        
//         return ":is odd", element;
//     }
// }

// for (let i = 0; i < array.length; i++) {
//     var element = array[i];
//     let num = evenfiy(element);
//     console.log(num);
// }

// function addnumber(number1, number2){
//     let x = number1+number2;
//     return x;
// }

// console.log(addnumber(5, 5));

// function cycle(n){

//     for (let i = 0; i < n; i++) {
//         if (i%2 == 0) {
//             return i;
//         }
//         return i;
//     }
    // console.log(element);
    
// }

// cycle(10);
// let lock = cycle(32);
// console.log(lock);

// document.getElementById('test').innerHTML = 'lunch';
// function returncall(n){
//     if(n == 1){
//         return 1;
//     }
//     else{
//         console.log(n);
//         return returncall(n-1);
//     }
// }
// let store = returncall(10);
// console.log(store);

// let array = [10, 3, 20, 44, 30];

// let cool = function (x){
//     if(x%2 == 0){
//         console.log('even this is');
//     }
//     else{
//         console.log('this is odd');
//     }

//  }

// function multiple(n){
//     var store = n % 2;
//     return store;
// }
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];

//      var x = multiple(element);
//      cool(x);
//      console.log(x);
    
// }

// setTimeout( function(){console.log('exeucte later after 1 secand')});   

// Error this code: let person = {
//     firstName: 'John',
//     lastName: 'Doe'
// };

// (function () {
//     console.log(person.firstName} + ' ' + person.lastName);
// })(person);

// var authors = document.getElementsByClassName('author');
// console.log(authors);

// for(i = 0; i <= authors.length; i++){
//     var element = authors[i];
//     element.style.backgroundColor = 'lightblue'
// }

// module 18
// const article = document.getElementById('first-article');
// const newParagraph = document.createElement('p');
// newParagraph.innerHTML = 'This line added by javaScript';
// article.appendChild(newParagraph);
// const color = document.getElementById('first-article');
// color.style.backgroundColor = 'lightgray'

// console.log(document.getElementById('gift').childNodes);
// document.getElementById('gift').parentNode

// module 19
// console.log(12);

// function

// function even_odd(num){
//     if(num%2 == 0){
//         console.log(num, ': is even');
//     }
//     else{
//         console.log(num, ': is odd');
//     }
// }

// function even_oddall(num){
    
//     for (let i = 0; i < num.length; i++) {
//         const element = num[i];
//         even_odd(element);
//     }
// }
// for (let i = 0; i < num.length; i++) {
//     const element = num[i];
//     sum = 1;
//     if(element%2 == 0){
//         console.log(element, " :number is even =", );
//     }
//     else{
//         console.log(element, " :number is odd =");
//     }
// }

// frinds_age = [20, 22, 21, 10, 25, 23, 29];

// even_oddall(frinds_age);
// num = [ 12, 21, 42, 23, 43, 54, 44, 40, 34]

// for (let i = 0; i < num.length; i++) {
//     const element = num[i];
//     sum = 1;
//     if(element%2 == 0){
//         console.log(element, " :number is even =", );
//     }
//     else{
//         console.log(element, " :number is odd =");
//     }
// }

// frinds_age = [20, 22, 21, 10, 25, 23, 29];

// even_oddall(frinds_age);

// _________________________________________
// return function
// var array = [12, 21, 32, 42, 55, 53, 51, 44, 56]
// var evenArray  = [];
// var oddNumber = [];
// function retuRnThis(num){
//     var result;
//     result = num;
//     if(result%2 == 0){
//         evenArray.push(result);
//         return result*2;

//     }
//     else{
//         oddNumber.push(result);
//         return result;
//     }
// }

// function LoopThisArray(num){
//     for (let i = 0; i < num.length; i++) {
//         const element = num[i];
//         console.log(retuRnThis(element)) ;
//     }
// }
// LoopThisArray(array);
// console.log(evenArray);
// console.log(oddNumber);


// ____________________________________________________
// call back functuon

// function CallBackFunction(name, age, task){
//     console.log("Hello", name);
//     console.log('your age:', age);
//     task();
// }

//  function WashHand(){
//     console.log('Wash your hand with soap');
//  }

//  function Shower(){
//     console.log('Take shower');
//  }

//  CallBackFunction('zohir', 13, WashHand);
//  CallBackFunction('Raihan', 15, Shower);


//  ___________________________________________________
//  arguments
// function addNumber(number1, number2){
//     console.log(arguments);
//     console.log(arguments[3]);
//     return number1+number2
// }

// console.log(addNumber(3, 5, 4, 33));

// function addNumber(num1, num2){
//     var sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         const number = arguments[i];
//         console.log(number);

//         sum = sum+number;
//     }

// }

// addNumber(23, 40, 32);
// console.log('add number = ', addNumber(32,43,433,23,322));

// ______________________________________
// function Diclearition Technic 
// function massage(massage){
//     console.log(massage);
// }

// function helloween(){
//    massage('this massage is for you.');
// }

//  helloween();


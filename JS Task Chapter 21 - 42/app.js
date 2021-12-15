// /* _____________________________________________________________________
//                                 CHAPTER 21 - 25
// ________________________________________________________________________*/

// Q # 01

// var firstName = prompt('Enter Your First Name');
// var lastName = prompt('Enter Your Last Name');

// var fullName = firstName + " " +lastName
// alert(fullName)

// Q # 02

// var favPhone = prompt('Enter Your Favourite Phone');
// document.write('My Favorite Phone Is:' + favPhone + ' <br> ' + ' Lenght of ' + typeof(favPhone) + favPhone.length);

// Q # 03

// var word = 'Pakistani';
// alert(typeof(word)+': ' + word + '\n' + 'index of' + ' "n" : ' + word.indexOf('n'));

// Q # 04

// var q_4 = 'Hello World';
// alert(typeof(q_4) + ':' + q_4 + "\n" + 'Last index of "l" : ' + q_4.lastIndexOf("l") );

// Q # 05

// var words = 'Pakistani';
// alert(typeof(words) + ':' + words + "\n" + 'Character atindex ' + words.indexOf("i") + ': ' + words.charAt(3) );

// Q # 06

// var firstName = prompt('Enter your firstname');
// var laststName = prompt('Enter your laststname');
// alert(firstName.concat(laststName));


// Q # 07

// var city = ' Hyderabad ';
// var citgy = city.replace('Hyderabad' , 'Islamabad');
// alert('City: '+city + "\n" +  'After Replace :' + citgy);

// Q # 08

// replace With replace function

// var rep ='Ali and Sami are best friends. They play cricket and football together';
// var replace = rep.replace(/and/g , "&");
// document.write(replace);

// replace with loops

// var rep ='Ali and Sami are best friends. They play cricket and football together';
// for(var i = 0;i < rep.length; i++){
//     if(rep.slice(i , i + 3) === "and"){
//         rep = rep.slice(0 , i) + "&" +rep.slice(i + 3)
//     }
// }
// document.write(rep);

// Q # 09

// var val = ' 475 ';
// document.write('Value: ' + val + ' <br> ' + ' type: ' + typeof(val) + ' <br> ' +'Value: ' + val + ' <br> ' + ' type: ' + typeof(Number(val)) );

// Q # 10

// var peanut = prompt('Enter anything');
// alert(peanut.toUpperCase());

// Q # 11

// var text = prompt("Enter Any String");
// var firstLatter = text[0].toUpperCase();
// console.log(firstLatter + text.slice(1) );

// Q # 12

// var num = prompt('enter Number');
// var num1 = num.replace("." , '')
// alert('number:' + num + "\n" + 'Result:' + num1);

// Q # 13

// var naam = prompt("Enter your name");

// naam = naam.toLowerCase();

// check = false;

// for(var i = 0;i < naam.length; i++){
//     if(naam.slice(i , i + 1).charCodeAt() == 46 || naam.slice(i , i + 1).charCodeAt() == 44 || naam.slice(i , i + 1).charCodeAt() == 64 || naam.slice(i , i + 1).charCodeAt() == 33){
// check = true;

//     }else{
//         check = false;
//     }
// }
// if(check == true ){
//     alert("enter invalid name")
// }else{
//     alert(naam)
// }

// Q # 14

// var arr = ['cake', 'apple pie', 'cookie', 'patties', 'chips' ];
// var want = prompt('enter item');
// var isFound = false;
// want = want.toLowerCase();

// for(var i = 0;i < arr.length; i++){
//     if(want === arr[i]){
//         alert(want + 'is available at index ' + i)
//         isFound = true;
//         break;
//     }
// }
// if(isFound = false){
//     alert(want + 'is not available in our bakery')
// }


// Q # 15

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.


// Q # 16

// var uni = ' University of Karachi ';
// var myArry = uni.split("");

// for(var i = 0;i < myArry.length; i++){
//     document.write(myArry[i] + "<br>")
// }


// Q # 17

// var input = prompt()
// var lastInput = input.slice(input.length -1);

// document.write(' Input ' + input + '<br>' + ' Last Index of : ' + lastInput);


// Q # 18

// var jump = 'The quick brown fox jumps  over the lazy dog';
// jump = jump.toLowerCase()
// var temp = (jump.match(/the/g) || jump).length;
// document.write(' Text: ' + jump + '<br>' + ' There are ' + temp + ' occurence ' + 'in word of: "the"'  );

// /* _____________________________________________________________________
//                            Complete 21 - 25
// ________________________________________________________________________*/


// /* _____________________________________________________________________
//                                 CHAPTER 26 - 30
// ________________________________________________________________________*/

// Q # 01

// var num = +prompt('positive integer');
// var numRound =  Math.round(num);
// var numFloor = Math.floor(num);
// var numCeil = Math.ceil(num)
// document.write('Number : ' + num + '<br>' + ' Round of value: ' + numRound +  '<br>' + 'Floor valie : ' + numFloor +  '<br>' +  ' Ceil value : ' + numCeil);

// Q # 02

// var num = prompt('negative integer')
// var numRound =  Math.round(num);
// var numFloor = Math.floor(num);
// var numCeil = Math.ceil(num)
// document.write('Number : ' + num + '<br>' + ' Round of value: ' + numRound +  '<br>' + 'Floor valie : ' + numFloor +  '<br>' +  ' Ceil value : ' + numCeil);

// Q # 03

// var num = prompt('please enter a -num value the i will give you absolute value');
// var absolut = Math.abs(num);
// document.write('The Absolute value of: ' + num + ' is ' + absolut)

// Q # 04

// var diceRoll = Math.floor(Math.random() *6 +1);
// console.log('Random dice value: '  + diceRoll);
// var diceRoll1 = Math.floor(Math.random() *6 +1);
// console.log('Random dice value: ' + diceRoll1);


// Q # 05


// var toss = Math.floor(Math.random() *2 +1);
//  console.log('Random coin value 1 Tails : '  + toss);

//  var toss1 = Math.floor(Math.random() *2 +1);
// console.log('Random coin value 2 Head : '  + toss1);

// Q # 06

// var RandomNum = Math.floor(Math.random() *100 +1);
// console.log('Random Number Between 1 to 100 : '  + RandomNum);


// Q # 07.

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// Q # 08


// var num = prompt("Enter a Number between 1 to 10")
// var secretNum = Math.floor(Math.random() * 10 +1);
// console.log(secretNum)
// if(secretNum == num){
//     console.log('Conratulation')
// }else{
//     console.log('Try Again')
// }

// /* _____________________________________________________________________
//                            Complete 26 - 30
// ________________________________________________________________________*/


// /* _____________________________________________________________________
//                            Chapter 31 - 34
// ________________________________________________________________________*/


// Q # 01

// var rightNow = new Date ();
// console.log(rightNow);

// Q # 02

// var arr = ['jan', 'feb', 'march', 'april', 'may', 'june', 'july', 'aug', 'sep', 'oct', 'nov', 'December'];
// var now = new Date();
// var theMonth = now.getMonth();
// var currentMoth = arr[theMonth];

// alert('Current Month: ' + currentMoth);

// Q # 03


// var dayArr = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// var now = new Date();
// var theDay = now.getDay();
// var currentDay = dayArr[theDay];

// alert('Today is: ' + currentDay);

// Q # 04

// var currentDate = new Date();
// currentDate.toString;
// var b = currentDate.toString();
// var c = b.slice(0,3);
// if (c === "Sat" ||c === "Sun"){
//     alert("It's Fun Day")
// }else{
//     alert('Working Day')
// }


// Q # 05

// var now = new Date();
// var dateStr = now.toDateString();
// document.write(dateStr + '<br>')

// if(dateStr >= 'Dec 01 2021' || dateStr  === 'Dec 15 2021'){
//     document.write('First fifteen days of the month' + '<br>')
// }else if(dateStr >= 'Dec 16 2021'){
//     document.write('Last days of the month')
// }


// Q # 06


// var todayDate = new Date();
// var Todaymilli = todayDate.getTime();
// var todayMin = todayDate.getMinutes();
// var diff = Todaymilli - todayMin;
// var diffMin = diff/(1000*60*60);
// var accurateMin = Math.floor(diffMin);

 
// document.write("Current Date: " + todayDate);
// document.write("<br> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
// document.write("<br> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin)

// Q # 07

// var a = new Date();
// var b = a.getHours();
// if(b > 0 && b < 12 ){
// document.write("It's AM")
// }else{
//     document.write("It's Pm")
// }

// Q # 08

// var laterDate = new Date('Dec 31 2020');
// document.write(laterDate);


// Q # 09


// var ramDate = new Date("06 / 18 / 2015");
// var preDate = new Date();
// var ramDate1 = ramDate.getTime();
// var preDate1 = preDate.getTime();
// var than = preDate1 - ramDate1;
// var total = than / (1000 * 60 * 60 * 24);
// total = Math.round(total);

// document.write(total + " have passed since 1st ramdan,2015");


// Q # 10

// var pasDate = new Date("jan 1,2015");
// var newDate = new Date("dec 5,2015");
// var days = newDate.getTime() - pasDate.getTime();
// var day1 = days / (1000 * 60 * 60 * 24);
// var finalDays = day1 * 1000 * 60 * 60 * 24;
// document.write(
//     "on the reference date : " + newDate + "<br>" + finalDays + " seconds had passed since the beinning of 2015"
// )


// Q # 11


// var checkTime = new Date();
// var oneHour = new Date();
// var oldHour = oneHour.setHours(oneHour.getHours() - 1);
// var oldDate = new Date(oldHour)

// document.write("Curent Date: " + checkTime + "<br> 1 hour ago, it was " + oldDate);


// Q # 12

// var checkTime = new Date();
// var oneYears = new Date();
// var oldYears = oneYears.setFullYear(oneYears.getFullYear() - 100);
// var oldDays = new Date(oldYears);

// document.write('Current Year ' + checkTime + "<br> 100 Years ago, it was " + oldDays);


// Q # 13

// var age = prompt('Enter your age');
// var d = new Date();
// var fYear = d.getFullYear();
// var final = fYear - age
// document.write('Your Age is: ' + age + ' <br> ' + 'BirthYear is: ' + final);


// Q # 14


// var consumerName = ' Syed Bilal Ali ';

// var d = new Date();
// var m = d.getMonth();

// var numUnit = Number(prompt('Enter Your Unit'));

// var unitcharges = 16;
// var latePayble = 350;
// var netAmount = numUnit * unitcharges;
// var gross = netAmount + latePayble;
// document.write('Net Amount Payble (within Due Date): '+  netAmount);
// document.write(' <br> Late Payment Charges ' + latePayble + ' <br> ' + 'Gross Amount Payable (After Due Date): ' + gross);

// /* _____________________________________________________________________
//                            Complete 31 - 34
// ________________________________________________________________________*/
// /* _____________________________________________________________________
//                            Complete 35 - 38
// ________________________________________________________________________*/

// Q # 01

// function abc(){
//     var d = new Date();
//     document.write(d);
// }
// abc();

// Q # 02

// function c(){
//     var fName = prompt('enter your first name');
//     var lName = prompt('enter you last name');
//     alert(fName.concat(" "+lName));
// }
// c()

// Q # 03


// function num(){
//     var num1 =+prompt('enter number');
//     var num2 =+prompt('enter number');
//     alert(num1 + num2);
// }
// num();



// Q # 04

// 4. Calculator:
// Write a function that takes three arguments num1, num2
// & operator & compute the desired operation. Return and
// show the desired result in your browser.


// Q # 05


// function square(a){
//     return(a*a);
// }
// var v = square(2)
// alert(v)



// Q # 06

// function factorial(num) {
//     if (num == 0)
//         return 1;
//     else {
//         return (num * factorial(num - 1));
//     }
// }

// factorial(5);


// Q # 07


// function counting (){
//     var start = +prompt('Enter start number');
//     var end = +prompt('Enter end number');
//     for(var i = start; i <= end; i++){
//         document.write(i + ' <br> ')
//     }
// }
// counting();
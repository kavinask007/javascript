// Assignment 1 :
// Write a JavaScript function to split a string and convert it into an array of words
function words(str) {
    return str.split(" ");
}
//Assignment 2
//Write a JavaScript function to extract a specified number of characters from a string
function extract(str, num) {
    if (num>str.length || num<0) {
        return null;
    }
    return str.slice(0, num);
}
//Assignment 3
//Write a JavaScript function that takes a string which has lower and upper case letters as a
//parameter and converts upper case letters to lower case, and lower case letters to upper case
function convert(str) {
    finalstring=''
    for(let i=0;i<str.length;i++)
    {
        if(str[i].isalphabet){
            if(str[i].isupper){
                finalstring+=str[i].tolower();
            }else{
                finalstring=str[i].toupper();
            }
        }
        else{
            finalstring+=str[i];
        }

    }
    return finalstring;
}


function convertToF(celsius) {
    return celsius * 9 / 5 + 32;
}   //convertToF 
  
//Topic 2 : JavaScript Numbers
//Assignment 1
//Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
function convertToFahrenheit(celsius) {
    return celsius * 9 / 5 + 32;
}   

function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 1.8;
}   

//Assignment 2
//Write a JavaScript program to compute the sum of the two given integers. If the two values are
//same, then returns triple their sum
function sum(a, b) {
    if (a == b) {
        return (a + b) * 3;
    } else {
        return a + b;
    }
}

// Topic 3 : JavaScript Math
//Assignment 1
//Write a JavaScript function to format a number up to specified decimal places.
function format(num, decimal) {
    return num.toFixed(decimal);
}

//Assignment 2
//Write a JavaScript function to generate a random integer.
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Assignment 3
//Write a JavaScript function to round a number to a given decimal places.
function round(num, decimal) {
    return num.toFixed(decimal);
}

//Assignment 4
//Write a JavaScript function to calculate the percentage (%) of a number
function percentage(num, percent) {
    return (num / 100) * percent;
}

//Topic 4:JavaScript Dates
//Assignment 1
//Write a JavaScript function to test whether a date is a weekend or not.
function isWeekend(date) {
    return date.getDay() === 0 || date.getDay() === 6;
}

//Assignment 2
//Write a JavaScript function to count the number of days passed since beginning of the year
function daysInYear(date) {
    return date.getFullYear() * 365 + date.getDay() + date.getMonth() * 30;
}
//Assignment 3
//Write a JavaScript function to get a full textual representation of the day of the week (Sunday
//through Saturday).
function dayOfWeek(date) {
    return Date.longDays[date.getDay()]
}

//Assignment 4
//Write a JavaScript function to get difference to Greenwich time (GMT) in hours
function Difference(date) {
    return date.getTimezoneOffset() / 60;
}

//Topic 5 : Javascript Arrays
//Assignment 1
//Write a JavaScript program to remove duplicate items from String type array (ignore case sensitivity).
function removeDuplicates(num) {
    var x,
        len=num.length,
        out=[],
        obj={};
   
    for (x=0; x<len; x++) {
      obj[num[x]]=0;
    }
    for (x in obj) {
      out.push(x);
    }
    return out;
  }

//Assignment 2 
//Write a JavaScript function to find the longest common starting substring in an array of strings
function longest_common_starting_substring(arr1){
var arr= arr1.concat().sort(),
a1= arr[0], a2= arr[arr.length-1], L= a1.length, i= 0;
while(i< L && a1.charAt(i)=== a2.charAt(i)) i++;
return a1.substring(0, i);
}
//Assignment 3 
//Write a JavaScript function to get nth largest element from an unsorted array 

function nthlargetst(array,n){
if(array.length==0||n<0||n>array.length){
    return null;
}
array.sort()
return array[array.length-n];
}

//Topic 6 : JavaScript Booleans & Type Of
//Assignment 1 : Write a JavaScript function to check whether the given argument is function 
//or string or object or number by using Type Of operator
function type(val) {
    var type = typeof val;
    if (type === 'object') {
        if (val === null) return 'null';
        if (Array.isArray(val)) return 'array';
    }
    return type;
}

//Assignemt 2 :Write a JavaScript function to check greatest of two numbers by using Boolean() function
function greater(a, b) {
    return Boolean(a > b);
}

//Topic 7 : JavaScript Type Conversion

//Assignment 1: Write a JavaScript function to convert given date to a string object and display.
function dateToString(date) {
    console.log(date.toString());
    return date.toString();
}
//Assignment 2: Write a JavaScript function to convert given number to a string object and display.
function numberToString(num) {
    console.log(num.toString());
    return num.toString();
}
//Topic 8: JavaScript Regular Expressions
//Assignment 1:Write a JavaScript program to search a date within a string using Regular Expression.
function is_dateString(str)
{
 regexp = /^(1[0-2]|0?[1-9])\/(3[01]|[12][0-9]|0?[1-9])\/(?:[0-9]{2})?[0-9]{2}$/;
return regexp.test(str)
         
}
//Assignment 2 : Write a JavaScript function to check whether a given value is a valid url or not.
function isValidURL(string) {
    var res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
    return (res !== null)
  };








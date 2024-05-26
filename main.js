"use strict";
// lowercase //
let message = "nothing is impossible in this world";
console.log("Lowercase:", message.toLowerCase());
// uppercase //
let message2 = "work hard to achieve success";
console.log("Uppercase:", message.toUpperCase());
//  titlecase //
let words = message.split(" ");
let titleCaseName = "";
for (let i = 0; i < words.length; i++) {
    titleCaseName += words[i].charAt(0).toUpperCase()
        + words[i].slice(1).toLowerCase() + " ";
}
console.log("Titlecase:", titleCaseName);
// lowercase,uppercase,titlecase //
let message03 = "i am learning typescript";
console.log("Lowercase:", message03.toLowerCase());
console.log("Uppercase:", message03.toUpperCase());
let words1 = message03.split(" ");
let titleCaseName1 = "";
for (let i = 0; i < words1.length; i++) {
    titleCaseName1 += words1[i].charAt(0).toUpperCase() + words1[i].slice(1).
        toLowerCase() + " ";
}
console.log("Titlecasename:", titleCaseName1);

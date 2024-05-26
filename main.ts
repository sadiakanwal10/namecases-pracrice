// lowercase //

let message:string = "nothing is impossible in this world";
console.log("Lowercase:", message.toLowerCase());

// uppercase //
 
let message2:string = "work hard to achieve success"
console.log("Uppercase:", message.toUpperCase());

//  titlecase //

let words:string[] = message.split(" ")
let titleCaseName:string = ""
 for (let i = 0; i < words.length; i++) {titleCaseName +=words[i].charAt(0).toUpperCase()
    +words[i].slice(1).toLowerCase() + " "}
 console.log("Titlecase:", titleCaseName)

 // lowercase,uppercase,titlecase //
 let message03:string = "i am learning typescript";
 console.log("Lowercase:", message03.toLowerCase());
 console.log("Uppercase:", message03.toUpperCase());

 let words1:string[] = message03.split (" ");
 let titleCaseName1:string = ""
 for (let i = 0; i <words1.length; i++) {titleCaseName1 +=words1[i].charAt(0).toUpperCase() +words1[i].slice(1).
    toLowerCase() + " "} 
console.log("Titlecasename:", titleCaseName1)    

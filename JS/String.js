//String methods and properties

let string = "   My name is Vivek Khamkar.   "

//1. length property

console.log(string.length);

//2. indexOf()

console.log(string.indexOf("Vivek"));

//3. lastIndexOf()

console.log(string.lastIndexOf("i"));

//4.startsWith()

console.log(string.startsWith("Vivek"));

//5.endsWith()

console.log(string.endsWith("."));

//6.match()
console.log(string.match(/\V\i+/g));
console.log(string.match(/\V\i+/));

//7.trim()
console.log(string.trim())

//8.trimStart()

console.log(string.trimStart());

//9.trimEnd()

console.log(string.trimEnd());

//10. padStart()

console.log(string.padStart(30,"0"));

//11. padEnd()

console.log(string.padEnd(30,"0"));

//12.split()

console.log(string.split(" ",10))

//13. subString()

console.log(string.substring(5,10));

//14. slice()

console.log(string.slice(5,-10));

//15.replace()

console.log(string.replace("Vivek", "Rohan"));
//16.replaceAll()
console.log(string.replaceAll(" ",""));


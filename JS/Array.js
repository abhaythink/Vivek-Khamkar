//1.push()

let arr = [1,2,3,4,5];

// arr.push(6);
// console.log(arr);

//2. pop()
// arr.pop();
// console.log(arr);

//3. unshift()

// arr.unshift(0);
// console.log(arr);

//4. shift()

// arr.shift();
// console.log(arr);

//5. length
// console.log(arr.length);

//6. splice()
// arr.splice(2,0,6,7)
// console.log(arr);

//7. find()
// console.log(arr.find((e) => e%2===0))

//8.findIndex()

// console.log(arr.findIndex((e) => e%2===0))

//9. map()

// let arr2 =arr.map((e)=> e%2);
// console.log(arr2);


//10. filter() + forEach() + typeof
arr.push("Vivek");
arr.push("Rohan");
arr.push("Sahil");
// console.log(arr);
// arr.forEach((e)=> {
//     console.log(typeof e === "string");
// })
let arr2 = arr.filter((e)=> (typeof e) === 'string');

// console.log(arr2);

// 11. reduce()
// console.log(arr);

// let value = arr.reduce((acc,crr)=>{
//     return acc+ crr;
// },5)
// console.log(value);

// 12. for of loop on arr

// for(let e of arr){
//     console.log(e+10);
// }

//13. reduceRight()
//   let str = arr2.reduceRight((a,c)=>{
//    return a+c;
//   },"")
// console.log(str);

//14. every()
// console.log(arr.every((e)=> typeof e === 'number'));

//15. some()
// console.log(arr.some((e)=> typeof e === 'string'));

//16. sort()

// console.log(arr.sort());  //sorts in Ascending order

//17. concat()

//i.
// console.log(arr.concat([true,false]));

//ii.  copy in another array
// let arr3 = arr.concat();
// console.log(arr3);

//iii. appending in array
// console.log(arr.concat('Nan','Null'));

//iv. merging multiple arrays
// let array = arr.concat([100,200,300],[1000,2000,3000],['abc','xyz']);
// console.log(array);

//18. spread operator

// let array = [...arr,...arr2];
// console.log(array);

//19. flat()
 //i. without depth
// let a = [1,2,3,4,[5,6,7]];
// console.log(a.flat());

//ii.with depth
// let a = [1,2,3,4,[5,6,7,[8,9,10]]];
// console.log(a.flat(2));

//iii. with depth as infinity-  for unknown depth

//  let a = [1,2,3,4,[5,6,7,[8,9,10]]];
// console.log(a.flat(Infinity));

//20. join()

console.log(arr.join('-'));
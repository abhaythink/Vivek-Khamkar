//1.push()

arr = [1,2,3,4,5];

arr.push(6);
console.log(arr);

//2. pop()
arr.pop();
console.log(arr);

//3. unshift()

arr.unshift(0);
console.log(arr);

//4. shift()

arr.shift();
console.log(arr);

//5. length
console.log(arr.length);

//6. splice()
arr.splice(2,0,6,7)
console.log(arr);

//7. find()
console.log(arr.find((e) => e%2===0))

//8.findIndex()

console.log(arr.findIndex((e) => e%2===0))




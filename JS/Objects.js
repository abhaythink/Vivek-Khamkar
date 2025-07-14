//1.Objects in JS-1

// let obj = {
//     'name': 'Vivek',
//     'age': 21
// }
// console.log(obj.name+" "+obj.age);

//2.Objects in JS with methods

// let obj = {
//     'name': 'Vivek',
//     'age': 21
// }

// obj.getData = function() {
//     console.log(`Name:${obj.name} Age:${obj.age}`);
// }
// obj.getData();

//3.Objects in JS with methods-2
// let obj = {
//     'name': 'Vivek',
//     'age': 21,
//     getData: function() {
//     console.log(`Name:${obj.name} Age:${obj.age}`);
// }
// }
// obj.getData();

//4.Objects in JS with methods-3
// let obj = {
//     'name': 'Vivek',
//     'age': 21,
//     getData: ()=>{
//     console.log(`Name:${obj.name} Age:${obj.age}`);
// }
// }
// obj.getData();

//5.Objects in JS with this and constructor

//  function Obj(name,age){
//     this.name = name;
//     this.age = age;
//  }

//  let obj1 = new Obj('Vivek',21);
//  let obj2 = new Obj('Rohan',20);

// console.log(obj1)
// console.log(obj2);

//6. Objects in JS with this and constructor-2
// function Obj(name,age){
//     this.name = name;
//     this.age = age;

//     this.getData= function(){
//         console.log(this.name+" "+this.age);
//     }
//  }

//  let obj1 = new Obj('Vivek',21);
//  let obj2 = new Obj('Rohan',20);
//  obj1.getData();
//  obj2.getData();

 //7. prototypal inheritance

 let obj = {
    'name': 'Vivek',
    'age': 21,
 }
 let obj2 = Object.create(obj, {
    'name':{value: 'Rohan'},
    'age': {value:20},
    getData: {value:function(){
        console.log(this.name+" "+this.age);
    }}
 })

 console.log(obj);
 obj2.getData();
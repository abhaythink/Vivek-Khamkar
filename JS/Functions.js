// functions are First class citizens

function mul(a,b){
   return a*b;      //function
}

let ans = mul;   // storing function in another variable

function calc(a,b,fun){
    return fun(a,b)/2;   // passing function to another function
}

let result = calc(10,10,ans);  // storing the result in a variable


console.log(result);


// Returning a function

function sum(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function calculate(fun, a,b){
    return fun(a,b);
}

let add = calculate(sum,10,5);

let dec = calculate(sub,10,5);

console.log(add+" "+dec);

// Anonymous function

// setTimeout(function() {
//     console.log('Execute later after 2 second')
// }, 2000);

(function () {
    console.log('Immediately invoked function execution');
})()


//Arrow functions

let ad = (a,d) => {
    console.log(a+d);
}
ad(50+5,50-5);


// Recursive functions: factorial

function fact(n){
   if(n <= 0){
    return 1;
   }else{
    return n * fact(n-1);
   }
}

console.log(fact(5))






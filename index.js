function add(a,b){
    return a+b;
}
console.log(add(5,3));

function subtract(a,b){
    return a-b;
}
console.log(subtract(30,23));

function multiply(a,b){
    return a*b;
}
console.log(multiply(6,9));

function divide(a,b){
    return a/b;
}
console.log(divide(10,2));

function increment(n){
    return n+=1;

}
console.log(increment(4));

function decrement(n){
    return n-=1;
}
console.log(decrement(10));

function makeInt(n){
    return parseInt(n,10);
}
console.log(makeInt("Anything"));

function preserveDecimal(n){
   return parseFloat(n);
}
console.log(preserveDecimal("2.222"));
console.log(preserveDecimal("sldkjflksjf"))

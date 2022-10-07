// function number(first , last) {
//     const result = first + last;
//     console.log(result);
//     if ( result > 9) {
//         console.log('Hello World');
//     }
//     return result;
// }
// const sum = number( 12, 15);



let p='Javascript'; let q=p; p='React'; 
console.log(q); 

const isTrue='false'; 
if(!isTrue){
console.log('hello');
} else {
console.log('world'); }


function sum(p, q) {
    p + q;
   }
   const result = sum(2, 3);
   console.log(result);

   if ("2" === 2) {
    console.log("Inside if");
   } else {
    console.log("Inside else");
   }

   function work(x, y = 4) {
    return x + y;
   }
   console.log(work(32));
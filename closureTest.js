//one way
// var number = 10;

// function increase() {
//   var newFunc = () => {
//     number++;
//   };
//   newFunc();
// }
// increase();
// console.log(number);

//second way
// var num = 10;

// let funct = () => {
//   var num2 = 1;
//   var funct2 = function () {
//     console.log(num + num2);
//   };
//   funct2();
// };
// funct();

// ---break
// Bigger eg :
// var counter = (function () {
//   var privateCounter = 0;
//   function changeBy(val) {
//     privateCounter += val;
//   }
//   return {
//     increment: function () {
//       changeBy(1);
//     },
//     decrement: function () {
//       changeBy(-1);
//     },
//     value: function () {
//       return privateCounter;
//     },
//   };
// })();

// console.log(counter.value());
// counter.increment();
// counter.increment();
// console.log(counter.value());
// counter.decrement();
// console.log(counter.value());

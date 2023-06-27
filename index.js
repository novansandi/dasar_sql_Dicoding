// console.log("Menyalakan mesin kopi");
// console.log("Menggiling biji kopi");
// console.log("Memanaskan air");
// console.log("Mencampurkan air dan kopi");
// console.log("Menuangkan kopi ke dalam gelas");
// console.log("Menuangkan susu ke dalam gelas");
// console.log("Kopi Anda sudah siap!");

//IMPORT & EXPORT
// const coffeeStock = require('./state');
 
// // console.log(coffeeStock);
 
// /* output
// { arabica: 100, robusta: 150, liberica: 200 }
// */

// const makeCoffee = (type, miligrams) => {
//     if (coffeeStock[type] >= miligrams) {
//       console.log("Kopi berhasil dibuat!");
//     } else {
//       console.log("Biji kopi habis!");
//     }
//   }
   
//   makeCoffee("robusta", 80);
   
  /* output
  Kopi berhasil dibuat!
  */

  //EXPORT NILAI
//   const {coffeeStock, isCoffeeMachineReady} = require('./state');
 
// console.log(coffeeStock);
// console.log(isCoffeeMachineReady);
 
// /* output
// { arabica: 100, robusta: 150, liberica: 200 }
// true
// */

//ES6 MODULE
// import coffeeStock from './state.js';
 
// const displayStock = stock => {
//   for (const type in stock) {
//     console.log(type);
//   }
// }
 
// displayStock(coffeeStock);

import { coffeeStock as stock, isCoffeeMachineReady } from './state.js';
 
console.log(stock);
console.log(isCoffeeMachineReady);
 
/* output
{ arabica: 100, robusta: 150, liberica: 200 }
true
*/
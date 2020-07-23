// // Only change code below this line
// const bicycle = {
//     gear: 2,
//     setGear: function(newGear) {
//       this.gear = newGear;
//     }
//   };
//   // Only change code above this line
//   bicycle.setGear(3);
//   console.log(bicycle.gear);
var x = 0;
var startTime = Date.now();
  while(x < 10000000000){
      
    x++;
  }
var endTime = Date.now();
console.log(endTime - startTime);
console.log(startTime);
console.log(endTime);
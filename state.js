//Declare a variable calld "counter" and set it to 0
let counter = 0
//Write a function that increments the variable "counter" by 1 every time it is called
function addToCounter() {
  console.log(counter)
  counter = counter + 1
}
//Schedule the execution og the function every 3 seconds
setInterval(addToCounter, 3000)
//? JAVASCRIPT GLOBAL OBJECT
/**
 * !Defination
 *The global object in Javascript contains variables and functions
 * that are accessible from anywhere.
 * ex -  alert, console.log, localstorage
 *
 * In node js for global objects we have to use
 * global.console.log()
 *
 * for all the browser
 * globalThis.alert("hello I am a global object")
 */

//  ? How to define global property - using var keyword
var fruit = "apple";
// check property assigned to global object || window object
// window.fruit; // this will work in the browser

// create global function
function appleTest() {
  console.log("Global function testing");
}
// window.appleTest(); // this will work in the browser

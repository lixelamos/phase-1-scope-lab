// Declare a variable in global scope called customerName using the var keyword.
var customerName = "bob";

// Write a function that accesses that global customerName variable, and uppercases it.
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;
}

// Write a function that when called, declares a variable called bestCustomer in global scope and assigns it to be 'not bob'.
function setBestCustomer() {
  bestCustomer = "not bob";
}

// See the consequences of declaring a variable in global scope, by writing a new function called overwriteBestCustomer() that changes that bestCustomer variable.
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

// Now declare a constant (using the const keyword) in global scope called leastFavoriteCustomer; be sure to assign it some initial value.
const leastFavoriteCustomer = "Judy";

// Finally, write a function called changeLeastFavoriteCustomer() that attempts to change that constant - notice what JavaScript does when you try to change the constant.
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "Jack"; 
}

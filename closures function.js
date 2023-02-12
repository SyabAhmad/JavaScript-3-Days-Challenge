// A closure is a function that has access to variables in its outer scope, even
//  after the outer function has returned.
//  The inner function has access to the variables and functions of its outer scope,
//   which makes it a closure.

function backFunction(a){
  return funciton frontFunction(y){
    return a+y;
  };
};

var func = new backFunction(3);
console.log(func(3));

//// onother example

function firstFunction(fistName){
  return secondFunction(lastName){
    return firstName +  " " + secondName;
  };
};

var name = new firstFunction("de");
console.log(name("Developer"));

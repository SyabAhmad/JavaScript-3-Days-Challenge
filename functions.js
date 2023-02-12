////functions in javaScript
/// lets create a funciton which will add to numbers
function add(){
    var value1 = 9;
    var value2 = 1;
    
    return value1+value2;
  }
  
  console.log(add());
  
  /// to display with in function
  
  function add(){
    var value1 = 9;
    var value2 = 1;
    console.log(value1+value2);
  }
  add();
  
  // now lets create funstion with arguments
  function addTwoValues(value1, value2){
    return value1+value2;
  }
  console.log(addTwoValues(23,2));
  /// or we can store the value from the funstion by using var
  var dataFromFunction = addTwoValues(23,2);
  /// and the we can display it here,
  console.log(dataFromFunction)
  
  
  //// function scope example
  let aValue = 140;
  function printData(){
    let bValue = 20;
    console.log(aValue);
    console.log(bValue);
  }
  
  console.log(aValue);
  //console.log(bValue);/// this will give you error cos bValue is local
  
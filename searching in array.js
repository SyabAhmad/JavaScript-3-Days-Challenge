  ///// to search index of value
  let array = [1,2,3,4,5];
  var value1 = array.indexOf(2);
  console.log(value1);

  ////uusing include keyword
  var value2 = array.includes(4);
  console.log(value2);
  console.log(array.indexof(value2));

  /// or by using  loops
  var count = -1;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 3)
    count = i;
    break;
  }
  console.log(count);

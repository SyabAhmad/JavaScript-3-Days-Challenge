const values = [1,2,3,4,5,6,6,7,8];
for(var i=0;i<values.length; i++)
{
    console.log(values[i]);
}

///// map method
const values1 = values.map(function(number){
    return number*2;
}) ;
console.log(values1);

//// sort method
const values2 = values.sort(function(a, b){
    return a-b;
});
console.log(values2);

/// redice method in javascript
const values3 = values.reduce(function(a,b){
  return a+b;
},0);
console.log(values3);

/// filter method in JavaScript
const values4 = values.filter(function(a){
  return a%2 == 0;
});
console.log(values4);

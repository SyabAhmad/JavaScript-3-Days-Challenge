const array = [1,2,3,4];
for(var count=0;count<array.length;count++)
{
  console.log(array[count]);
}
console.log("====================");


array.pop();
for(var count=0;count<array.length;count++)
{
  console.log(array[count]);
}
console.log("====================");


array.pop();
for(var count=0;count<array.length;count++)
{
  console.log(array[count]);
}
console.log("====================");

/// using shift methid
array.shift(2, 3);
for(var count=0;count<array.length;count++)
{
  console.log(array[count]);
}
console.log("====================");

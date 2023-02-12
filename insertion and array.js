const values = [1,2,3,4,5,6,7,8];
for(var count=0;count<values.length;count++)
{
  console.log(values[count]);
}
values.push(2);
for(var count=0;count<values.length;count++)
{
  console.log(values[count]);
}
values.unshift(2);
for(var count=0;count<values.length;count++)
{
  console.log(values[count]);
}
values.splice(2,0,4);
for(var count=0;count<values.length;count++)
{
  console.log(values[count]);
}

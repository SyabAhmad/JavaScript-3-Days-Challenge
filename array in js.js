///// arrays
var fruits = ["apple", "mango", "oranges", "banana"];
/// if we are trying to access one of the elements in the array
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
//// if we are tryimng to access the element that is not in our array 
/// then we get error, as it says "*undefined*"
console.log(fruits[4]);

/// to access all the elements in the array it once
/// we use will use Loops

/// using for Loops
for(var count = 0; count<fruits.length;count++)
{
  console.log(count + " | " + fruits[count]);
}

//// in while Loop
var i = 0;
while(i<fruits.lenght)
{
  console.log(i + " |" +fruits[i]);
  i++;
}

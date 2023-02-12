//// conditional statement

var userName = "deDeveloper";
var newUserName = "syab Ahmad";
if (newUserName == userName) {
  console.log("Welcomn " + newUserName)
} else{
  console.log("⚠ you are not the right person");
}

//// loops
for(var count = 0; count<10; count++)
{
  console.log(count + " | JavaScript Development");
}


count = 0
while(count<10)
{
  console.log(count +" | Java Script Development")
  count++;
}

//// switch case in javaScript
var answer = 8;
switch(answer)
{
  case 1:
    console.log("1");
    break;
  case 2: 
    console.log("2");
    break;  
  case 3:
    console.log("3");
    break;
  default:
    console.log("Invalid Argumetns");
    break;
}


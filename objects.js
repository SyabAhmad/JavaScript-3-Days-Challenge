/// now lets talk about objects
var person = {
    firstName: "de",
    lastName: "Developer",
    age: 22,
    eyeColor: "Black",
    skills: " javaScript",
    
    /// you can also use funtions with in objects like this
    
    fullName: function() {
     return this.firstName + " " + this.lastName;
   }
    
  };
  
  /////to display objects you can simply do that by value
  
  console.log(person);
  console.log(person.firstName);
  console.log(person.fullName());
  
  
  /// to add value to person praperties
  console.log(person.age);
  person.age = 32;
  console.log(person.age);
  
  /// to delete key and value of person
  delete person.age;
  
  /// it will now prompt undefined
  console.log(person.age);
  
  
class person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greeting(){
        console.log('hello i am '+this.name +', and i am '+this.age+' years old');
    }
}
var person2 = new person("developer", 23);
var person3 = new person("ahmad", 61);
var person4 = new person("shah", 31);
var person5 = new person("botal", 51);
var person6 = new person("kadu", 11);
console.log(person2);
console.log(person3);
console.log(person4);
console.log(person5);
console.log(person6);

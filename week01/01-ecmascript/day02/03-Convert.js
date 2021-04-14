// return index from value
let arr = [1,2,3,4,5];
console.log(arr.indexOf(5));

// convert array into string
let str = ["java","js","python","golang"];
console.log(str.join(","));
console.log(typeof str);

// convert string to array;
let com = "code.id";
console.log(com.split(""));

//regular function
function passwordForRegular(value){
 return value.split("").reverse("").join("")+value.length;
}
// arrow function;kasus kata code.id => di.edoc8
const passwordFor = value => value.split("").reverse("").join("")+value.length; 

console.log(passwordFor("code.id"));
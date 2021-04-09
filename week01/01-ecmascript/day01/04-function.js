// var x = "string";
// x.prototype.name = "hello";
// console.log(x.prototype.name);
//===============================================


//regular function = function yang sering dipake
function say(){
    return "Hello Gaez";
}

console.log(say());

function sayHi(param) {
    return "Hello Gaez" +param
}

console.log(sayHi("Bootcamp"));

//arrow funtion
const arrow = (param) => {
    return "arrow"+param;
}

console.log("value : " + arrow(true));

//genap ganjil
const gage = (param) =>{
    if(param % 2 === 0) {
        return "genap"
    }else{
        return "ganjil"
    }
}
console.log(gage(3));
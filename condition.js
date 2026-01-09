var read=require("readline-sync")
var value1=read.question("Enter 2 numbers ")
var value2=read.question("")
console.log(value1,value2);
if(value1===value2){
    console.log("equal numbers")
}else if(value1>value2){
      console.log("the largest number is="+value1)
}else{
      console.log("the largest number is="+value2)
}
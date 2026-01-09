// function add (num1,num2,callBack){
//     let err =false;
//     if(num1===0){
//         err=true;
//     }
//     callBack(num1+num2,err)

// }
//  function multiplication(num1,num2,callBack){
//  callBack(num1*num2)   ;
// }
//  function div(num1,num2,callBack){
//  callBack(num1/num2)   ;
// }
// add(22
//     ,3,(sum,err)=>{
//     if(err){
//         console.log("first number is zero")
//     }else{
//         console.log("the sum is",sum);
//         multiplication(sum,2,(product)=>{
//             console.log("the multiplied value is here",product)
//             div(product,2,(sum)=>{
//                 console.log("the divided value is here",sum)
//             })
//         })
//     }
// });

function add(num1, num2) {
    return new Promise((resolve, reject) => {
        resolve(num1 + num2);
    });
}
function multple(num1, num2) {
    return new Promise((resolve, reject) => {
        resolve(num1 * num2);
    });
}
add(10, 20).then((sum) => {
    console.log("the sum is", sum);
    return multple(sum)
}).catch((e)=>{
    console.log("the error is here",e)
});
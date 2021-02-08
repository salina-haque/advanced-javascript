// function sum(firstNum, secondNum){
//     const result = firstNum + secondNum;
//     return result;
// }
// //local scope: vitore variable bahire access korte parba na
// // console.log(result)
// const output = sum(3,7);
// console.log(output);
let bonus = 20;
function sum(firstNum, secondNum){
    const result = firstNum + secondNum + bonus;
    // if(result>9){
    //     const mood = "happy";
    //     console.log(mood);
    // }
    if(result>9){
        var mood = "happy";  //var does hoisting
        console.log(mood);
    }
    console.log(day);
    var day="friday";
    console.log(mood);
    return result;
}
// console.log(bonus); //global scope
 const output = sum(3,7);
// console.log(output);
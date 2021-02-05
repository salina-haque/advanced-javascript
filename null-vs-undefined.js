let bird;
console.log(bird); // bird is not defined
function add(num1, num2){
    console.log(num1 + num2);
    return   // undefined as nothing is returnd
}

function add(num1, num2){
    console.log(num1 , num2);
    return   // undefined as nothing is returnd
}
const result1 = add(2,3); // result is undefined as nothing is returned from function
const result2 = add(2); // here num2 is defined since num2 is not passed
console.log(result1);
console.log(result2);
const premik = {name:"smart dude", phone:"0126435634"};
console.log(premik.gf);// gf property is not defined in premik object


let fun = undefined;
console.log(fun); // since value is set as undefined, but not recommended

let ages = [2, 5,9];
console.log(ages[11]); //11th index is not there

//undefined is a type where you declared a variable but not defined it yet.
//null means explicitly nothing. you can assign null to a variable. null is a object
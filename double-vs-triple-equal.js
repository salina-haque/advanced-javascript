const first = 2;
const second = "2";
// if(first == second) true does not check type only checks value
if(first === second){ // checks both value and type 
    console.log('condition is true');
}
else{
    console.log('condition is false');
}
// const third = 2;
// const fourth = true; // false 
const third = 1;
const fourth = true;  // true means 1 so condition is true again false means 0
// if(first == second) true does not check type only checks value
if(third === fourth){ // checks both value and type 
    console.log('condition is true');
}
else{
    console.log('condition is false');
}
//The difference between == and === is that: == converts the variable values to the same type before performing comparison. This is called type coercion. === does not do any type conversion (coercion) and returns true only if both values and types are identical for the two variables being compared.
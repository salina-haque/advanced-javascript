//Falsy
//0
//""
//undefined
//null
//NaN
//name=false
//Truthy
//'0',' ', [], {}
//all strings except empty string
//all numbers except 0
// let name = 0;
let name = 12;
if(name || name == 0){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}
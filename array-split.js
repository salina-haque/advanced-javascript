const nums = [1,2,3,4,5,6,7,8];
const part = nums.slice(2,5);

//const removed = nums.splice(2, 3); //2 teke suru kore 3ta element delete koro and arry change hoye jay

const removed = nums.splice(2, 3, 77);//je index e shuru sekane arekta element add kore dea jay
console.log(removed);
// console.log(part); //no change in nums array

const together = nums.join(",");
console.log(together);
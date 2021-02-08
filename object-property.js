const students = [
    { id: 21, name: 'Omar Sunny'},
    { id: 31, name: 'Manna'},
    { id: 41, name: 'Mayuri'},
    { id: 71, name: 'Dipjol'}
]

// const output =[];
// for(let i=0; i<students.length; i++){
//     const element = students[i];
//     const result = element.name;
//     output.push(result);
// }
// console.log(output);
const name = students.map(s => s.name);
console.log(name);
const ids = students.map(i => i.id);
console.log(ids);
const bigger = students.filter(s => s.id > 40);
console.log(bigger);
const bigger1 = students.find(s => s.id > 40);
console.log(bigger1);
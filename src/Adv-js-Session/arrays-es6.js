const student=['Amir','Zia', 'Adeel','Hassan'];  

// for(var i =0;i<student.length;i++){
// console.log(`My student name is : ${student[i]}`);

// }

/////ES6////
// const newArr = evenNum.map(item =>  item*2);
 
const evenNum = [2,4,6,8,10,12]
const newArr = evenNum.filter(item =>  {
let temp =item*2;
temp = temp+2;
  return  temp 
}
);

console.log(newArr);
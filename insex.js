// forEach Loop
let arr = ["Sam", "Anas", "Zain", "Sufyan"];

let data = [
    {name: "Anas", age: 11, proff: "Engineer"},
    {name: "Sufyan", age: 11, proff: "Engineer"},
    {name: "Sam", age: 11, proff: "Engineer"},
    {name: "Zain", age: 11, proff: "Engineer"},
    {name: "Rohan", age: 11, proff: "Engineer"},
    {name: "Aman", age: 11, proff: "Engineer"},
];

// forEach loop
// arr.forEach((curValue, index, array) => {
//     console.log(curValue);
//     console.log(curValue + "s");
// });
// ผลลัพธ์ จะได้ข้อมมูลใน Array : Sam/ Anas/ Zain/ Sufyan
// ผลลัพธ์ จะได้ข้อมมูลใน Array ที่เติมด้วยตัว s : Sams/ Anass/ Zains/ Sufyans/

data.forEach((curValue, index, array) => {
    // console.log(curValue);
    // console.log(curValue.name + "s");
    // console.log("Mr." + curValue.name);
    curValue.name = "Mr." + curValue.name;
});
console.log(data);
// ผลลัพธ์ จะได้ข้อมมูลใน Array แยกเป็น Object แต่ละ Object
// ผลลัพธ์ จะได้ชื่อที่เติมด้วยตัว s name : Anass/ Sufyans/ Sams/ Zains/ Rohans/ Amans
// ผลลัพธ์ จะได้ชื่อที่เติมด้วย Mr. name : Mr.Anas/ Mr.Sufyan/ Mr.Sam/ Mr.Zain/ Mr.Rohan/ Mr.Aman

// ผลลัพธ์ ใน Object ทุก ตัว จะได้ชื่อที่ Update เติมด้วย Mr.
    // {name: 'Mr.Anas', age: 11, proff: 'Engineer'}
    // {name: 'Mr.Sufyan', age: 11, proff: 'Engineer'}
    // {name: 'Mr.Sam', age: 11, proff: 'Engineer'}
    // {name: 'Mr.Zain', age: 11, proff: 'Engineer'}
    // {name: 'Mr.Rohan', age: 11, proff: 'Engineer'}
    // {name: 'Mr.Aman', age: 11, proff: 'Engineer'}


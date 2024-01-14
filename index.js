// // 1-misol

// let arr=[2, 3];//3, 2

// let [a, b] = arr;
// let rever=[b, a];
// console.log(rever);


// 2-misol 

//    let mass=[1, 2, 3, 4, 5, 6];  // [3, 4]

//  function arrDestruct(arg) {
//     let middleIndex=Math.trunc(arg.length/2);

//     if (arg.length%2===0) {
//         const [middleElement1, middleElement2] = arg.slice(middleIndex-1, middleIndex+1);
//         return [middleElement1, middleElement2];
//     } else {
//         const [middle] = arg.slice(middleIndex, middleIndex+1);
//         return [middle];
//     }
 
//  };

//  console.log(arrDestruct(mass));


// 3-misol

// let arr=[1, 2, 3, 4, 5]; // [1, 2] [3, 4, 5]

// const [a, b, ...c] = arr;
// let birinchiGuruh=[a, b];
// let qolganGuruh=c;

// console.log("Birinchi guruh:", birinchiGuruh);
// console.log("Qolgan guruh:", qolganGuruh);


// 4-misol

// let user = {
//     person: {
//         name:'John',
//         age: 30
//     },
//     height: 170,
//     weight: 70,
//     adress: "Uzbekistan"
// };

// let {person} = user;

// console.log(person);


// 5-misol 

// let users = {
//     person: {
//         name:'John',
//         age: 30
//     },
//     height: 170,
//     weight: 70,
//     adress: "Uzbekistan"
// };

// let {age=42, person2={name:"Alex", age:12}} = users;


// console.log(person2);


// 6-misol 
// let user = {
//         name:"John",
//         lastname:"Doe",
//         height: 170,
//         weight: 70,
//         adress: "Uzbekistan"
//     };

//     let {name, lastname, height, weight, adress} = user;

//     let arr = [name, lastname, height, weight, adress];

//     console.log(arr);


// 7-misol 

let object={x:10, y:20};

function function1({x, y}) {
    console.log(`Funksiya1: x=${x}, y=${y}`);
};

function function2({x, y}) {
    console.log(`Funksiya2: x=${x}, y=${y}`);
};

function mainFunction(object) {
    function1(object);
    function2(object);
};

mainFunction(object);



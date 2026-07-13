// let x=5;
// let y="5";
// console.log(x==y);
// let numbers=[1,2,3,4,5];
// for(let i=0;i<numbers.length;i++){
//    //  console.log(numbers[i]);
// }

// class Customer{

//     name;
//     age;
//     salary;

//     constructor(name,age, salary){
//         this.name=name;
//         this.age=age;
//         this.salary=salary;
//     }

// }
// let customer1=new Customer("pramod",23,55451);
// //
// //console.log(customer1);

// let customer2={
//     name: "pramodlakmuthu",
//      age: 24,
//     address: "NO:338/B imbulahena",
//     uni: "GWU",
//     items:[
//         {
//             id:1,
//             name:"variant1",
//             price:10
//         },
//         {
//            id:2,
//             name:"variant2",
//             price:20 
//         },
//          {
//            id:3,
//             name:"variant3",
//             price:30 
//         }
//     ],
//     father:{
//         name:"ananda",
//         age:65,
//         address:"abc street"
//     }
// }
// console.log(customer2.uni);
// console.log(customer2.items);
// console.log(customer2.items[1]);
// console.log(customer2.father.name,);
// console.log(customer2.items[1].price);



//*********************************************************************************************************

// console.log(document.title);
// console.log(document.activeElement)
// let heading=document.getElementById("myname");
// // myname.innerText="U.P.L. Perera";
// // console.log(heading);
// let number=0;

// function changeHeading(){
//     myname.innerText="johne mice"+number++;
    
// }
// let count=document.getElementById("counterId");
// let number=0;
// function countIncreament(){
//     count.innerText="counter: "+number++;

// }
// function countDecrement(){
//     count.innerText="counter: "+number--;

// }

// function changeHeading(){
//     let txtvlaue=document.getElementById("headingInput");
//     console.log(txtvlaue.value);
//     let heading=document.getElementById("headdingtxt");
//     heading.innerText=txtvlaue.value;
// }
function add(){
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let result=Number(num1)+Number(num2);
    console.log(result);
    let output=document.getElementById("result");
    output.innerText="Output: "+result;
    
}
function sub(){
    let num1=document.getElementById("num1").value;
    let num2=document.getElementById("num2").value;
    let result=Number(num1)-Number(num2) ;
    console.log(result);
    let output=document.getElementById("result");
    output.innerText="Output: "+result;
}
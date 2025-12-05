
//no argument no return type
function display(){
    console.log("Hello World");
}
display()
console.log("see you soon with an arrear in maths");

//with argument with return type

function add(a,b){
    console.log("hello");
    let C = a+b;
    return C;
}
let result = add(5,10);
console.log(result);

//with argument no return type
function subtract(a,b){
    let c=a-b;
    console.log("hello");
    
}
subtract(10,5);
console.log("see you soon with an arrear in DAA");

//no argument with return type
function dharaneesh(){
    console.log("hello");
    return 10;
}
let ans = dharaneesh();
console.log("the answer value is "+ans)

//arrow function
const car=()=>{console.log("dharaneesh")}
car();
console.log("see you soon with an arrear in OS");

//arrow function with argument
const bike=(a,b)=>{
    return a+b;
}
let res = bike(20,30);
console.log("the result is "+res);

//arrow function with argument and no return type
const tree=( )=> 10 
  let geep=tree()
 console.log("see u" +" " + geep);

//array
a=[10,20,30,40,50];
const c=a.map((d)=>{return d*2})
console.log(c);

//filter
const f=a.filter((d)=> d>20)
console.log(f);

//string array
arr=["apple","banana","grape","orange"];
console.log(arr);

//array find method
let nums = [10, 2, 30,900];
 
 let laptop=nums.find((a)=>{
return a>20;
 })
 console.log(laptop)

 //object
 let person={
    name :"demo",department:"it",contact_no:1234567890,gender:"male"

 }
 console.log(person.name);
 console.log(person['department']);

 
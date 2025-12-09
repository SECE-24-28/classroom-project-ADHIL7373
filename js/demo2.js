//setTimeout function
function display()
{
    console.log("hi there");
    setTimeout(()=>{
        console.log("adhil")
    },4000)
}
display();
console.log("bye bye");

//method recieving another method as argument also called as call back method
function add(show){
istrue=true;
if(istrue)
{
    display("dharaneesh");
}
}
console.log("see you soon with an arrear in CN");
add(display);
function display (name)
{
    console.log("hello "+name);
}

//promise
let mypromise = new Promise((win,lose)=>{
    let dara=true;
    if(dara){
        win();
    }
    else{
        lose();
    }
})
mypromise.then(win)
.catch(lose);

function win(){
    console.log("you win")
}
function lose(){
    console.log("you lose")
}

//promise another type
let promise = new Promise((resolve,reject)=>{
    let dara=true;
    if(dara){
        resolve();
    }
    else{
        reject();
    }
})
myPromise.then((data)=>{ console.log("done!....................",data)})
  .catch(()=>{console.log("not done")} )

//using promise inside a method
function display(){
return new Promise((resolve,reject)=>{
    let isTrue=true
    if(isTrue)
    {
      resolve(1000)
    }
    else 
      reject("bye")
  })
  }
async function show(){
     try{
      var res= await  display()
      console.log(res)
     }
     catch(Exception){
      console.log("the pb",Exception)
     }    
}
show()







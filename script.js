/*
var css = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.getElementById("gradient");

function setGradient() {
    body.style.background =
        "linear-gradient(to right, "
        + color1.value
        + ", "
        + color2.value
        + ")";

    css.textContent = body.style.background + ";";
}
*/
/*

var fun=5;

function funFunction() {
  var fun="Beautiful ass girl";
  console.log(fun);
}


function funnerFunction() {
    var fun="Beautiful boobs girl";
    console.log(fun);
}


function funnestFunction() {
    fun="Beautiful girl";
    console.log(fun);
}

console.log(fun);
*/
/*

const arry=[1,2,3,4,5,6,7,8,9,0];

const emp=[];

const list=arry.forEach((i)=>{
       emp.push(i*5);
});

console.log("foreach:"+emp);



const newBAb=arry.map(num => num*4);

console.log("map:"+newBAb);


const filterArr=arry.filter(num => num > 5);
console.log("filter:"+filterArr);


const reduceArray=arry.reduce((accumulator,num)=>{
    return accumulator+num;
},5);

console.log("reduceArray:"+reduceArray);

*/

/*

class Player {
    constructor(name,team) {
        this.name=name;
        this.team=team;
    }

    introduce(){
       return  `Hi iam ${this.name}, and  im select ${this.team} team`;
    }
}

class King extends Player {

    constructor(name,team) {
        super(name,team);
        console.log(this);
    }

    play(){
      return`My team is${this.team}`;
   }
}

const wizard1=new King("geenath","csk");
const wizard2=new King("nath","ck");


*/
/*

const obj={ a:"a", b:"b", c:"c", d:"d" };

const oho=Object.assign({},obj);

obj.c="milf";


console.log(obj);
console.log(oho);



const iHaveNow={
    university:"ucsc",
    girlfriend:"Big ass sexy girl",
    money:"im now rich men",
    talent:{
        sex:"i can now fuck 1 hour!!!"
    }
}

const clone={...iHaveNow};
iHaveNow.university="MoratuwaIT"

console.log(clone);
console.log(iHaveNow);


const superClone=JSON.parse(JSON.stringify(iHaveNow));


iHaveNow.talent.sex="hahaha";

console.log(superClone);
*/
/*
const greet=["a","b","c","d","e","f"];

console.log(greet.includes("a"));*/

/*

const square=(x) => x**4;
console.log(square(2));


const cube=(y) => y**4;
console.log(cube(3));
*/
/*

const basket=["apple","coconut","grapes","jack","fruit"];

const detailBasket={
    apple:5,
    coconut:10,
    grapes:15,
    jack:20,
    fruit:100
}

let i=0;

for(item of basket){
    console.log(item);
}

for(item in basket){
    console.log(item);
}
*/


const flatend=[[0,1],[1,2],[3,4],[5,6],[7,8]].reduce(
    (accumulator,array)=>{
      console.log("accumulator",accumulator);
      console.log("array",array);
      debugger;
      return [].concat([0,1]);
    },[]
);
























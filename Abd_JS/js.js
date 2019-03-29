


let firstInput=document.querySelector('#num1');
let secondInput=document.querySelector('#num2');


getRandom=()=>{
  return Math.floor(Math.random()*10)+1;
}

let randomNumber=getRandom();
document.write(randomNumber);

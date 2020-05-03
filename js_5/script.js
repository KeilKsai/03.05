let h1=document.querySelector('h1');
console.log(h1);
let p1=document.querySelector('p');
console.log(p1);
let text1=document.querySelector('.text1');
console.log(text1);
let text2=document.querySelector('.text2');
console.log(text2);
let num=document.querySelector('.num');
console.log(num);
let a=document.querySelector('a');
console.log(a);
let div=document.querySelector('div');
console.log(div);
let img1=document.querySelector('.img1');
console.log(img1);
let img2=document.querySelector('.img2');
console.log(img2);
let button1=document.querySelector('#start1');
let button2=document.querySelector('#start2');
let button3=document.querySelector('#start3');
let button4=document.querySelector('#start4');
let button5=document.querySelector('#start5');
let button6=document.querySelector('#cancel');
console.log(button1);
console.log(button2);
console.log(button3);
console.log(button4);
console.log(button5);
let input1=document.querySelector('#i1');
let input2=document.querySelector('#i2');
let input3=document.querySelector('#i3');
console.log(input1);
console.log(input2);
console.log(input3);
console.log(img1.scr);
console.log(input1.value);
div.innerHTML='<h2> поменяли </h2>';
h1.innerHTML='текст';

button1.addEventListener('cick', function(){h1.innerHTML='я гений!';})
button2.addEventListener('cick', function(){let a1=input1.value;let b1=input2.value;input3.value=a1+b1;})
button6.addEventListener('click',function(){input1.value='';input2.value='';input3.value='';})



button4.addEventListener('click',function(){
let ass=img1.src;
text1.innerHTML=ass;
})

let as1=img1.src;
let as2=img1.src; 
button3.addEventListener('click',function(){
img1.src=as2;
img2.src=as1;

})

let darin=img1.width;
button4.addEventListener('click',function(){
let go=img1.width*2;
img1.width=go;
})
b
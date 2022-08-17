'user strict'

//1. object window and variables
// should be run in chrome console

let a = 5;
alert(window.a); 

window.b = 25;
alert(b);

let i;
{i = 13;}
alert(i);

t = 17;
{let t}
alert(t);

let u =10;
for(u = 0; u < 15; u++){
console.log(u);
}

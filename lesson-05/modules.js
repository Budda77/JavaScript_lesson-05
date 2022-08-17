'user strict'
let a = 10;

(function(){
	
	let a =12;
	function showMessage(){
		console.log(a)
	}
	
	showMessage();
})();


console.log(a);
console.log('---------------------');

let t = (function(){
	let a =25;
	return{	
		showMessage: 	function(){
			console.log(a)
		}
	}
})();

t.showMessage();


'user strict'

// 1.
function makeBuffer(){
	let stringVault = '';
	
	return {
		add(value){
			stringVault =stringVault + ' '+ value;
		},
		print(){
			return stringVault;
		},
		clear(){
			return stringVault = '';
		}
	}
}

let buffer = makeBuffer();

buffer.add('JavaScript');
buffer.add('must');
buffer.add('be studied!');
console.log(buffer.print());
buffer.clear();
console.log(buffer.print());

console.log('---------------->');

let buffer1 = makeBuffer();
buffer1.add(0);
buffer1.add(1);
buffer1.add(0);
console.log(buffer1.print());

console.log('---------------->');

buffer.add('Test');
buffer.add('do not eat You.');
console.log(buffer.print());
buffer.clear();
console.log(buffer.print());
console.log('---------------->');


// 2.

function makeBufferWithFunction(){
	let stringVault = '';

	function print(){
		return stringVault;
	}

	print.add = function(value){
	stringVault =stringVault + ' '+ value;
	}
	
	print.clear = function(){
		stringVault = ''
	}
	return print;
}

let buffer2 = makeBufferWithFunction();
console.log(buffer2());

buffer2.add('Hi,');
buffer2.add('World');
buffer2.add('of JavaScript.');
console.log(buffer2());

buffer2.clear();
console.log(buffer2());
console.log('---------------->');













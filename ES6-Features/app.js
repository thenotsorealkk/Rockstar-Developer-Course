var PI = 3.14;

// const x = 0; 
// var x = 0; //function block
// let x = 0; //Code block

var arr1 = ['aaa1', 'bbb1', 'ccc1'];
var arr2 = ['aaa2', 'bbb2', 'ccc2'];

var arr3 = [...arr1, ...arr2];

var arr4 = [...arr1, 'ddd'];
console.log(arr3);
console.log(arr4);

// function add (a,b){return a+b;}

var add = (a, b) => a+b; 
// arrow function so yin function keyword phyoke tal
// line 1 line htel so yin return keyword m lo tok wo auto return pal
// {} ahtel mhr multiple line yay mal so yin return keyword thone ya mal :D


// function area (r){return PI * r * r;}
var area = r => PI * r * r;

// argument 1 lone htel so yin () m pr yin tg ya dal :O
module.exports = {
	PI,
	area,
}


function multiply (a, b=6){
	return a*b;
}
console.log (multiply (2));


var name = "Bob";
var age = 22;

console.log (`WELCOME ${name}. Your age is ${age}.`);


class Animal{
	constructor(legs, wings){
		this.legs = legs;
		this.wings = wings;
	}
	walk(){
		return "Walking!";
	}

}

class Dog extends Animal{
	
}

var dog = new Animal (2, 0);
console.log (dog.walk());


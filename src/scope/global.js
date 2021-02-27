// Variable con el scope global se puede usar en cualquier lugar del codigo
var hello = "hello";
let world = "hello world";
const helloWorld = "Hello World!";

const anotherFuncion = () => {
	console.log(hello);
	console.log(world);
	console.log(helloWorld);
};

anotherFuncion();

const helloWorld = () => {
	const hello = "hello world";
	console.log(hello);
};

helloWorld();
console.log(hello);

var scope = "i am global";

const functionScope = () => {
	var scope = " i´m just a local";
	const func = () => {
		return scope;
	};
	console.log(func());
};

functionScope();

var i, arguments, sum=0;

arguments = process.argv;

for (i=2; i < arguments.length; i++) {
	sum = sum + Number(arguments[i]);
};

console.log(sum);

// Он же чейнинг
class Sum {

	constructor(initialValue = 0){
		this.sum = initialValue;
	}

	add(value){
		this.sum += value;
		return this;
	}

};

const sum = new Sum;

console.log('Pattern chaining', sum.add(33));
console.log('Pattern chaining', sum.add(2));

console.log('Pattern chaining', sum.add(40).add(25).add(1));
const car = {
	wheels: 4,
	init(){
		console.log(`I have a ${this.wheels} and my owner ${this.name}`);
	}
};

const Obj = Object.create(car, {
	name: {
		value: 'Sergey'
	}
});

Obj.init();

console.log('Prototype', Obj.__proto__);
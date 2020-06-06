// Суть паттерна эффективная работа с передачей данных 
// у разных типов объектов(кэширование, сохранение памяти и прочее)
function Car(model, price) {
	this.model = model;
	this.price = price;
};

class CarFactory {

	constructor(){
		this.cars = [];
	}

	create(model, price){
		const candidate = this.getCar(model);
		if(candidate) return candidate;
		const newCar = new Car(model, price);
		this.cars.push(newCar);
		return newCar;
	}

	getCar(model){
		return this.cars.find(car => car.model === model);
	}

}

const factory = new CarFactory;

factory.create('BMW', '200 000 000');
factory.create('BMW', '300 000 000');
factory.create('Mazda', '9 000 000');

console.log('Pattern flyweight', factory.getCar('BMW'));
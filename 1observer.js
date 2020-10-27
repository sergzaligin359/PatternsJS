// Один ко многим, обновления для подписантов
class Subject {

	constructor(){
		this.observers = [];
	}

	subscribe(observer){
		this.observers.push(observer);
	}

	unsubscribe(observer){
		this.observers = this.observers.filter(item => item !== observer);
	}

	fire(action){
		this.observers.forEach(observer => {
			observer.update(action);
		});
	}
};

class Observer {
	constructor(state){
		this.state = state;
		this.initialState = state;
	}

	update(action){
		switch (action.type) {
			case 'INCREMENT':
				this.state = ++this.state;
				break;
			case 'DECREMENT':
				this.state = --this.state;
				break;
			default:
				this.state = this.initialState;
		}
	}
}

const stream$ = new Subject;

const obs1 = new Observer(1);
const obs2 = new Observer(10);
const obs3 = new Observer(100);
const obs4 = new Observer(1000);

stream$.subscribe(obs1);
stream$.subscribe(obs3);
stream$.subscribe(obs4);

stream$.fire({type: 'INCREMENT'});

console.log('Observer pattern obs1', obs1);
console.log('Observer pattern obs2', obs2);
console.log('Observer pattern obs3', obs3);
console.log('Observer pattern obs4', obs4);
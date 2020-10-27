class Subject {
    constructor(){
        this.observers = []
    }

    subscribe(observer){
        this.observers.push(observer)
    }

    unsubscribe(observer){
        this.observers = this.observers.filter(obs => obs !== observer)
    }

    emit(action){
        this.observers.forEach(observer => {
            observer.update(action)
        })
    }
}

class Observer{
    constructor(state){
        this.state = state;
        this.initialState = state || 1;
    }

    update(action){
        switch (action.type) {
            case "INCREMENT":
                this.state = ++this.state;
                break;
            case "DECREMENT":
                this.state = --this.state;
                break;
            default:
                return this.state;
        }
    }
}

const stream$ = new Subject();

const obs1 = new Observer(1);
const obs2 = new Observer(10);
const obs3 = new Observer(100);

stream$.subscribe(obs1);
stream$.subscribe(obs3);

stream$.emit({ type: "INCREMENT" });

console.log('obs1', obs1);
console.log('obs2', obs2);
console.log('obs3', obs3);
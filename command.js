// Чтото типа редакс
class MyMath {

	constructor(initialValue = 1){
		this.num = initialValue;
	}

	square(){
		return this.num ** 2;
	}

	cube(){
		return this.num ** 3;
	}
};

class Command{
	constructor(subject){
		this.subject = subject;
		this.commandsExecuted = [];
	}
	execute(command){
		this.commandsExecuted.push(command);
		return this.subject[command]();
	}
}

const x = new Command(new MyMath(2));

console.log('Command pattern', x.execute('square'));
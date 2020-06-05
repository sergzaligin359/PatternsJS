class Database {
	constructor(data){
		if(Database.exist) return Database.instance;
		Database.instance = this;
		Database.exist = true;
		this.data = data;
	}
	getData(){
		return this.data;
	}
}

const mysql = new Database('mySql');
const mongodb = new Database('mySql');

console.log('MySql', mysql.getData());
console.log('mongodb', mongodb.getData());
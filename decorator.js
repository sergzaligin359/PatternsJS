// Суть паттерна добавление нового функционала для существующих классов
// Принимает инстанс и возвращает инстанс
class Server {

	constructor(ip, port){
		this.ip = ip;
		this.port = port;
	}

	get url(){
		return `https://${this.ip}:${this.port}`;
	}

};

const aws = server => {
	server.isAWS = true;
	server.awsInfo = () => {
		return server.url;
	};
	return server;
};

const s1 = new Server('192.148.17.12', '3000');

aws(s1);

console.log('Pattern decorator', s1);
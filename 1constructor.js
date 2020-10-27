// Суть паттерна в создании обьектов определенного типа
function Server(name, ip) {
	this.name = name;
	this.ip = ip;
};

Server.prototype.getUrl = () => {
	return `https://${this.ip}:80`;
};

const aws = new Server('Russia', '192.148.17.12');
const aws2 = new Server('Russia', '192.148.17.12');

console.log('Pattern constructor', aws.getUrl());

console.log('Pattern constructor', Object.getOwnProperty(aws));
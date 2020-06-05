function Server(name, ip) {
	this.name = name;
	this.ip = ip;
};

Server.prototype.getUrl = function() {
	return `https://${this.ip}:80`;
};

const aws = new Server('Russia', '192.148.17.12');

console.log('Pattern constructor', aws.getUrl());
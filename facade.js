// Суть паттерна более простой и уникальный интерфейс по взаимодействию с классами
class Complaints {

	constructor(){
		this.complaints = [];
	}

	reply(complaint){}

	add(complaint){
		this.complaints.push(complaint);
		return this.reply(complaint);
	}
};

class ProductComplaints extends Complaints{
	reply({id, customer, details}){
		return `Product: ${id}: ${customer}: ${details}:`;
	}
}

class ServiceComplaints extends Complaints{
	reply({id, customer, details}){
		return `Service: ${id}: ${customer}: ${details}:`;
	}
}

class ComplaintRegistry{
	registration(customer, type, details){
		const id = Date.now();
		let complaint;

		if(type === 'service'){
			complaint = new ServiceComplaints;
		}else{
			complaint = new ProductComplaints;
		}
		return complaint.add({id, customer, details});
	}
}

const registr = new ComplaintRegistry;

console.log('Pattern facade', registr.registration('Sergey', 'product', 'empty product'));
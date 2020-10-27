// Суть паттерна обьединить в один класс создание однотипных инстансов
class SimpleMembership {
	constructor(name) {
		this.name = name;
		this.cost = 50;
	};
};

class StandartMembership {
	constructor(name) {
		this.name = name;
		this.cost = 50;
	};
};

class PremiumMembership {
	constructor(name) {
		this.name = name;
		this.cost = 50;
	};
};

class MemberFactory {
	static list = {
		simple: SimpleMembership,
		standart: StandartMembership,
		premium: PremiumMembership
	};

	create(name, type='simple'){
		const Membership = MemberFactory.list[type] || MemberFactory.list['simple'];
		return new Membership(name);
	}
};
const factory = new MemberFactory;
const membership = factory.create('VIP', 'premium');
console.log('Instance', membership instanceof Object, membership);
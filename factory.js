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
	}

	create(){
		
	}
}

const fac = new MemberFactory;

const dd = fac.create('Myyy', 'standart');

console.log('Factory', dd);

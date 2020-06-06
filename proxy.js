// Суть паттерна ставить ловушки на поля объекта и функций, 
// возможно для уменьшения запросов на сервер
// Proxy - выданный по доверенности
function networkFetch(url) {
	return `${url} - Response server`;
};

// Set() структура данных в которую записываются данные без повторений
const cache = new Set();

/*
* 2 params obj config
*/
const proxiedFetch = new Proxy(networkFetch, {
	apply(target, thisArgument, argumentsList){
		const url = argumentsList[0]; // param url from networkFetch
		if(cache.has(url)) return `${url} - Response cache`;
		cache.add(url);
		return Reflect.apply(target, thisArgument, argumentsList);
	}
});

console.log('Pattern proxy', proxiedFetch('https://localhost:80'));
console.log('Pattern proxy', proxiedFetch('https://localhost:80'));
console.log('Pattern proxy', proxiedFetch('https://localhost:3000'));
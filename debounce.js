const debounce = (fn, ms) => {
	let timeout

	return function() {

		clearTimeout(timeout)

		timeout = setTimeout(() => fn.apply(this, arguments), ms);

	}
}

const onChange = e => {
	console.log('Server send data', e.target.value)
}

document.getElementById('search').addEventListener('keyup', debounce(onChange, 2000))























































// const debounce = (fn, ms) => {
// 	let timeout
	
// 	return function() {
// 		const fnCall = () => fn.apply(this, arguments)

// 		clearTimeout(timeout)

// 		timeout = setTimeout(fnCall, ms)
// 	}
// }
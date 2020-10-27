const debounce = (fn, delay) => {
	let timer
	return function(){
		clearInterval(timer)
		timer = setTimeout(() => fn.apply(this, arguments), delay)
	}
}

const onChange = e => {
	console.log('Server send data', e.target.value)
}

document.getElementById('search').addEventListener('keyup', debounce(onChange, 1000))























































// const debounce = (fn, ms) => {
// 	let timeout

// 	return function() {

// 		clearTimeout(timeout)

// 		timeout = setTimeout(() => fn.apply(this, arguments), ms);

// 	}
// }
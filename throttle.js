const throttle = (fn, ms) => {
	let isThrottle = false,
	saveArgs,
	saveThis

	return function wrapper () {
		if(isThrottle) {
			saveArgs = arguments
			saveThis = this
			return
		}

		fn.apply(this, arguments)

		isThrottle = true

		setTimeout(() => {
			isThrottle = false
			if(saveArgs){
				wrapper.apply(saveThis, saveArgs)
				saveArgs = saveThis = null
			}
		}, ms)
	}

}

const onMouseover = e => {
	console.log('Data', e.clientX)
}

document.addEventListener('mousemove', throttle(onMouseover, 2000))
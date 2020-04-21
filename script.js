function insert(num) {
	document.getElementById('exp').value += num
}

function back() {
	var exp = document.getElementById('exp').value
	document.getElementById('exp').value = exp.slice(0, exp.length - 1)
}

function clean() {
	document.getElementById('exp').value = "";
}

function calculate() {
	exp = document.getElementById('exp').value
	try {
		document.getElementById('exp').value = eval(exp)
	} catch(exc) {
		if(exc instanceof SyntaxError) {
			document.getElementById('exp').value = ""
		}
	}
}
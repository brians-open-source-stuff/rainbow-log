let colors = require("./colors")

function arrayIterator(symbol, index) {
	if (symbol == " ") {
		return " "
	}
	return `${colors[index % colors.length]}${symbol}\x1b[0m`
}

module.exports = function(message) {
	let symbols = message.split("")
	console.log(symbols.map(arrayIterator).join(""))
}

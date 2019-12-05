let rainbow = require("../index")

describe("The function rainbow-log", function() {
	test("should return undefined", function() {
		expect(rainbow("Hello, World!")).toBeUndefined()
	})
})
const employee = require("../lib/Employee")

test('Is it a object', () => {
    const x = new employee();
    expect(typeof(x)).tobe('object')
})
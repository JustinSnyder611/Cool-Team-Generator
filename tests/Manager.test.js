const manager = require("../lib/Manager")

test('Is it a object', () => {
    const x = new manager();
    expect(typeof(x)).tobe('object')
})
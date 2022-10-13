const Intern = require("../lib/Intern")

test('Is it a object', () => {
    const x = new Intern();
    expect(typeof(x)).tobe('object')
})
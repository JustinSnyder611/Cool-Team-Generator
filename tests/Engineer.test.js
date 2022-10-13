const engineer = require("../lib/Engineer")

test('Is it a object', () => {
    const x = new engineer();
    expect(typeof(x)).tobe('object')
})
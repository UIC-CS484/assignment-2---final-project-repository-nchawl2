const passwordTest = require('../config/functions');

test('Strong Password Test', () => {
    var isValid_1 = passwordTest.strongPassword("1234");
    expect(isValid_1).toBe(false);
    
    var isValid_2 = passwordTest.strongPassword("Logmein@123");
    expect(isValid_2).toBe(true);

    var isValid_3 = passwordTest.strongPassword("Passw0rd");
    expect(isValid_3).toBe(false);
})
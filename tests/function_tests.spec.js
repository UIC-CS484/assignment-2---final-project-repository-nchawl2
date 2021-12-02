var functions = require('../config/validation');

test("Testing Password Validation", () => {
  var isValid = functions.strongPassword("1234");
  expect(isValid).toBe(false);

  var isValid_2 = functions.strongPassword("Logmein@123");
    expect(isValid_2).toBe(true);

  var isValid_3 = functions.strongPassword("Passw0rd");
  expect(isValid_3).toBe(false);
});

test("Testing Valid Input", () => {
  var isValid = functions.validInput("-1", "10");
  expect(isValid).toBe(false);

  var isValid_2 = functions.validInput("138", "2020");
  expect(isValid_2).toBe(true);
})
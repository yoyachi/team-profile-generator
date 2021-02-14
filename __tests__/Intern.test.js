
const Intern = require("../lib/Intern.js");

test("Can set school via constructor", () => {
    const testValue = "100";
    const e = new Intern("Brandon", 1, "test@test.com", testValue);
    expect(e.school).toBe(testValue);


});

test("getRole should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Brandon", 1, "test@.com", "100");
    expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
    const testValue = "100";
    const e = new Intern("Brandon", 1, "test@test.com", testValue);
    expect(e.getSchool()).toBe(testValue);

});
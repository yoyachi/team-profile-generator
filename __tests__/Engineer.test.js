const Engineer = require("../lib/Engineer.js");

test("Can ser GitHub account via constructor", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Brandon", 1, "test@test.com, testValue", "Engineer");
    expect (e.github).toBe(testValue);

});

test("getRole() should return \"Engineer\"", () => {
    const testValue = "Engineer";
    const e = new Engineer("Brandon", 1, "test@test.com", "GitHubUser", "Engineer");
    expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username cia getGtihub()", () => {
    const testValue = "GitHubUser";
    const e = new Engineer("Bill", 1, "test@test.com", testValue, "Engineer");
    expect(e.getGithub()).toBe(testValue);
});


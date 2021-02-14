
const Employee = require("../lib/Employee");

test("Can instantiate employee instance", () => {
    const e = new Employee();
    expect(typeof (e)). toBe("object");
});

test("Can set name via constructor arguments", () => {
    const name = "Bryan";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Can set id via constructor argument", () => {
    const testValue = 10025;
    const e = new Employee("Brandon", testValue);
    expect(e.id).toBe(testValue);

});

test("Can set email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Employee("Brandon", 1, testValue);
    expect(e.email).toBe(testValue);

});

test("Can get name via getName()", () => {
    const testValue = "Bryan";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Employee("Brandon", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("Brandon", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Bryan", 1, "test@test.com", "Employee");
    expect(e.getRole()).toBe(testValue);
});

test("Can isntantiate Employee instance", () => {
    const e = new Employee();
    expect(typeof (e)).toBe("object");

});

test("Sets email via constructor argument", () => {
    const testValue = "test@test.com";
    const e = new Employee("Brandon", 1, testValue);
    expect(e.email).toBe(testValue);

});

test("Gets email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("Brandon", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("Can get name via getName()", () => {
    const testValue = "Bryan";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Gets id via getId()", () => {
    const testValue = 100;
    const e = new Employee("Brandon", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Gets email via getEmail()", () => {
    const testValue = "test@test.com";
    const e = new Employee("Brandon", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Bryan", 1, "test@test.com", "Employee");
    expect(e.getRole()).toBe(testValue);
});







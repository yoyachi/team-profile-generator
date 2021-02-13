"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Employee = require('../lib/Employee');

test("Can instantiate employee instance", function () {
  var e = new Employee();
  expect(_typeof(e)).toBe("object");
});
test("Can set name via constructor arguments", function () {
  var name = "Bryan";
  var e = new Employee(name);
  expect(e.name).toBe(name);
});
test("Can set id via constructor argument", function () {
  var testValue = 10025;
  var e = new Employee("Brandon", testValue);
  expect(e.id).toBe(testValue);
});
test("Can set email via constructor argument", function () {
  var testValue = "test@test.com";
  var e = new Employee("Brandon", 1, testValue);
  expect(e.email).toBe(testValue);
});
test("Can get name via getName()", function () {
  var testValue = "Bryan";
  var e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});
test("Can get id via getId()", function () {
  var testValue = 100;
  var e = new Employee("Brandon", testValue);
  expect(e.getId()).toBe(testValue);
});
test("Can get email via getEmail()", function () {
  var testValue = "test@test.com";
  var e = new Employee("Brandon", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});
test("getRole() should return \"Employee\"", function () {
  var testValue = "Employee";
  var e = new Employee("Bryan", 1, "test@test.com", "Employee");
  expect(e.getRole()).toBe(testValue);
});
test("Initiate Employee instance", function () {
  var e = new Employee();
  expect(_typeof(e)).toBe("object");
});
test("Sets email via constructor argument", function () {
  var testValue = "tes@tes.com";
  var e = new Employee("Brandon", 1, testValue);
  expect(e.email).toBe(testValue);
});
test("Gets email via getEmail()", function () {
  var testValue = "test@test.com";
  var e = new Employee("Brandon", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});
test("Gets id via getId", function () {
  var testValue = 100;
  var e = new Employee("Brandon", testValue);
  expect(e.getId).toBe(testValue);
});
test("Gets email via getEmail()", function () {
  var testValue = "test@test.com";
  var e = new Employee("Brandon", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});
test("getRole() should return \"Employee\"", function () {
  var testValue = "Employee";
  var e = new Employee("Bryan", 1, "test@test.com", "Employee");
  expect(e.getRole()).toBe(testValue);
});
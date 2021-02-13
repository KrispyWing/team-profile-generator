const Employee = require('../lib/Employee');

test('create an Employee Object', () => {
  const employee = new Employee('Jim', 123, 'test');
  
  expect(employee.name).toBe('Jim');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test('get the employee name', () => {
  const employee = new Employee('Jim', 123, 'test');

  expect(employee.getName()).toBe('Jim');
});

test('get the employee id', () => {
  const employee = new Employee('Jim', 123, 'test');

  expect(employee.getId()).toEqual(expect.any(Number));
});

test('get the employee email', () => {
  const employee = new Employee('Jim', 123, 'test');

  expect(employee.getEmail()).toEqual(expect.any(String));
});

test('get the employees role', () => {
  const employee = new Employee('Jim', 123, 'test');

  expect(employee.getRole()).toBe('Employee');
})
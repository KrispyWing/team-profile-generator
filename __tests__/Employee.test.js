const Employee = require('../lib/Employee');

test('create an Employee Object', () => {
  const employee = new Employee('Jim');
  employee.id = 123;
  employee.email = 'test@test.com'

  expect(employee.name).toBe('Jim');
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
})
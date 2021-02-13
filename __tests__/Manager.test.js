const Manager = require('../lib/Manager');

test('creates a Manager object', () => {
  const manager = new Manager('Jim', 123, 'test', 1);
  
  expect(manager.name).toBe('Jim');
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number));
});
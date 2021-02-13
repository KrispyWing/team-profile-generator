const Intern = require('../lib/Intern');

test('Create an Intern object', () => {
  const intern = new Intern('Jim', 123, 'test', 'school');

  expect(intern.name).toBe('Jim');
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});

test('Get interns school', () => {
  const intern = new Intern('Jim', 123, 'test', 'school');

  expect(intern.getSchool()).toBe('school');
})

test('Interns role is Intern', () => {
  const intern = new Intern('Jim', 123, 'test', 'school');

  expect(intern.getRole()).toBe('Intern');
})
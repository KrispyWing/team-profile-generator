const Engineer = require('../lib/Engineer');

test('Create an Engineer object', () => {
  const engineer = new Engineer('Jim', 123, 'test', 'jimgit');

  expect(engineer.name).toBe('Jim');
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
});

test('Get engineers github', () => {
  const engineer = new Engineer('Jim', 123, 'test', 'jimgit');

  expect(engineer.getGithub()).toBe('jimgit');
});

test('make sure engineers role is Engineer', () => {
  const engineer = new Engineer('Jim', 123, 'test', 'jimgit');

  expect(engineer.getRole()).toBe('Engineer');
})
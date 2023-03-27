import reverse from '../src/index.js';

test('reverse', () => {
  expect(reverse('hello')).toEqual('oleh');
  expect(reverse('')).toEqual('');
});
import defaults from './defaults';
import createConfig from './index';

test('null config should return defaults', () => {
  expect(JSON.stringify(createConfig())).toBe(JSON.stringify(defaults));
});

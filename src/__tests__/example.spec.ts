// import { mount } from '@vue/test-utils'
import { add } from '../example';

describe('example', () => {
  describe('add', () => {
    it('adds properly', () => {
      const result = add(2, 2);

      expect(result).toBe(4);
    });
  });
});

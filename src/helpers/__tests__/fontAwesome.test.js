import { makePrefix, makeName } from 'helpers/fontAwesome';

describe('makePrefix', () => {
  it('should export correct prefix for given style', () => {
    expect(makePrefix('style')).toEqual('fas');
  });
});

describe('makeName', () => {
  it('should export correct name for a given icon', () => {
    expect(makeName('name')).toEqual('fa-name');
  });
});

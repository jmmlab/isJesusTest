var isJesusTest = require('./index');
describe('Testing isGeo', function () {
  it('should return true passing Geo', function () {
    expect(isJesusTest('JesusTest')).toBeTruthy();
  });

  it('should return false passing Google', function () {
    expect(isJesusTest('Goolge')).toBeFalsy();
  });
});

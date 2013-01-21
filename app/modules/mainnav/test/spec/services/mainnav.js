'use strict';

describe('Service: mainnav', function () {

  // load the service's module
  beforeEach(module('mainnavApp'));

  // instantiate service
  var mainnav;
  beforeEach(inject(function(_mainnav_) {
    mainnav = _mainnav_;
  }));

  it('should do something', function () {
    expect(!!mainnav).toBe(true);
  });

});

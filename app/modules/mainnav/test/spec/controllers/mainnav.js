'use strict';

describe('Controller: MainnavCtrl', function() {

  // load the controller's module
  beforeEach(module('mainnavApp'));

  var MainnavCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller) {
    scope = {};
    MainnavCtrl = $controller('MainnavCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function() {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

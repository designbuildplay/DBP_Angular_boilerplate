'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('DbpAPP App', function() {

describe('Nav list view', function() {

  beforeEach(function() {
    browser.get('static/');
  });


  it('should navigate through and switch the page views', function() {

    var navList = element.all(by.repeater('navitem in navitems'));
    var query = element(by.model('query'));

    expect(navList.count()).toBe(4);

  });

  it('should click each nav item and render the appropriate view', function() {
      var query = element(by.model('navitem in navitems'));
      
      // SINGLE LINK CLICK TEST
      //element(by.css('.menu li a')).click();
      // browser.getLocationAbsUrl().then(function(url) {
      //   expect(url.split('#')[1]).toBe('/view1');
      // });


      // TEST CLICK THROUGH ON ALL NAV AND VIEWS
      element.all(by.css('.menu li a')).then(function(items) {
            expect(items.length).toBe(4);     // expext length to be 4
            items.forEach(function (ele, i) { // loop through array
                ele.click();

                browser.getLocationAbsUrl().then(function(url) {
                  expect(url.split('#')[1]).toBe('/view'+(i+1));
                });
            
            });
        });

    });


});
});

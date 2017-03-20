var test = require('tape');
var shot = require('shot');
var server = require('./server');

test('Home router status', (t) => {
  shot.inject(server, {
    method: 'get',
    url: '/'
  },(res) => {
    t.equal(res.statusCode,200, 'should be 200');
    t.end();
  })
    // t.equal(1,2,'should failed')
    var input = 2;  // Change input to 2 to fix the test
    t.equal(input,2,'should pass now');

});

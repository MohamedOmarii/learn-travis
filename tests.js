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
    console.log('work');
  })


});

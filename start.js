var server = require('./server.js');

server.listen(3000, (error) => {
  if(error) throw error;
  console.log('server started');
});

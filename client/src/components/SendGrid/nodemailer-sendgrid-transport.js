var nodemailer = require('nodemailer');
var sgTransport = require('nodemailer-sendgrid-transport');

var options = {
  auth: {
    api_user: 'LiveSafeApp',
    api_key: '?#zp^f&7j7uCZsqES4'
  }
}

var client = nodemailer.createTransport(sgTransport(options));

var email = {
  from: 'georangerfrontend@gmail.com',
  to: 'kimduclos@gmail.com',
  subject: 'Hello',
  text: 'Hello world',
  html: '<b>Hello world</b>'
};

client.sendMail(email, function(err, info){
    if (err ){
      console.log(error);
    }
    else {
      console.log('Message sent: ' + info.response);
    }
});
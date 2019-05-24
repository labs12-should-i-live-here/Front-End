var express = require("express"),
  path = require("path"),
  nodeMailer = require("nodemailer");

var app = express();
var port = 3000;
app.listen(port, function(req, res) {
  console.log("Server is running at port: ", port);
});

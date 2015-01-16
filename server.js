var express = require("express");
var path    = require("path");

var app = express();

app.use(express.static("public"));
app.use(express.static(
  path.resolve(require.resolve("keystone"), "..") + "/public"
));

app.listen(3000);

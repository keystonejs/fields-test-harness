import Application from "./Application";

var app = new Application(document.getElementById("container"));

app.add("select", require("keystone/fields/types/select/test/client"));

app.init();

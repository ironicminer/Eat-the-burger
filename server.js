const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

let exprsHndl = require("express-handlebars");

app.engine("handlebars", exprsHndl({ defaultLayout: "main" }));
app.set("view-engine", "handlebars");

let routes = require("./controllers/   ");

app.use(routes);

app.listen(PORT, function () {
  console.log("App listening on PORT:" + PORT);
});

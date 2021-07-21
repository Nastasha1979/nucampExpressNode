const express = require("express");
const morgan = require("morgan");    //require Morgan
const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan("dev"));   //Configures morgan to log using the development version. Will log request information

app.use(express.static(__dirname + "/public"));  //dirname is a special variable in node. it has 2 underscores this is all that is needed to server static files from public folder

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<html><body><h1>This is an express server</h1></body><html>");
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});
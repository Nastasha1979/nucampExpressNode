//SET UP FILES
const express = require("express");
const morgan = require("morgan");    //require Morgan
const campsiteRouter = require("./routes/campsiteRouter");
const promotionsRouter = require("./routes/promotionsRouter");
const partnersRouter = require("./routes/partnersRouter");
const hostname = "localhost";
const port = 3000;
const app = express();
app.use(morgan("dev"));   //Configures morgan to log using the development version. Will log request information
app.use(express.json()); //This will handle parsing json data to javascript properties of the request object

//CREATE CAMPSITES ROUTER
app.use("/campsites", campsiteRouter);
app.use("/promotions", promotionsRouter);
app.use("/partners", partnersRouter);

//SERVE FILES
app.use(express.static(__dirname + "/public"));  //dirname is a special variable in node. it has 2 underscores this is all that is needed to server static files from public folder

//BASIC HOME DATA
app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<html><body><h1>This is an express server</h1></body><html>");
});

//APP.LISTEN
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});
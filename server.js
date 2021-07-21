const express = require("express");
const morgan = require("morgan");    //require Morgan
const hostname = "localhost";
const port = 3000;

const app = express();
app.use(morgan("dev"));   //Configures morgan to log using the development version. Will log request information

app.use(express.json()); //This will handle parsing json data to javascript properties of the request object

app.all("/campsites", (req, res, next) => {    //Used to set up status code and header for all http methods
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    next();                                 //This sends it to the next function. Otherwise it would stop here
});

app.get("/campsites", (req,res) => {
    res.end("Will send all the campsites to you");  //This just sends the end message. Later we will actually return stuff
});

app.post("/campsites", (req,res) => {
      res.end(`Will add the campsites: ${req.body.name} with description ${req.body.description}.`);
});

app.put("/campsites", (req,res) => {
    res.statusCode = 403;                           //We can change the status code from app.all if needed
    res.end(`Put operation not supported on /campsites.`);
});

app.delete("/campsites", (req,res) => {
    res.end(`Deleting all campsites.`);             //We will learn to restrict delete operations later
});

app.get("/campsites/:campsiteId", (req, res) => {
    res.end(`Will send details of the campsite ${req.params.campsiteId} to you.`);
});

app.post("/campsites/:campsiteId", (req, res) => {
    res.statusCode = 403;
    res.end(`Post operations not supported on /campsites/${req.params.campsiteId}.`);
});

app.put("/campsites/:campsiteId", (req, res) => {
    res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
    res.end(`Will update the campsite ${req.body.name} with description: ${req.body.description}.`);
});

app.delete("/campsites/:campsiteId", (req, res) => {
    res.end(`Deleting campsite ${req.params.campsiteId}.`);
});

app.use(express.static(__dirname + "/public"));  //dirname is a special variable in node. it has 2 underscores this is all that is needed to server static files from public folder

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end("<html><body><h1>This is an express server</h1></body><html>");
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});
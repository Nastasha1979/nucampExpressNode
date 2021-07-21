//SET UP FILES
const express = require("express");
const morgan = require("morgan");    //require Morgan
const campsiteRouter = require("./routes/campsiteRouter");
const hostname = "localhost";
const port = 3000;
const app = express();
app.use(morgan("dev"));   //Configures morgan to log using the development version. Will log request information
app.use(express.json()); //This will handle parsing json data to javascript properties of the request object

app.use("/campsites", campsiteRouter);

//EXPRESS METHODS

//We will work these during the workshop assignment this weekend. She said delete, but I will just comment out
// app.get("/campsites/:campsiteId", (req, res) => {
//     res.end(`Will send details of the campsite ${req.params.campsiteId} to you.`);
// });

// app.post("/campsites/:campsiteId", (req, res) => {
//     res.statusCode = 403;
//     res.end(`Post operations not supported on /campsites/${req.params.campsiteId}.`);
// });

// app.put("/campsites/:campsiteId", (req, res) => {
//     res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
//     res.end(`Will update the campsite ${req.body.name} with description: ${req.body.description}.`);
// });

// app.delete("/campsites/:campsiteId", (req, res) => {
//     res.end(`Deleting campsite ${req.params.campsiteId}.`);
// });


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
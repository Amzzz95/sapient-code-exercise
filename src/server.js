import express from "express";
import compression from "compression";
import path from "path";

import serverIndex from "./serverRoutes";

// Server variable
const app = express();

// View engine setup
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");

// Middleware
app.use(compression());
app.use(express.static(__dirname + "/public"));

//Routes
app.use("/", serverIndex);

const port = process.env.PORT || 3000;

app.listen(port, function listenHandler() {
    console.info(`Running on ${port}`)
});

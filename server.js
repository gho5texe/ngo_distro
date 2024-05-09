"use strict";
require('dotenv').config({})
const path = require('node:path');
const express = require("express");
const cookieParser = require("cookie-parser");
const database = require("./src/utils/database");
const expressLayouts = require("express-ejs-layouts");

const server = express();



const PORT = process.env.GET_PORT || 3000;
server.use(cookieParser());
server.use(expressLayouts);
server.set("view engine", "ejs");
server.set("views", path.join(__dirname, "src", "views"));

server.use(express.static(path.join(__dirname, "src", "assets", "fonts")))
server.use(express.static(path.join(__dirname, "src", "assets", "styles")))
server.use(express.static(path.join(__dirname, "src", "assets", "scripts")))
server.use(express.static(path.join(__dirname, "src", "assets", "images")))

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

const publicRoute = require("./src/router/publicRoute");
const authRoute = require("./src/router/authRoute");
server.use(publicRoute);
server.use(authRoute);


const userController = require('./src/controllers/userController');
const loginController = require('./src/controllers/loginController');
const eventController = require('./src/controllers/eventController');
server.use(userController);
server.use(loginController);
server.use(eventController);

server.listen(PORT, () => {
    console.log(`Server :=> http://localhost:${PORT}`);
})
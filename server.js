"use server";
process.loadEnvFile();
const path = require('node:path');
const express = require("express");
const database = require("./src/utils/database");
const expressLayouts = require("express-ejs-layouts");

const server = express();



const PORT = process.env.GET_PORT || 3000;

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
server.use(publicRoute);

server.listen(PORT, () => {
    console.log(`Server :=> http://localhost:${PORT}`);
})
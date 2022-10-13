"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express = require("express");
const housGet = require("./getPosition/HousParty/HousParty/housParty");
const housePartyPost = require("./getPosition/HousParty/HousParty/housePartyPost");
const auth = require("./auth/index");
exports.app = express();
let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false });
exports.app.get(`/api/id/:id`, (req, res) => {
    housGet.housPartyGetID(req.params.id).catch(console.dir);
});
exports.app.get('/api/selector/:type/typeData/:typeData', (req, res) => {
    housGet.housPartyGetSelector(req.params.type, req.params.typeData).catch(console.dir);
    res.send(req.params);
});
exports.app.get('/api/selector/:num', (req, res) => {
    if (req.params.num === "2") {
    }
});
exports.app.post('/api/homeEvent', urlencodedParser, function (req, res) {
    let latitude = req.body.latitude;
    let longitude = req.body.longitude;
    let info = req.body.info;
    let type = req.body.type;
    let price = req.body.price;
    let dataTime = req.body.dataTime;
    console.log(info);
    housePartyPost.housPartyPost(latitude, longitude, type, info, price, dataTime).catch(console.dir);
    return res.status(201);
});
exports.app.post('/api/auth/signup', urlencodedParser, (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    // console.log(username)
    auth.signup(res, username, password).catch(console.dir);
    console.log("200");
});
exports.app.post('/api/auth/signin', urlencodedParser, (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    auth.signin(res, username, password).catch(console.dir);
    console.log("200");
});
exports.app.get('/api/auth/logout', (req, res) => {
    auth.logout().catch(console.dir);
    res.send("logout");
});
exports.app.listen(process.env.PORT || 3000);
console.log(`Server started ${process.env.PORT}`);

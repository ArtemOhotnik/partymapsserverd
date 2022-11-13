"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express = require("express");
const housGet = require("./getPosition/HousParty/HousParty/housParty");
const housePartyPost = require("./getPosition/HousParty/HousParty/housePartyPost");
const EventPut = require("./getPosition/HousParty/PutReq/EventPut");
const putUser = require("./auth/putUser/putUser");
const auth = require("./auth/index");
const getUser = require("./auth/getUser/getUser");
exports.app = express();
let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: false });
exports.app.get(`/api/id/:id`, (req, res) => {
    housGet.housPartyGetID(res, req.params.id).catch(console.dir);
});
exports.app.get('/api/selector/:type/typeData/:typeData', (req, res) => {
    housGet.housPartyGetSelector(res, req.params.type, req.params.typeData).catch(console.dir);
    res.json(res);
});
exports.app.get('/api/selector/filter/:lt/:lg/:type/:prise/:dataTime', (req, res) => {
    let lt = Number(req.params.lt);
    let lg = Number(req.params.lg);
    let type = req.params.type;
    let prise = Number(req.params.prise);
    let dataTime = Number(req.params.dataTime);
    housGet.housPartyGetLotSelector(res, lt, lg, type, prise, dataTime).catch(console.dir);
    res.json(res);
});
exports.app.post('/api/homeEvent', urlencodedParser, function (req, res) {
    let latitude = req.body.latitude;
    let longitude = req.body.longitude;
    let info = req.body.info;
    let type = req.body.type;
    let price = req.body.price;
    let dataTime = req.body.dataTime;
    console.log(info);
    housePartyPost.housPartyPost(res, latitude, longitude, type, info, price, dataTime).catch(console.dir);
    return res.status(201);
});
exports.app.put('/api/homeEvent/putData/:ID/:type/:typeData', urlencodedParser, function (req, res) {
    let type = req.params.type;
    let typeData = req.params.typeData;
    let ID = req.params.ID;
    EventPut.EventPut(ID, type, typeData).catch(console.dir);
});
exports.app.put('/api/auth/changeUsername/:ID/', urlencodedParser, (req, res) => {
    let type = req.body.type;
    let typeData = req.body.typeData;
    let ID = req.params.ID;
    putUser.ChangeUserName(ID, type, typeData).catch(console.dir);
});
exports.app.put('/api/auth/changePassword/:ID', urlencodedParser, (req, res) => {
    let type = req.body.type;
    let typeData = req.body.typeData;
    let ID = req.params.ID;
    putUser.changePassword(ID, type, typeData).catch(console.dir);
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
}); //це гавно не написано
exports.app.get('/api/auth/getUser/:ID', (req, res) => {
    let ID = req.params.ID;
    getUser.getUser(res, ID).catch(console.dir);
});
exports.app.listen(process.env.PORT || 3000);
console.log(`Server started 3000`);

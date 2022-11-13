import express =  require('express')
import housGet = require("./getPosition/HousParty/HousParty/housParty")
import housePartyPost = require("./getPosition/HousParty/HousParty/housePartyPost")
import EventPut =  require( "./getPosition/HousParty/PutReq/EventPut");
import putUser = require('./auth/putUser/putUser')
import auth = require('./auth/index')
const getUser = require("./auth/getUser/getUser")
import {housPartyGetLotSelector, housPartyGetSelector} from "./getPosition/HousParty/HousParty/housParty";
import {raw, response} from "express";
import {inspect} from "util";
import {isNumberObject} from "util/types";
import {compileFunction} from "vm";


export const app = express()

let bodyParser = require('body-parser');

let urlencodedParser = bodyParser.urlencoded({ extended: false })

app.get(`/api/id/:id`, (req, res) => {
    housGet.housPartyGetID(res, req.params.id).catch(console.dir);
})

app.get('/api/selector/:type/typeData/:typeData', (req, res) => {
    housGet.housPartyGetSelector(res, req.params.type, req.params.typeData).catch(console.dir);
    res.send(req.params)
})

app.get('/api/selector/filter/:lt/:lg/:type/:prise/:dataTime', (req, res) => {
    let lt = Number(req.params.lt)
    let lg = Number(req.params.lg)
    let type = req.params.type
    let prise = Number(req.params.prise)
    let dataTime = Number(req.params.dataTime)

    housGet.housPartyGetLotSelector(res, lt, lg, type, prise, dataTime).catch(console.dir)
    res.send(req.params)
})

app.post('/api/homeEvent', urlencodedParser, function (req, res )  {


        let latitude = req.body.latitude
        let longitude = req.body.longitude
        let info = req.body.info
        let type = req.body.type
        let price = req.body.price
        let dataTime = req.body.dataTime



    console.log(info)
    housePartyPost.housPartyPost(res, latitude, longitude, type, info, price, dataTime).catch(console.dir);
    return res.status(201);
})

app.put('/api/homeEvent/putData/:ID/:type/:typeData', urlencodedParser, function (req, res) {
    let type = req.params.type
    let typeData = req.params.typeData
    let ID  = req.params.ID

    EventPut.EventPut(ID, type, typeData).catch(console.dir)
})

app.put('/api/auth/changeUsername/:ID/', urlencodedParser, (req, res) => {
    let type = req.body.type
    let typeData = req.body.typeData
    let ID  = req.params.ID
    putUser.ChangeUserName(ID, type, typeData).catch(console.dir)
})

app.put('/api/auth/changePassword/:ID', urlencodedParser, (req, res) => {
    let type = req.body.type
    let typeData = req.body.typeData
    let ID  = req.params.ID

    putUser.changePassword(ID, type, typeData).catch(console.dir)
})


app.post('/api/auth/signup', urlencodedParser, (req, res) => {

    let username = req.body.username
    let password = req.body.password

   // console.log(username)
    auth.signup(res, username, password).catch(console.dir)
   console.log("200")

})

app.post('/api/auth/signin', urlencodedParser ,(req, res) => {

    let username = req.body.username
    let password = req.body.password

    auth.signin(res, username, password).catch(console.dir)
    console.log("200")

})

app.get('/api/auth/logout', (req, res) => {
    auth.logout().catch(console.dir)
    res.send("logout")
}) //це гавно не написано

app.get('/api/auth/getUser/:ID', (req, res) => {
    let ID = req.params.ID
    getUser.getUser(res, ID).catch(console.dir)
})

app.listen(process.env.PORT || 3000)
console.log(`Server started 3000`)
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Filter = new mongoose_1.Schema({
    latitude: { type: String },
    longitude: { type: String },
    type: { type: String },
    price: { type: String },
    dataTime: { type: String },
});
module.exports = (0, mongoose_1.model)('Filter', Filter);

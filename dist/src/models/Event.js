"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Event = new mongoose_1.Schema({
    latitude: { type: String, required: true },
    longitude: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: String, required: true },
    dataTime: { type: String, required: true },
});
module.exports = (0, mongoose_1.model)('Event', Event);

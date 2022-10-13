import {app} from "../../src";
import request from "supertest";


describe("Home Event Test request", () => {
    // Hidden for simplicity
    test("POST /api/homeEvent", async () => {
        await request(app)
            .post("/api/homeEvent")
            .expect("Content-Type", /json/)
            .send({
                latitude: 12,
                longitude: 14,
                type: "Hous Party",
                info: 14,
                price: 14,
                dataTime: 14,
            })
            .expect(201)
        // More logic goes here
    });

});

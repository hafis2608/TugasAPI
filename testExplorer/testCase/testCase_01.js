const request = require("supertest");
const { expect } = require("chai");
const supertest = require("supertest");
const baseUrl = require("../globalVariable/baseUrl");

// const url = supertest("https://api.reqres.in");

const url = `${baseUrl}`; //define global variable

describe("Testing API RESQRES", function () {
    // Test case 1
    it("Test GET", async function () {
        const response = await request(url).get("/users?page=2");
        expect(response.status).to.equal(200);
        console.log(response.body);
        
    });
  });



const request = require("supertest");
const { expect } = require("chai");
const supertest = require("supertest");
const baseUrl = require("../globalVariable/baseUrl");

async function getMethod() {
    const response = await request(url).get("/users?page=2");
    //assertation / verifikasi
    expect(response.status).to.equal(200);
    console.log(response.body);
  }

  async function getUser() {
    const response = await request(url).get("/users/2");
    //assertation / verifikasi
    expect(response.status).to.equal(200);
    console.log(response.body);
  }

  async function postUser() {
    const response = await request(url).post("/users/2").send({
      "data": {
          
          "email": "Hafis Hidayattullah",
          "first_name": "Hafis",
          "last_name": "Hidayattullah",
          "avatar": "https://reqres.in/img/faces/2-image.jpg"
      },
      "support": {
          "url": "https://reqres.in/#support-heading",
          "text": "To keep ReqRes free, contributions towards server costs are appreciated!"
      }
  });
    //assertation / verifikasi
    expect(response.status).to.equal(200);
    console.log(response.body);
  }
  
  async function deleteUser() {
    const response = await request(url).delete("/users/2");
    //assertation / verifikasi
    expect(response.body.message).to.equal(`object berhasil dihapus`);
    expect(response.body.error).to.equal(`object tidak ditemukan`);
    
  }
  
  module.exports = { getMethod, getUser, postUser, deleteUser};

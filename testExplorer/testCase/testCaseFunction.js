const { getMethod, getUser, postUser, deleteUser } = require("../apiServer/apiObjects");

describe("Testing API RESQRES", function () {
    // Test case 1
    it("Test GET From Function", async function () {
        getMethod();
    });
    it("Test GET From Function User", async function () {
        getUser();
    });
    it("Test POST From Function User", async function () {
        postUser();
    });
    it("Test DELETE From Function User", async function () {
        deleteUser();
    });
  });

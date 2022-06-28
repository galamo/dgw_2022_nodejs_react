const { expect } = require("chai")
const axios = require("axios")
describe("Products Api", () => {
    it("GET /products", async () => {
        const { data, status, statusText } = await axios.get("http://localhost:3500/products?apiKey=1234")
        expect(status).to.be.equal(200)
    })
    it("GET /products/:id", async () => {
        const { data, status, statusText } = await axios.get("http://localhost:3500/products/1?apiKey=1234")
        expect(status).to.be.equal(200)
        expect(data.id).to.be.equal(1)
    })
})
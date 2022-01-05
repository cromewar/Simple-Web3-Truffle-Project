const Hello = artifacts.require("Hello");

contract("Hello", (accounts) => {
  it("Get message", async () => {
    let instance = await Hello.deployed();
    const message = await instance.getMessage.call({ from: accounts[0] });
    assert.equal(message, "Hello world");
  });

  it("Change message", async () => {
    let instance = await Hello.deployed();
    const tx = await instance.setMessage("Cromewar", { from: accounts[1] });
    console.log(accounts[1]);
    console.log(tx);
    const msg = await instance.getMessage.call();
    assert.equal(msg, "Cromewar");
  });
});

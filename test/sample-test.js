// import testing libraries: https://www.chaijs.com/guide/styles/ 
const { expect, assert } = require("chai");

// the `describe` scope encapsulates an entire test called `TestModifyVariable`
// the `it` says the behavior that should be expected from the test
describe("TestModifyVariable", function () {
  it("should change x and y to the value of the arguments", async function () {
    // this line creates an ethers ContractFactory abstraction: https://docs.ethers.org/v5/api/contract/contract-factory/
    const ModifyVariable = await ethers.getContractFactory("ModifyVariable");

    // we then use the ContractFactory object to deploy an instance of the contract
    const contract = await ModifyVariable.deploy(10, 13);

    // wait for contract to be deployed and validated!
    await contract.deployed();

    // modify x and y from 10 and 13 to 20 and 30 via this function!
    await contract.modifyXnY(50, 3423);
    // getter for state variable x
    const newX = await contract.x();
    const newY = await contract.y();

    assert.equal(newX.toNumber(), 50);
    assert.equal(newY.toNumber(), 3423);

    console.log(newX, newY)
  });

  it("should change text to new value", async function () {
    // this line creates an ethers ContractFactory abstraction: https://docs.ethers.org/v5/api/contract/contract-factory/
    const ModifyVariable = await ethers.getContractFactory("ModifyVariable");

    // we then use the ContractFactory object to deploy an instance of the contract
    const contract = await ModifyVariable.deploy(10, 13);

    // wait for contract to be deployed and validated!
    await contract.deployed();

    // modify text to the argument value via this function!
    await contract.modifyText("Hello world");
    // getter for state variable x
    const newText = await contract.text();

    assert.equal(newText, "Hello world");

    console.log(newText)
  });
});

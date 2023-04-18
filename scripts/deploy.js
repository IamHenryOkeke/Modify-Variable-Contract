async function main() {
    const ModifyVariable = await ethers.getContractFactory("ModifyVariable");
 
    // Start deployment, returning a promise that resolves to a contract object
    const contract = await ModifyVariable.deploy(20, 13);
    console.log("Contract deployed to address:", contract.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });
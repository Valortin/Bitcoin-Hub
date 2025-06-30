const Portfolio = artifacts.require("Portfolio");

module.exports = async function (deployer) {
  await deployer.deploy(Portfolio);
  const portfolio = await Portfolio.deployed();
  console.log("Portfolio deployed at:", portfolio.address);
};
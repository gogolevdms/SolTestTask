// const ConvertLib = artifacts.require("ConvertLib");
const MicroCredit = artifacts.require("MicroCredit");

module.exports = function(deployer) {
  // deployer.deploy(ConvertLib);
  // deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MicroCredit);
};

const Ownable = artifacts.require("Ownable");
const MicroCredit = artifacts.require("MicroCredit");

module.exports = function(deployer) {
  deployer.deploy(Ownable);
  // deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MicroCredit);
};

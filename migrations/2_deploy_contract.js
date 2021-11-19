var VRCoin = artifacts.require("VRCoin");

module.exports = function (deployer) {
  deployer.deploy(VRCoin, 10000000000000);
};

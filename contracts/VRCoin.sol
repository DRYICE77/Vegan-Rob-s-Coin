// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract VRCoin is ERC20 {
    constructor (uint256  initialsupply)  ERC20("VRCoin", "Vegan Rob's") {
        _mint(msg.sender, initialsupply *(10 ** decimals()));

        
    }

}

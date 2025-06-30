// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

contract Portfolio {
    struct Strategy {
        address trader;
        uint256 performance; // ROI in percentage (scaled by 100)
    }

    mapping(address => uint256) public balances;
    mapping(address => Strategy[]) public userStrategies;

    function deposit() external payable {
        balances[msg.sender] += msg.value;
    }

    function addStrategy(address trader, uint256 performance) external {
        userStrategies[msg.sender].push(Strategy(trader, performance));
    }

    function getBalance(address user) external view returns (uint256) {
        return balances[user];
    }

    function getStrategies(address user) external view returns (Strategy[] memory) {
        return userStrategies[user];
    }
}
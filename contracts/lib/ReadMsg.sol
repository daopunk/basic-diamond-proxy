// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import './FacetLib.sol';

contract ReadMsg {
  function getMsg() external view returns (string memory m) {
    m = FacetLib.getMsg();
  }
}

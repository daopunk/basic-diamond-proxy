// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import './FacetLib.sol';

contract WriteMsg {
  function setMsg(string calldata _message) external {
    FacetLib.setMsg(_message);
  }
}

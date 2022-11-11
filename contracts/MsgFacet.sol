// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// import "hardhat/console.sol";
import '@solidstate/contracts/proxy/diamond/SolidStateDiamond.sol';

contract MsgFacet {
  // specify psuedorandom storage slot to avoid overwriting vars
  bytes32 internal constant STORAGE_LOCATION =
    keccak256('MsgFacet.hashed.location');

  // storage layout
  struct Storage {
    string message;
  }

  function getStorage() internal pure returns (Storage storage s) {
    bytes32 position = STORAGE_LOCATION;
    assembly {
      s.slot := position
    }
  }

  function setMessage(string calldata _message) external {
    Storage storage s = getStorage();
    s.message = _message;
  }

  function getMessage() external view returns (string memory m) {
    m = getStorage().message;
  }
}

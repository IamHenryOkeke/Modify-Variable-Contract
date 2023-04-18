//SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract ModifyVariable {
  uint public x;
  uint public y;
  string public text;

  constructor(uint _x, uint _y) {
    x = _x;
    y = _y;
  }

  function modifyXnY(uint newX, uint newY) public {
    x = newX;
    y = newY;
  }

  function modifyText (string memory newText) public{
    text = newText;
  }

}
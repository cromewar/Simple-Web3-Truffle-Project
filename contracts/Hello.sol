//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Hello {
    string public message = "Hello world";

    //Message visualization
    function getMessage() public view returns (string memory) {
        return message;
    }

    // send message to blockchain
    function setMessage(string memory _message) public {
        message = _message;
    }
}

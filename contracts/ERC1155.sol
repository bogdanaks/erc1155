//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.11;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NFT1155 is ERC1155, Ownable {
    constructor() ERC1155("") {}

    function mint(address _account, uint256 _id, uint256 _amount, bytes memory _data) public onlyOwner {
        _mint(_account, _id, _amount, _data);
    }

    function mintBatch(address _to, uint256[] memory _ids, uint256[] memory _amounts, bytes memory _data) public onlyOwner {
        _mintBatch(_to, _ids, _amounts, _data);
    }
}

import { NFT1155__factory } from "./../typechain/factories/NFT1155__factory";
import { NFT1155 } from "./../typechain/NFT1155.d";
import { ethers } from "hardhat";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

describe("NFT", function () {
  let NFTContract: NFT1155__factory;
  let nft: NFT1155;
  let owner: SignerWithAddress;

  beforeEach(async function () {
    NFTContract = await ethers.getContractFactory("NFT1155");
    [owner] = await ethers.getSigners();

    nft = await NFTContract.deploy();
  });

  describe("Test functions", function () {
    it("Mint 3 nft", async function () {
      await nft.mint(owner.address, 1, 3, "0x00");
    });
  });
});

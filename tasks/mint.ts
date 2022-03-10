import { NFT1155 } from "./../typechain/NFT1155";
import { task } from "hardhat/config";

import "@nomiclabs/hardhat-ethers";

interface IArgs {
  contract: string;
  id: string;
  amount: string;
}

task("mint", "Mint nft")
  .addParam("contract", "Contract address")
  .addParam("id", "Token id")
  .addParam("amount", "Amount nft")
  .setAction(async (args: IArgs, hre) => {
    const NFT = (await hre.ethers.getContractAt(
      "NFT1155",
      args.contract
    )) as NFT1155;
    const [owner] = await hre.ethers.getSigners();

    const tx = await NFT.mint(owner.address, args.id, args.amount, "0x00");
    await tx.wait();

    console.log(`Successfully minted nft`);
  });

export {};

import { NFT1155 } from "../typechain/NFT1155";
import { task } from "hardhat/config";

import "@nomiclabs/hardhat-ethers";

interface IArgs {
  contract: string;
  ids: string;
  amounts: string;
}

task("mintbatch", "Mint batch nft")
  .addParam("contract", "Contract address")
  .addParam("ids", "Token ids array. Example: 1,2,3")
  .addParam("amounts", "Amounts array. Example: 1,2,3")
  .setAction(async (args: IArgs, hre) => {
    const NFT = (await hre.ethers.getContractAt(
      "NFT1155",
      args.contract
    )) as NFT1155;
    const [owner] = await hre.ethers.getSigners();

    const idsArray = args.ids.replace(/\s/g, "").split(",");
    const amountsArray = args.amounts.replace(/\s/g, "").split(",");

    const tx = await NFT.mintBatch(
      owner.address,
      idsArray,
      amountsArray,
      "0x00"
    );
    await tx.wait();

    console.log(`Successfully minted batch nft`);
  });

export {};

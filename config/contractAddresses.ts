import { ChainId } from "@thirdweb-dev/sdk";
import { targetChainId } from "./targetChainConfig";

interface IAddresses {
  [key: string]: { [key: string]: string };
}

/***
 * Add your addresses + networks here.
 * To tell your app where to point to, change the targetChainId
 */
const ADDRESSES: IAddresses = {
  [ChainId.Goerli]: {
    Marketplace: "0x33F41eB8e9D77290daD89bDD85BaE0249bc8Bdb8",
  },
};

export const readAppContractAddresses = (name: string) => {
  return ADDRESSES[targetChainId][name];
};

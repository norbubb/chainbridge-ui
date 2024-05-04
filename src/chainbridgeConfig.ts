import TokenIcon from "./media/tokens/token-icon.svg";

export type TokenConfig = {
  address: string;
  name?: string;
  symbol?: string;
  imageUri?: string;
  resourceId: string;
  isNativeWrappedToken?: boolean;
};

export type BridgeConfig = {
  chainId: number;
  networkId: number;
  name: string;
  bridgeAddress: string;
  erc20HandlerAddress: string;
  rpcUrl: string;
  type: "Ethereum" | "Substrate";
  tokens: TokenConfig[];
  nativeTokenSymbol: string;
  //This should be the full path to display a tx hash, without the trailing slash, ie. https://etherscan.io/tx
  blockExplorer?: string;
  defaultGasPrice?: number;
};

export type ChainbridgeConfig = {
  chains: BridgeConfig[];
};

export const chainbridgeConfig: ChainbridgeConfig = {
  chains: [
    {
      chainId: 0,
      networkId: 168167,
      name: "Ethereum - MUD",
      bridgeAddress: "0xa776Ca38b48dCf5bc77828f2f07b8eeFC6FF7d46",
      erc20HandlerAddress: "0x1Da0cf4eA1052d557994E0A422f0eB074123F878",
      rpcUrl: `https://dev-rpc.metauserdao.com`,
      type: "Ethereum",
      blockExplorer: "hhttps://dev-scan.metauserdao.com/",
      defaultGasPrice: 1000000000,
      nativeTokenSymbol: "MUD",
      tokens: [
        {
          address: "0xeC96a8BC2F353330443da1141aA09F303CA684B0",
          name: "Tether USD",
          symbol: "USDT",
          imageUri: TokenIcon,
          resourceId:
            "0x0000000000000000000000eC96a8BC2F353330443da1141aA09F303CA684B000",
        },
      ],
    },
    {
      chainId: 1,
      networkId: 137,
      name: "Ethereum - Matic",
      bridgeAddress: "0xa776Ca38b48dCf5bc77828f2f07b8eeFC6FF7d46",
      erc20HandlerAddress: "0x1Da0cf4eA1052d557994E0A422f0eB074123F878",
      rpcUrl: `https://rpc.ankr.com/polygon`,
      type: "Ethereum",
      blockExplorer: "https://polygonscan.com/",
      nativeTokenSymbol: "MATIC",
      tokens: [
        {
          address: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
          name: "Tether USD",
          symbol: "USDT",
          imageUri: TokenIcon,
          resourceId:
            "0x0000000000000000000000eC96a8BC2F353330443da1141aA09F303CA684B000",
        },
      ],
    },
  ],
};

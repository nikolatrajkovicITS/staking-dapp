export enum Chain {
  POLYGON,
  MAINNET,
  SEPOLIA,
}

interface BlockchainConfig {
  chain: Chain;
  rpc: {
    polygon: string;
    mainnet: string;
    sepolia: string;
  };
}

export const CurrentConfig: BlockchainConfig = {
  chain: Chain.MAINNET,
  rpc: {
    polygon: "https://polygon-rpc.com/",
    mainnet: "https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID",
    sepolia: "https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID",
  },
};

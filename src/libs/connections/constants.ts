import { Chain, CurrentConfig } from "./config";

const MAINNET_CHAIN_ID = Chain.MAINNET;
const SEPOLIA_CHAIN_ID = Chain.SEPOLIA;

export const INPUT_CHAIN_ID =
  CurrentConfig.chain === Chain.SEPOLIA ? SEPOLIA_CHAIN_ID : MAINNET_CHAIN_ID;

export const INPUT_CHAIN_URL =
  CurrentConfig.chain === Chain.SEPOLIA
    ? CurrentConfig.rpc.sepolia
    : CurrentConfig.rpc.mainnet;

export const CHAIN_TO_URL_MAP = {
  [MAINNET_CHAIN_ID]: CurrentConfig.rpc.mainnet,
  [SEPOLIA_CHAIN_ID]: CurrentConfig.rpc.sepolia,
};

type ChainInfo = {
  explorer: string;
  label: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: 18;
  };
  rpcUrl: string;
};

export const CHAIN_INFO: { [key: string]: ChainInfo } = {
  [MAINNET_CHAIN_ID]: {
    explorer: "https://etherscan.io/",
    label: "Ethereum",
    nativeCurrency: { name: "Ether", symbol: "ETH", decimals: 18 },
    rpcUrl: CurrentConfig.rpc.mainnet,
  },
  [SEPOLIA_CHAIN_ID]: {
    explorer: "https://sepolia.etherscan.io/",
    label: "Sepolia",
    nativeCurrency: { name: "Sepolia Ether", symbol: "ETH", decimals: 18 },
    rpcUrl: CurrentConfig.rpc.sepolia,
  },
};

// URLs
export const METAMASK_URL = "https://metamask.io/";

import { WalletLinkConnector } from '@web3-react/walletlink-connector'

const TestNetWallet = new WalletLinkConnector({
	url: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
	appName: 'RecommenderNFT',
	supportedChainIds: [1, 3, 4, 5, 42],
})

const HardHatWallet = new WalletLinkConnector({
	url: `http://127.0.0.1:8545/`,
	appName: 'RecommenderNFT',
	supportedChainIds: [1337],
})

export { TestNetWallet, HardHatWallet }

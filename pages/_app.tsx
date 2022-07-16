import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Web3ReactProvider } from '@web3-react/core'
import {
	Web3Provider,
	ExternalProvider,
	JsonRpcFetchFunc,
} from '@ethersproject/providers'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../utils/theme'

type Provider = ExternalProvider | JsonRpcFetchFunc

function getLibrary(provider: Provider) {
	return new Web3Provider(provider)
}

function Dapp({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Web3ReactProvider getLibrary={getLibrary}>
				<Component {...pageProps} />
			</Web3ReactProvider>
		</ChakraProvider>
	)
}

export default Dapp

import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<Header />
			</Head>
		</div>
	)
}

export default Home

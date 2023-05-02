import './cryptoPrices.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TableCoins from '../../components/tableCoins/TableCoins';

const CryptoPrices = () => {
	const [coins, setCoins] = useState([]);

	const getData = async () => {
		const res = await axios.get(
			'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=3&page=1&sparkline=false&locale=en',
		);
		console.log(res.data);
		setCoins(res.data);
	};
	useEffect(() => {
		getData();
	}, []);

	return (
		<div className="container">
			<h4>check the prices of the most famous cryptocurrencies</h4>
			<div className="row">
				<TableCoins coins={coins} />
        <h6>Data provided by CoinGecko</h6>
        <p className='p-api'>Public API* has a rate limit of 10-30 calls/minute</p>
			</div>
		</div>
	);
};

export default CryptoPrices;

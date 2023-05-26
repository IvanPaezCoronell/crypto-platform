import './marketplace.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

import TableCoinsFilter from '../../components/tableCoins/TableCoinsFilter';

const Marketplace = () => {
	const [coins, setCoins] = useState([]);
	const [search, setSearch] = useState('');

	const getData = async () => {
		const res = await axios.get(
			'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en',
		);
		console.log(res.data);
		setCoins(res.data);
	};
	useEffect(() => {
		getData();
	}, []);

	return (
		<div>
			<div className="container pt-7">
				<h1 className="text-primary">MarketPlace</h1>
				<h4>Check the prices of the most 100 famous cryptocurrencies</h4>

				<div className="row">
					<div className="input-group">
						<input
							type="text"
							placeholder="Search a Coin"
							className="form-control bg-light text-dark border-1 mt-4 text-center"
							onChange={e => setSearch(e.target.value)}
						/>
					</div>

					<TableCoinsFilter coins={coins} search={search} />
					<h6>Data provided by CoinGecko</h6>
					<p className="p-api">
						Public API* has a rate limit of 10-30 calls/minute
					</p>
				</div>
			</div>
		</div>
	);
};

export default Marketplace;

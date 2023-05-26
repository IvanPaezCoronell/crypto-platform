import CoinRow from './CoinRow';

const titles = ['#', 'Coin', 'Price', 'Price Change'];

const TableCoinsFilter = ({ coins, search }) => {
	const filterCoins = coins.filter(
		coin =>
			coin.name.toLowerCase().includes(search.toLowerCase()) |
			coin.symbol.toLowerCase().includes(search.toLowerCase()),
	);

	return (
		<div>
			<table className="table  mt-4 table-hover">
				<thead>
					<tr>
						{titles.map((title, index) =>
							<td key={index}>
								{title}
							</td>,
						)}
					</tr>
				</thead>
				<tbody>
					{filterCoins.map((coin, index) =>
						<CoinRow key={index} coin={coin} index={index + 1} />,
					)}
				</tbody>
			</table>
		</div>
	);
};
export default TableCoinsFilter;

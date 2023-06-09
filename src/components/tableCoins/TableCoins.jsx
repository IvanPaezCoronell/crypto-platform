import CoinRow from './CoinRow';

const titles = ['#', 'Coin', 'Price', 'Price Change'];

const TableCoins = ({ coins }) => {
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
					{coins.map((coin, index) =>
						<CoinRow key={index} coin={coin} index={index + 1} />,
					)}
				</tbody>
			</table>
		</div>
	);
};
export default TableCoins;

const CoinRow = ({ coin, index }) => {
	console.log(coin, index);
	return (
		<tr>
			<td>
				{index}
			</td>
			<td className="flex">
				<img
					src={coin.image}
					alt={coin.name}
					style={{ width: '3%' }}
					className="img-fluid me-4 image"
				/>
				<span>
					{coin.name}
				</span>

				<span className="ms-3 text-muted text-uppercase">
					{coin.symbol}
				</span>
			</td>
			<td>
				{coin.current_price}
			</td>
			<td className={coin.price_change_percentage_24h > 0 ? 'text-success' : 'text-danger'}>
				{coin.price_change_percentage_24h}
			</td>
		</tr>
	);
};

export default CoinRow;

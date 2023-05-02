const CoinRow = ({ coin, index }) => {
	console.log(coin, index);
	return (
		<tr>
			<td>
				{index}
			</td>
			<td>
        <img src={coin.image} alt={coin.name} style={{width: '3%'}} className="img-fluid me-4 image d-none d-md-block" />
        <span>
        {coin.name}

        </span>

        <span className="ms-3 text-muted text-uppercase">{coin.symbol}</span>
				
			</td>
      <td>
				{coin.current_price}
			</td>
      <td>
				{coin.price_change_percentage_24h}
			</td>
      <td>
				{coin.total_volume}
			</td>
		</tr>
	);
};

export default CoinRow;

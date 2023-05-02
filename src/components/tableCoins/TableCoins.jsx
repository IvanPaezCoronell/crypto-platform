import CoinRow from "./CoinRow";

const titles = ['#','Coin','Price', 'Price Change', '24h Volume']

const TableCoins = ({ coins }) => {
	return (
    <div> 
      <table className="table  mt-4 table-hover"> 
			<thead>
				<tr>
					{titles.map((title) => (
            <td>{title}</td>
          ))}
				</tr>
			</thead>
			<tbody>
				{coins.map((coin, index) => ( 
        <CoinRow key={index} coin={coin}  index={index + 1}/>
				))}
			</tbody>
		</table>


    </div>
		
	);
};
export default TableCoins;

import Marketplace from '../../containers/marketplace/Marketplace';
import logo from '../../assets/logo.png';
import './marketPlace.css';

const MarketplacePage = () => {
	return (
		<div>
			<div className="navbar-div">
				<nav className="navbar navbar-light bg-light">
					<div>
						<a className="navbar-brand" href="/">
							<img src={logo} />
						</a>
					</div>
				</nav>
			</div>
			<div>
				<Marketplace />
			</div>
			<footer
				className="flex-shrink-0 py-5 bg-primary text-white-50 footer"
			>
				<div className="text-center bg-primary pb-12 ">
					<small>Copyright &copy; Ivan David Paez Coronell</small>
				</div>
			</footer>
		</div>
	);
};

export default MarketplacePage;

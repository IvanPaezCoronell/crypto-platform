import { useState } from 'react';
import './navbar.css';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import { GiTwoCoins } from 'react-icons/gi';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Menu = () =>
	<>
		<p>
			<a href="#home">Home</a>
		</p>
		<p>
			<a href="#features">Create</a>
		</p>
		<p>
			<a href="#benefits">Benefits</a>
		</p>
		<p>
			<a href="#onboarding">Get Started</a>
		</p>
		<p>
			<a href="#wcrypto">About</a>
		</p>
	</>;

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);

  const navigate = useNavigate();

	return (
		<div id="home" className="navbar">
			<div className="navbar-links">
				<div className="navbar-links_logo">
					<img src={logo} alt="logo" />
				</div>

				<div className="navbar-links_container">
					<Menu />
				</div>
			</div>

			<div className="navbar-sign">
				<button onClick={() => navigate('/marketplace')}> <GiTwoCoins /> marketplace</button>
			</div>

			<div className="navbar-menu">
				{toggleMenu
					? <RiCloseLine
							color="black"
							size={27}
							onClick={() => setToggleMenu(false)}
						/>
					: <RiMenuLine
							color="black"
							size={27}
							onClick={() => setToggleMenu(true)}
						/>}

				{toggleMenu &&
					<div className="navbar-menu_container scale-up-center">
						<div className="navbar-menu_container-links">
							<Menu />
							<div className="navbar-menu_container-links-sign">
              <button onClick={() => navigate('/marketplace')}>marketplace <GiTwoCoins /></button>
										
							</div>
						</div>
					</div>}
			</div>
		</div>
	);
};

export default Navbar;

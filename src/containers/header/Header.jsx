import { useEffect, useRef } from 'react';
import './header.css';
import Typed from 'typed.js';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import wallet from '../../assets/wallet.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const textAnimation = useRef(null);
  const navigate = useNavigate();

	useEffect(() => {
		const typed = new Typed(textAnimation.current, {
			strings: [
				'Cryptocurrency trading platform, offers exchange services between cryptocurrencies and fiat currencies in around 32 countries, as well as storage and management of digital assets in 190 countries worldwide.',
			],
			startDelay: 300,
			typeSpeed: 50,
			backSpeed: 50,
			backDelay: 100,
			loop: true,
		});

		return () => {
			typed.destroy();
		};
	}, []);

	return (
		<div>
			<section className="sec-home">
				<div className="home-cta">
					<div className="cta-text">
						<span>Jump start your portfolio</span>
						<i className="bi bi-arrow-right">
							<BsFillArrowRightCircleFill />
						</i>
					</div>

					<h2 className="home-title h1">Jump start your crypto portfolio</h2>
					<p className="home-description">
						<span>
							Coinbase is the easiest place to buy and <br /> sell
							cryptocurrecy, Sign up an get started today.{' '}
						</span>
					</p>

					<div className="lead-magnet row align-items-center">
						<div className="col input-col">
							<input
								type="text"
								className="form-control input-text"
								placeholder="Email address"
							/>
						</div>

						<div className="col">
							<button onClick={() => navigate('/marketplace')} className="btn-main">Get Started</button>
						</div>
					</div>
				</div>

				<div className="home-img ">
					<img src={wallet} alt="" />
				</div>
			</section>
			<div className="title-sec-home">
				<span>
					<span ref={textAnimation}> </span>
				</span>
			</div>
		</div>
	);
};

export default Header;

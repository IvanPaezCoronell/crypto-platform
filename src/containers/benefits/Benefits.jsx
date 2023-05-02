import 'bootstrap/dist/css/bootstrap.min.css';
import './benefits.css';
import {AiFillEye} from 'react-icons/ai'
import {MdEmail, MdSecurity} from 'react-icons/md'

const Benefits = () => {
	return (
		<section id="benefits" className="sec-benefits">
			<div className="intro">
				<h3>The most trusted cryptocurrency plataform</h3>
				<p>Here are few reasons why you should choose Coinbase </p>
			</div>

			<div className="benefit-cards row">
				<div className="benefit col-md">
					<i className="icon-benefit"><AiFillEye/></i>
					<div className="description">
						<h4 className="title">Secure storage</h4>
						<p className="text">
							{' '}We store the vast majority of the digital assets in secure
							offline storage.
						</p>
					</div>
					<div className="cta">
						Learn how Coinbase keeps your funds safe and secure
					</div>
				</div>

				<div className="benefit col-md">
					<i className="icon-benefit"><MdEmail/></i>
					<div className="description">
						<h4 className="title">Protected by insurance</h4>
						<p className="text">
							Coinbase maintains crypto insurance and all USD cash balances are
							covered by FDIC insurance, up to a maximum of $250,000.
						</p>
					</div>
					<div className="cta">
						Learn how your crypto is covered by our insurance policy
					</div>
				</div>

				<div className="benefit col-md">
					<i className="icon-benefit"><MdSecurity/></i>
					<div className="description">
						<h4 className="title">Industry best practices</h4>
						<p className="text">
							Coinbase supports a variety of the most popular digital
							currencies.
						</p>
					</div>
					<div className="cta">
						Learn how we implement industry best practices for account security
					</div>
				</div>
			</div>
		</section>
	);
};

export default Benefits;

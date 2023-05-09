import Navbar from '../../components/navbar/Navbar';
import Header from '../../containers/header/Header';
import Features from '../../containers/features/Features';
import Benefits from '../../containers/benefits/Benefits';
import CryptoPrices from '../../containers/cryptoPrices/CryptoPrices';
import Kpis from '../../containers/kpis/Kpis';
import Onboarding from '../../containers/onboarding/Onboarding';
import Wcrypto from '../../containers/wcrypto/Wcrypto';
import Footer from '../../containers/footer/Footer';

const HomePage = () => {
	return (
		<div>
			
				<Navbar />
				<Header />
				<Features />
				<Benefits />
				<CryptoPrices />
				<Kpis />
				<Onboarding />
				<Wcrypto />
				<Footer />
			
		</div>
	);
};

export default HomePage;

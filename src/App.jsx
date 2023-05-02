
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './containers/footer/Footer'
import Header from './containers/header/Header'
import Features from './containers/features/Features'
import  Benefits  from './containers/benefits/Benefits'
import Kpis from './containers/kpis/Kpis'
import Onboarding from './containers/onboarding/Onboarding'
import Wcrypto from './containers/wcrypto/Wcrypto'
import CryptoPrices from './containers/cryptoPrices/CryptoPrices'

function App() {
  

  return (
    <>
    <Navbar/>
    <Header />
    <Features />
    <Benefits />
    <CryptoPrices />
    <Kpis/>
    <Onboarding/>
    <Wcrypto/>
    <Footer />
      
    </>
  )
}

export default App

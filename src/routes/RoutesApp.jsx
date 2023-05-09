
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import NotFoundPage from '../pages/404/NotFoundPage'
import PricesPage from '../pages/marketplace/PricesPage'
import App from '../App'


const RoutesApp = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route exact path='/' Component={App} />
        <Route path='/marketplace' Component={PricesPage} />




        <Route path='/*' Component={NotFoundPage} />
      </Routes>
    </Router>

    
    </div>
  )
}

export default RoutesApp

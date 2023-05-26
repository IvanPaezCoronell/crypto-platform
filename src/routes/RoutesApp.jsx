
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import NotFoundPage from '../pages/404/NotFoundPage'
import MarketplacePage from '../pages/marketplace/MarketplacePage'
import App from '../App'


const RoutesApp = () => {
  return (
    <div>
      <Router>
      <Routes>
        <Route exact path='/' Component={App} />
        <Route path='/marketplace' Component={MarketplacePage} />




        <Route path='/*' Component={NotFoundPage} />
      </Routes>
    </Router>

    
    </div>
  )
}

export default RoutesApp

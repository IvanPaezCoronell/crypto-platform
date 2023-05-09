import { useNavigate } from "react-router-dom"
import {BiArrowBack} from 'react-icons/bi'


const NotFoundPage = () => {

  const navigate = useNavigate();

  return (
    <div className="container">
      
            <div className="text-center">
                <h1 className="display-1 fw-bold">404</h1>
                <p className="fs-3"> Opps! Page not found.</p>
                <p className="lead">
                    The page you’re looking for doesn’t exist.
                  </p>
                <button onClick={() => navigate('/')} className="btn btn-primary"><i><BiArrowBack/> </i>  Go Home</button>
            </div>
        
      
    </div>
  )
}

export default NotFoundPage

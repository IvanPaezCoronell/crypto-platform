import './onboarding.css'
import {FiUserPlus} from 'react-icons/fi'
import {RiBankLine,RiCoinsFill} from 'react-icons/ri'

const Onboarding = () => {
  return (
    
    <section id='onboarding' className="sec-onboarding">
        <div className="intro">
            <h3>Get started in a few minutes </h3>
            <p>Coinbase supports a variety of the most popular digital corruncies</p>
        </div>

        <div className="steps">
            <div className="icon-desc">
                <i className="icon-onboarding"><FiUserPlus/></i>
                <h4 className="title">Create an account</h4>
            </div>

            <div className="step-separator"> </div>

            <div className="icon-desc">
                <i className="icon-onboarding"><RiBankLine/></i>
                <h4 className="title">Link your bank account</h4>
            </div>

            <div className="step-separator"> </div>

            <div className="icon-desc">
                <i className="icon-onboarding"><RiCoinsFill/></i>
                <h4 className="title">Purchase some coin</h4>
            </div>


        </div>

    </section>
  )
}

export default Onboarding

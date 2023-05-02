import './wcrypto.css'
import {ImQuotesLeft} from 'react-icons/im'

const Wcrypto = () => {
  return (
    
    <section id='wcrypto' className="sec-what-crypto">

    <h2>What is Cryptocurrency?</h2>
    <p><i><ImQuotesLeft/></i> A cryptocurrency, crypto-currency, or crypto is a digital currency designed to work as a medium of exchange
        through a computer network that is not reliant on any central authority, such as a government or bank, to
        uphold or maintain it. It is a decentralized system for verifying that the parties to a transaction have the
        money they claim to have, eliminating the need for traditional intermediaries, such as banks, when funds are
        being transferred between two entities.
      <br/><br/>
        Individual coin ownership records are stored in a digital ledger, which is a computerized database using
        strong cryptography to secure transaction records, control the creation of additional coins, and verify the
        transfer of coin ownership. Despite their name, cryptocurrencies are not considered to be currencies in the
        traditional sense, and while varying treatments have been applied to them, including classNameification as
        commodities, securities, and currencies, cryptocurrencies are generally viewed as a distinct asset className in
        practice. Some crypto schemes use validators to maintain the cryptocurrency. In a proof-of-stake
        model, owners put up their tokens as collateral. In return, they get authority over the token in proportion
        to the amount they stake. Generally, these token stakers get additional ownership in the token over time via
        network fees, newly minted tokens, or other such reward mechanisms.
    </p>

</section>

)
}

export default Wcrypto

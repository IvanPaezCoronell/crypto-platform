import './kpis.css'

const Kpis = () => {
  return (
    
    <section id='kpis' className="sec-kpis">
        <div className="kpi col-md">
            <span className="number">$473B</span>
            <span className="text">Quarterly volume traded</span>
        </div>

        <div className="kpi col-md">
            <span className="number">8+</span>
            <span className="text">Countries supported</span>
        </div>

        <div className="kpi col-md">
            <span className="number">13+M</span>
            <span className="text">Verified users</span>
        </div>
    </section>

  )
}

export default Kpis

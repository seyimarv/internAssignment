import React from 'react'
import './Recentactivity.scss'


const Recentactivity = () => {

    return (
        <>
        <section className='recent_activity'>
            <h6>Recent activity</h6>
            <div>
            <section className="recent_activity_subsection">
                <p>Date</p>
                <p>Description</p>
                <p>Amount</p>
            </section>
            <section className="recent_activity_subsection">
                <p>1/1/21</p>
                <p>Sent</p>
                <p>N100.00</p>
            </section>
            <section className="recent_activity_subsection">
                <p>2/2/21</p>
                <p>Recieved</p>
                <p>N200.00</p>
            </section>
            <section className="recent_activity_subsection">
                <p>3/3/21</p>
                <p>Sent</p>
                <p>N300.00</p>
            </section>    
            </div>
        
        </section>

        </>
    )
}


export default Recentactivity
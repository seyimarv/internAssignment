import React from 'react'
import './Recentactivity.scss'
import Hiv from '../../assests/hiv ribbon.png'
import Lungs from '../../assests/Lungs.png'
import BloodPressure from '../../assests/checking-blood-pressure_1406726.jpg'

const Recentactivity = () => {

    return (
        <>
        <section className='recent_activity'>
            <h6>Recent activity</h6>
            <section className="recent_activity_subsection">
                 <img src={Hiv} alt="Hiv"/>
                <p>HIV Blood Draw Test</p>
                <p>A100</p>
            </section>
            <section className="recent_activity_subsection">
                <img src={Lungs} alt="lungs"/>
                <p>TB Radiology XRay</p>
                <p>A30</p>
            </section>
            <section className="recent_activity_subsection">
                <img src={BloodPressure} alt="" style={{borderRadius: '50%'}}/>
                <p>Blood Pressure Check</p>
                <p>A10</p>
            </section>
            <div>
                
            </div>
            {/* <hr style={{
                marginTop: '3px',
                border: '1px solid grey'
            }} /> */}

        
        </section>

        </>
    )
}


export default Recentactivity
import React from 'react'
import Header from '../../components/Header/Header'
import './Homepage.scss'
import { Button } from '@material-ui/core';
import Recentactivity from '../../components/RecentActivity/Recentactivity';
import Footer from '../../components/Footer/Footer';




const Homepage = ({match}) => {
    return (
        <div className="homepage">
            <Header />
            <section className='section_1 mt-4 d-block text-center'>
               <p>WALLET BALANCE</p>
               <p>TOKEN BALANCE:</p>
               <p>NAIRA BALANCE:</p>
            </section>
            <section id="section_2">
                <h6>
                    Select Currency:
              </h6>
              <div className="select_currency_box d-flex">
                <p id="currency_type">Token
                </p>
                <p id="currency_value">0.000000001</p>
              </div>

                <div className='buttons d-flex'>
                    <Button>
                       Send
                    </Button>
                    <Button>
                       Recieve
                    </Button>
                </div>

            </section>
            <Recentactivity />   
            <Footer match={match}/>
        </div>
    )
}


export default Homepage
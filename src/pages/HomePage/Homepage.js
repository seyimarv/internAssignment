import React from 'react'
import Header from '../../components/Header/Header'
import './Homepage.scss'
import { Button } from '@material-ui/core';
import Recentactivity from '../../components/RecentActivity/Recentactivity';
import Footer from '../../components/Footer/Footer';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';



const Homepage = ({match}) => {
    return (
        <div className="homepage">
            <Header />
            <section className='section_1 mt-4 d-flex'>
                <section className="sub_section_1 w-50 add_border">
                    <h5 id="red_section">
                        AFYA
                    </h5>
                    <h4>
                        143.00
                    </h4>
                    <p>
                        Balance
                    </p>

                </section>
                <section className="sub_section_1 w-50">
                    <h5>
                        ZAR
                    </h5>
                    <h4>
                        R21.00
                    </h4>
                    <p>
                        Equivalent
                    </p>
                </section>
            </section>
            <section id="section_2">
                <h6>
                    Select Currency:
              </h6>
              <div className="select_currency_box d-flex">
                <p id="currency_type" className="d-flex">AFYA
                <ArrowDropDownIcon />
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
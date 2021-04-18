import React from 'react'
import './header.scss'
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';


const Header = () => {
    return (
        <header>
            <div id="logo">
                <LocalHospitalOutlinedIcon />
                <span>ribbon</span>
            </div>
            <nav>
                <ul>
                    <li className=''>
                      <div>
                      <AccountCircleIcon className="account_icon"/>
                      </div>
                    </li>
                    <li>
                       <div>
                       <NotificationsIcon className="notification_icon"/>
                       </div>
                    </li>

                </ul>
            </nav>
        </header>
    )
}


export default Header
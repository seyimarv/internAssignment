import React from 'react'
import './header.scss'
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';



const Header = () => {
    return (
        <header>
            <div id="logo">
                <span>LOGO</span>
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
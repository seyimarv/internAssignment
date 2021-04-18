import React from 'react'
import './footer.scss'
import HomeIcon from '@material-ui/icons/Home';
import MenuIcon from '@material-ui/icons/Menu';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import {Link} from 'react-router-dom'




const Footer = ({match}) => {

   console.log(match.path)
   console.log(match.params)
   const {pageName} = match.params
    return (
        <footer className='footer'>
          <hr />
            <nav className="">
                <Link to='/' className="menu_item">
                    <HomeIcon  className={`${match.path === "/" ? "active" : ""}`}/>
                    <p className={`${match.path === "/" ? "active" : ""}`}>Home</p>
                </Link>
                <Link to={`/innerpage/activity`} className="menu_item">
                   <MenuIcon className={`${pageName === "activity" ? "active" : ""}`}/>
                    <p className={`${pageName === "activity" ? "active" : ""}`}>Activity</p>
                </Link>
                <Link to={`/innerpage/wallet`} className="menu_item">
                   <AccountBalanceWalletIcon className={`${pageName === "wallet" ? "active" : ""}`}/>
                    <p className={`${pageName === "wallet" ? "active" : ""}`}>Wallet</p>
                </Link>
                <Link to={`/innerpage/Market`} className="menu_item">
                   <AccountBalanceIcon className={`${pageName === "Market" ? "active" : ""}`}/>
                    <p  className={`${pageName === "Market" ? "active" : ""}`}>Market</p>
                </Link>
                <Link to={`/innerpage/Earn`} className="menu_item">
                   <BusinessCenterIcon className={`${pageName === "Earn" ? "active" : ""}`} />
                    <p className={`${pageName === "Earn" ? "active" : ""}`}>Earn</p>
                </Link>
            </nav>

        </footer>

    )

}

export default Footer
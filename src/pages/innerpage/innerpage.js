import React from 'react'
import Footer from '../../components/Footer/Footer'


const InnerPage = ({match}) => {
    const {pageName} = match.params
    const pageUpperCaseName = pageName.toUpperCase()
    return (
        <div className="text-center">
         <h6 style={{
             marginTop: "30px", 
             color: "black",
              fontFamily: 'Raleway',
              fontSize: "30px",
              fontWeight: "800",
               lineHeight: "72px",
                margin:" 0 0 24px",
         }}>{pageUpperCaseName}</h6>

         <div style={{
             position: 'fixed',
             bottom: "0px",
             width: "100%"
         }}>
             <Footer match={match} />
         </div>
        </div>
    )
}

export default InnerPage
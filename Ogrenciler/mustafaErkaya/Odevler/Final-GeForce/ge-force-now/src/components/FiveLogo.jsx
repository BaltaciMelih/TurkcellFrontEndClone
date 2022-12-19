import React from 'react'
import fiveLogo from '../assets/images/fivelogo.png';
import twoLogo from '../assets/images/twologo.png';
const FiveLogo = () => {
  return (
    <div >
        <img className='img-fluid d-none d-sm-block' src={fiveLogo} alt="" />
        <img className='w-100 d-block d-sm-none mx-auto ' src={twoLogo} alt="" />
    </div>
  )
}

export default FiveLogo
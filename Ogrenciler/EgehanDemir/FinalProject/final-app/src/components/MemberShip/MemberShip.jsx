import React from 'react'
import './MemberShip.scss'
import {NavLink} from 'react-router-dom'
import Button from '../DefaultButton'

const MemberShip = () => {
  return (
    <React.Fragment>
      <div className="col-12 col-sm-4" id='memberShipCol1'>
      <ul className="price">
        <li className="header">BASIC</li>
        <li className="grey">Free</li>
        <div className="memberShipImg">
        <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/8AA88BF6-C57A-44FB-8BCC-0828F86E826B.svg" alt="" />
        </div>
        <div className="containerOkSign">
        <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/5CDA51EE-6F66-4B86-A751-B176DD50A64E.svg" alt="" />
          <li>Standart Access</li>
        </div>
          <div className="containerOkSign">
          <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/5CDA51EE-6F66-4B86-A751-B176DD50A64E.svg" alt="" />
            <li>1-hr session length</li>
          </div>
          <div className="containerOkSign">
            <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/99EEACE6-8D26-4CF4-AAD1-608B2B7826F7.svg" alt="" />
            <li id='grey-medium'>Standart Access</li>
          </div>
          <div className="containerOkSign">
          <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/5CDA51EE-6F66-4B86-A751-B176DD50A64E.svg" alt="" />
            <li>1-hr session length</li>
          </div> 
        <li className="grey"><NavLink to="" className="button"><Button buttonIsim={"JOİN NOW"}/></NavLink></li>
      </ul>
      </div>
      <div className="col-12 col-sm-4 justify-content-center" id='memberShipCol2'>
      <ul className="price">
        <li className="headerStandart">STANDART</li>
        <li className="grey">15$/month</li>
        <div className="memberShipImg">
        <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/8AA88BF6-C57A-44FB-8BCC-0828F86E826B.svg" alt="" />
        </div>
        <div className="containerOkSign">
          <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/1562E835-1FF5-4B3E-A1D0-73FBD2EB6955.svg" alt="" />
          <li>Standart Access</li>
        </div>
          <div className="containerOkSign">
          <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/1562E835-1FF5-4B3E-A1D0-73FBD2EB6955.svg" alt="" />
            <li>1-hr session length</li>
          </div>
          <div className="containerOkSign">
          <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/1562E835-1FF5-4B3E-A1D0-73FBD2EB6955.svg" alt="" />
            <li>Standart Access</li>
          </div>
          <div className="containerOkSign">
          <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/1562E835-1FF5-4B3E-A1D0-73FBD2EB6955.svg" alt="" />
            <li>1-hr session length</li>
          </div>  
        <li className="grey"><NavLink to="" className="button"><Button buttonIsim={"JOİN NOW"}/></NavLink></li>
      </ul>
      </div>
      <div className="col-12 col-sm-4" id='memberShipCol3'>
      <ul className="price">
        <li className="header">PREMIUM</li>
        <li className="grey">30$/month</li>
        <div className="memberShipImg">
        <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/8AA88BF6-C57A-44FB-8BCC-0828F86E826B.svg" alt="" />
        </div>
        <div className="containerOkSign">
          <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/5CDA51EE-6F66-4B86-A751-B176DD50A64E.svg" alt="" />
          <li>Standart Access</li>
        </div>
          <div className="containerOkSign">
          <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/5CDA51EE-6F66-4B86-A751-B176DD50A64E.svg" alt="" />
            <li>1-hr session length</li>
          </div>
          <div className="containerOkSign">
            <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/99EEACE6-8D26-4CF4-AAD1-608B2B7826F7.svg" alt="" />
            <li id='grey-medium'>Standart Access</li>
          </div>
          <div className="containerOkSign">
          <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/5CDA51EE-6F66-4B86-A751-B176DD50A64E.svg" alt="" />
            <li>1-hr session length</li>
          </div>  
        <li className="grey"><NavLink to="" className="button"><Button buttonIsim={"JOİN NOW"}/></NavLink></li>
      </ul>
      </div>
    </React.Fragment>
  )
}

export default MemberShip;
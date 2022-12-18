import React from 'react'
import PropTypes from "prop-types";
import './ClickBox.scss'

const ClickboxComponent = ({buttonClickName}) => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-12 col-sm-12" id='clickBoxColumn'>
          <button><img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/614780D5-9F60-4522-9BF8-91A402CE7A02.svg" alt=""></img></button>
          <button>{buttonClickName}</button>
        </div>
      </div>
    </React.Fragment>
  )
}

ClickboxComponent.propTypes = {
    buttonIsim : PropTypes.string.isRequired,
  };
  
  ClickboxComponent.defaultProps = {
    buttonIsim : "My Button",
  };

export default ClickboxComponent;
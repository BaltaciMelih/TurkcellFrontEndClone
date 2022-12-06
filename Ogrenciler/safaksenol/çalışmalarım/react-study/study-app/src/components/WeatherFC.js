
import React from 'react';

function WeatherFC(props) {
    return (
      //Function componentlerde props ile veri gönderme
    <div>Bugün hava <span style={props.style}>{props.status}</span></div>
  )
}

//Varsayılan değer belirleme
WeatherFC.defaultProps = {
    status: "güneşli",
    style: { backgroundColor: "yellow", color: "white" },
};

export default WeatherFC;
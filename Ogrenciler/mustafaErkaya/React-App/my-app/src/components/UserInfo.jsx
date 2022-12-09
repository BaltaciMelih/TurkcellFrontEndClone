import React from 'react'

const UserInfo = (props) => {


  return (
    <div>
        <h2>{props.data.name} {props.data.age}</h2>
        <button onClick={() => props.setData({...props.data, age:30})}>Değiştir</button>
    </div>
  )
}

export default UserInfo
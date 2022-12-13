import React from 'react'
import { Outlet, useParams } from "react-router-dom";

const Spor = () => {
  const { name } = useParams();
  return (
    <div>Spor
    <Outlet />
    {name}
    </div>
  )
}

export default Spor
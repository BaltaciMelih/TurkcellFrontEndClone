import { useState } from 'react';

function IfElseSample() {
  const [userStatus, setUserStatus] = useState('offline');

  const changeUserStatus = () => {
    /*     if (userStatus === 'offline') {
      setUserStatus('online');
    } else {
      setUserStatus('offline');
    } */

    userStatus === 'offline' ? setUserStatus('online') : setUserStatus('offline');
  };

  return (
    <>
      <button onClick={() => changeUserStatus()}>Change Status</button>

      <h1>User Status: {userStatus}</h1>
    </>
  );
}

export default IfElseSample;

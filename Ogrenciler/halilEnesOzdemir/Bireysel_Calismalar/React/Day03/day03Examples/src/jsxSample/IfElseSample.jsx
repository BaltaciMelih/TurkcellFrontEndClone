function IfElseSample() {
  let userStatus = 'online';

  return <>{userStatus == 'offline' ? <p>User is Offline!</p> : <p>User is Online!</p>}</>;
}

export default IfElseSample;

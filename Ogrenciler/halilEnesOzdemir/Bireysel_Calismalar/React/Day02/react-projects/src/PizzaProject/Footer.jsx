import React from 'react';

function Footer() {
  // One Way Binding
  let name = 'Halil Enes Özdemir';
  return (
    <>
      <footer class='w3-center w3-black w3-padding-48 w3-xxlarge'>
        <p>
          Powered by {name}
          <a
            href='https://www.w3schools.com/w3css/default.asp'
            title='W3.CSS'
            target='_blank'
            class='w3-hover-text-green'></a>
        </p>
      </footer>
    </>
  );
}

export default Footer;

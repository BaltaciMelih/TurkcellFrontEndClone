import React from 'react'
import '../sass/_home.scss';
import styled from "styled-components";
import Button from '../components/DefaultButton'
import MemberShip from '../components/MemberShip/MemberShip';

const Home = () => {
  const myImage = styled.img`
    width: 183px;
    height: 183px;
    object-fit: contain;
    `;
  const HomeImage = styled(myImage)`
    src: ${(props) => (props.src ? `${props.src}` : "")}
    `;
  return (
    <React.Fragment>
      <div id="myCarousel" className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12">
            <div className="carousel slide" data-bs-touch="false">
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                  <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/CB5C08B8-E196-4604-AFE5-2F1D93A25767.png" className="d-block w-100" alt="..."></img>
                  <div class="carousel-caption d-md-block">
                    <h1>Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dolores!</p>
                    <Button buttonIsim={"REGISTER"} className="btn btn-outline-success" type="submit"></Button>
                    <br />
                    <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/181B49D4-8659-464D-A40F-E735B4249690.svg" alt="" />
                  </div>
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span aria-hidden="true"><img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/1B87D60A-E56B-4366-95C8-E6D02E1B2CBC.svg" alt="" /></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span aria-hidden="true"><img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/292765E5-EC6B-4C0A-B916-4A7242FEBA2E.svg" alt="" /></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" id='carouselCaptionResponsive'>
        <h1>Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, dolores!</p>
        <Button buttonIsim={"REGISTER"} className="btn btn-outline-success" type="submit"></Button>
        <br />
        <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/181B49D4-8659-464D-A40F-E735B4249690.svg" alt="" />
      </div>
      <div id="positionContainer" className="container-fluid">
        <div className="row">
          <div className="col-12 col-sm-12">
            <div id="features">
              <div className="row">
                <div className="col-12 col-sm-4">
                  <h1 id="featuresHeader">Features</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div className="col-12 col-sm-4">
                  <div className="flexDivs">
                    <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/F25D4AEE-2A07-43CE-BD1C-9D71B8010C50.svg" alt="" />
                    <p>Lorem ipsum dolor sit amet</p>
                  </div>
                  <div className="flexDivs">
                    <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/CF5B0337-5AD2-4DED-93F7-1D0D4F1F431B.svg" alt="" />
                    <p>Lorem ipsum dolor sit amet</p>
                  </div>
                </div>
                <div className="col-12 col-sm-4">
                  <div className="flexDivs">
                    <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/AB8B1F2A-57CD-4015-BB22-8526E4F2329F.svg" alt="" />
                    <p>Lorem ipsum dolor sit amet</p>
                  </div>
                  <div className="flexDivs">
                    <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/B7FE2104-BA05-4ECD-9E70-8A65C9FDB158.svg" alt="" />
                    <p>Lorem ipsum dolor sit amet</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" id='positionContainer2'>
        <div className="row pt-5">
          <div className="col-12 col-sm-12 pt-5">
            <h3>On all your screens at home and on the go</h3>
          </div>
        </div>
        <div className="availableContainer">
          <div className="row">
            <div className="col-4 col-sm-4" id="windows">
              <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/B5E506C1-478B-43E7-A192-A8EDCD2222F7.svg" alt="" />
              <p>Available on Windows</p>
            </div>
            <div className="col-4 col-sm-4" id="mac">
              <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/B9F2C037-179B-4C7E-B3B1-D7440F430386.svg" alt="" />
              <p>Available on Mac</p>
            </div>
            <div className="col-4 col-sm-4" id="android">
              <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/FF527D5C-B6BD-4D1E-81ED-11062B23BF5B.svg" alt="" />
              <p>Available on Android</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" id='gameContainer'>
        <p>Choose the game you want to play</p>
        <div className="row mb-3">
          <div className="col-6 col-sm-2">
            <HomeImage src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/993DD7F2-AEEB-426A-AC00-78DCD0D16BC0.png' />
          </div>
          <div className="col-6 col-sm-2">
            <HomeImage src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/27E1A8E5-1616-476A-AF89-458B7A157F45.png' />
          </div>
          <div className="col-6 col-sm-2">
            <HomeImage src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/14421527-7EDA-4796-8072-56A6B6983386.png' />
          </div>
          <div className="col-6 col-sm-2">
            <HomeImage src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/5AAA7071-6726-42D1-9736-85112904BB53.png' />
          </div>
          <div className="col-6 col-sm-2">
            <HomeImage src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/10E41BC5-A4D2-400C-B114-3DBF35FD8187.png' />
          </div>
          <div className="col-6 col-sm-2">
            <HomeImage src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/4342EB72-DB92-4EF2-BB5A-42C67F70955D.png' />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-6 col-sm-2">
            <HomeImage src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/D009102F-16AD-4AD1-B6D1-0A1684943863.png' />
          </div>
          <div className="col-6 col-sm-2">
            <HomeImage src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/338725A2-A150-44BE-84D0-94778A025D9F.png' />
          </div>
          <div className="col-6 col-sm-2">
            <HomeImage src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/3C259B53-7348-4450-9407-2D0F926BE0AC.png' />
          </div>
          <div className="col-6 col-sm-2">
            <HomeImage src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/3B91CF0B-574D-4A8E-B62C-1288B5EEAF8C.png' />
          </div>
          <div className="col-6 col-sm-2">
            <HomeImage src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/AC1594DE-B4D4-409E-85FB-1FC11F0B5F1E.png' />
          </div>
          <div className="col-6 col-sm-2">
            <HomeImage src='https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/C91F4D7D-6E53-4462-B39B-19518575EC10.png' />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-12" id='gamesButton'>
            <Button buttonIsim={"SEE ALL GAMES"} type="submit"></Button>
          </div>
        </div>
      </div>
      <div className="container-fluid" id='memberShip'>
        <div className="row">
          <MemberShip />
        </div>
      </div>
      <div className="container-fluid" id='secondCarousel'>
        <div className="row">
            <div className="carousel slide" data-bs-touch="false">
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">           
                  <div className="container" id='innerCarouselContainer'>
                    <div className="row">
                      <div className="col-12 col-sm-4" id='innerCarouselImg'>
                      <img src={require('../images/mainPageCarousel.jpg')} alt="" /> 
                      </div>
                      <div className="col-12 col-sm-8" id='innerCarouselText'>
                      <p>GAMING - AUGUST 11, 2020</p>                    
                      <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus curvus orci et!</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus orci et ipsum suscipit vehicula Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>                   
                      <Button buttonIsim={"READ MORE"} className="btn btn-outline-success" type="submit"></Button>
                      </div>
                    </div>  
                  </div>        
                </div>
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span aria-hidden="true"><img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/1B87D60A-E56B-4366-95C8-E6D02E1B2CBC.svg" alt="" /></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span aria-hidden="true"><img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/292765E5-EC6B-4C0A-B916-4A7242FEBA2E.svg" alt="" /></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
        </div>
      </div>
      <footer>
      <div className="container-fluid" id='footerImg'>
        <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/08875D78-45E1-4C22-A2B3-868CE0F21323.png" alt="" />
      </div>
      </footer>
      <footer>
        <div className="container-fluid" id='responsiveFooter'>
          <img src="https://cdn.zeplin.io/5f91645bc7d3b352a5fe0ebd/assets/0E4A090D-5867-42E9-A731-99C2927CF1A8.png" alt="" />
        </div>
      </footer>
    </React.Fragment>
  )
}

export default Home;
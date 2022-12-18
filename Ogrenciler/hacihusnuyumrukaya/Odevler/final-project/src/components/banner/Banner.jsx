import React from "react";
import styles from "./Banner.module.scss";
import { ButtonTest } from "../index";
import banner from "../../images/hero-banner.png";
import bannermobil from "../../images/19-gfn-web-kv-wolfenstein-v-3-no-copy.png";
import carouselleft from "../../images/icon-arrow-left.svg";
import carouselright from "../../images/icon-arrow-right.svg";
import sliderDots from "../../images/slider-dots.png";
import sliderDots2 from "../../images/slider2.png";
import sliderDots3 from "../../images/slider3.png";
import { Nav } from "react-bootstrap";
 const Banner= () => {
  return <div className={styles.banner}> 
    <div className={styles.desktop}>
    <div id="carouselCaptions" className="carousel slide" data-bs-ride="false">
      <div className="carousel-indicators" >
        <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
        <img alt="" src={banner} className={styles.imagecarousel}/>
          <div className="carousel-caption">
            <div className={styles.Gameplustitle}>Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!
            <h3 className={styles.Lorem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor augue vel porta ullamcorper.</h3>
            <div className={styles.buttonbanner}><Nav.Link href="/register"><ButtonTest text={"REGISTER"}></ButtonTest></Nav.Link></div> 
            <img alt="" src={sliderDots} />
          </div>
        </div>
     </div>
    <div className="carousel-item">
    <img alt="" src={banner} className={styles.imagecarousel}/>
       <div className="carousel-caption">
        <div className={styles.Gameplustitle}>Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!
         <h3 className={styles.Lorem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor augue vel porta ullamcorper.</h3>
         <div className={styles.buttonbanner}><Nav.Link href="/register"><ButtonTest text={"REGISTER"}></ButtonTest></Nav.Link></div> 
         <img alt="" src={sliderDots2} />
        </div>
      </div>
    </div>
    <div className="carousel-item">
    <img alt="" src={banner} className={styles.imagecarousel}/>
      <div className="carousel-caption">
       <div className={styles.Gameplustitle}>Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin!
         <h3 className={styles.Lorem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor augue vel porta ullamcorper.</h3>
         <div className={styles.buttonbanner}><Nav.Link href="/register"><ButtonTest text={"REGISTER"}></ButtonTest></Nav.Link></div> 
         <img alt="" src={sliderDots3} />
         </div>
       </div>
    </div>
 </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselCaptions" data-bs-slide="prev">
    <img alt="" src={carouselleft} />
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselCaptions" data-bs-slide="next">
    <img alt="" src={carouselright} />
    </button>
</div>
</div>
    
    <div className={styles.mobile}>
          <img alt="" src={bannermobil}  className={styles.imagecarousel}/>
          <div className={styles.RectangleCopy}>
          <h1 >Gameplus ile ayrıcalıklı GeForce Now deneyimine hoşgeldin! </h1>
          <h5 >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempor augue vel porta ullamcorper.</h5>
          <div className={styles.buttonbanner}><Nav.Link href="/register"><ButtonTest text={"REGISTER"}></ButtonTest></Nav.Link></div> 
                <img alt="" src={sliderDots} />
        </div>
    </div>
  </div>;
};

export default Banner;

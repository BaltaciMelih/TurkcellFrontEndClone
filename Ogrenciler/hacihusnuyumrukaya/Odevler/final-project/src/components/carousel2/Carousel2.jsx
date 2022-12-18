import React from "react";
import styles from "./Carousel2.module.scss";
import carouselleft from "../../images/icon-arrow-left.svg";
import carouselright from "../../images/icon-arrow-right.svg";
import kol from "../../images/kol.png";
import sliderDots from "../../images/slider-dots.png";
 const Carousel2= () => {

  return <div > 
  <div className={styles.desktop}>
  <div className={styles.carouselback}>
      <div id="caruselcontrol" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className={styles.Box}>
            <img alt="" src={kol} className={styles.kol} />
              <div  className={styles.carouselright}>
                <span className={styles.lorem}>GAMING - AUGUST 11, 2020</span>
                <span className={styles.lorem2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus curvus orci et!</span>
                <span className={styles.lorem3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus orci et ipsum suscipit vehicula Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                <button className={styles.buttoncarousel}>READ MORE</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
              <div className={styles.Box}>
                <img alt="" src={kol} className={styles.kol} />
                  <div  className={styles.carouselright}>
                    <span className={styles.lorem}>GAMING - AUGUST 11, 2020</span>
                    <span className={styles.lorem2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus curvus orci et!</span>
                    <span className={styles.lorem3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus orci et ipsum suscipit vehicula Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                    <button className={styles.buttoncarousel}>READ MORE</button>
                  </div>
                </div>
          </div>
          <div className="carousel-item">
          <div className={styles.Box}>
            <img alt="" src={kol} className={styles.kol} />
              <div  className={styles.carouselright}>
                <span className={styles.lorem}>GAMING - AUGUST 11, 2020</span>
                <span className={styles.lorem2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus curvus orci et!</span>
                <span className={styles.lorem3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus orci et ipsum suscipit vehicula Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                <button className={styles.buttoncarousel}>READ MORE</button>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#caruselcontrol" data-bs-slide="prev">
        <img alt="" src={carouselleft} className={styles.leftIcon}/>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#caruselcontrol" data-bs-slide="next">
        <img alt="" src={carouselright} />
        </button>
      </div>
    </div>
  </div>

   <div className={styles.mobile}>
     <div className={styles.carouselback}>
         <img alt="" src={kol} className={styles.kol} />
             <div  className={styles.carouselright}>
                <span className={styles.lorem}>GAMING - AUGUST 11, 2020</span>
                <span className={styles.lorem2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus curvus orci et!</span>
                <span className={styles.lorem3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus orci et ipsum suscipit </span>
                <button className={styles.buttoncarousel}>READ MORE</button>
              </div>
             <img alt="" src={sliderDots}  className={styles.sliderDots}/>  
      </div>
   </div>
  </div>; 
};

export default Carousel2;

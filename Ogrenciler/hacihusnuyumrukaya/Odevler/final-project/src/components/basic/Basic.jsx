import React from "react";
import styles from "./Basic.module.scss";
import stroke from "../../images/stroke.svg";
import stroke2 from "../../images/stroke2.svg";
const Basic= () => {

  return <div className={styles.basic}> 

  <div className={styles.Lorem}>Lorem ipsum dolor sit amet consectetur</div>
  <div className={styles.Boxs}>
      <div className={styles.Box}>
      <div className={styles.Boxhead}>BASIC</div>
      <div className={styles.Boxbody}>
        <div className="text-center">Free</div>
        <div className={styles.Line}></div>
        <div className="mt-3">
          <div className={styles.stroke}><img alt="" src={stroke} className="me-2"/>  Standart Access</div> 
          <div className={styles.stroke}><img alt="" src={stroke} className="me-2"/>  1-hr session length</div> 
          <div className={styles.stroke2}><img alt="" src={stroke} className="me-2"/>  Standart Access</div> 
          <div className={styles.stroke}><img alt="" src={stroke} className="me-2"/>  1-hr session length</div> 
        </div>
        <button className={styles.buttonbasic}>JOIN NOW</button> 
        </div>
      </div>
      <div className={styles.Box2}>
      <div className={styles.Boxhead2}>STANDART</div>
      <div className={styles.Boxbody}>
        <div className="text-center">15$/month</div>
        <div className={styles.Line}></div>
        <div className="mt-3">
          <div className={styles.stroke3}><img alt="" src={stroke2} className="me-2"/>  Standart Access</div> 
          <div className={styles.stroke3}><img alt="" src={stroke2} className="me-2"/>  1-hr session length</div> 
          <div className={styles.stroke3}><img alt="" src={stroke2} className="me-2"/>  Standart Access</div> 
          <div className={styles.stroke3}><img alt="" src={stroke2} className="me-2"/>  1-hr session length</div> 
        </div>
        <button className={styles.buttonbasic}>JOIN NOW</button> 
        </div>
      </div>

      <div className={styles.Box}>
      <div className={styles.Boxhead}>PREMIUM</div>
      <div className={styles.Boxbody}>
        <div className="text-center">30$/month</div>
        <div className={styles.Line}></div>
        <div className="mt-3">
          <div className={styles.stroke}><img alt="" src={stroke} className="me-2"/>  Standart Access</div> 
          <div className={styles.stroke}><img alt="" src={stroke} className="me-2"/>  1-hr session length</div> 
          <div className={styles.stroke2}><img alt="" src={stroke} className="me-2"/>  Standart Access</div> 
          <div className={styles.stroke}><img alt="" src={stroke} className="me-2"/>  1-hr session length</div> 
        </div>
        <button className={styles.buttonbasic}>JOIN NOW</button> 
        </div>
      </div>
  </div>
  </div>; 
};

export default Basic;

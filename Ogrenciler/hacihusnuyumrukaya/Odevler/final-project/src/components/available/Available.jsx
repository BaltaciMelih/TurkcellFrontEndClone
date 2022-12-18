import React from "react";
import styles from "./Available.module.scss";
import IconMac from "../../images/icons-mac.svg";
import IconPC from "../../images/icons-pc.svg";
import IconAndroid from "../../images/icons-android.svg";
 const Available= () => {
 
  return <div className={styles.Available}> 
 
    <div className={styles.Onallyourscreens} >On all your screens at home and on the go</div>
      <div className={styles.Boxs}>
        <div className={styles.Box}>
          <img alt="" src={IconMac}  className={styles.İcons}/>
          <span className={styles.AvailableOf}>Available on Windows</span>
          </div>
          <div className={styles.Box}>
          <img alt="" src={IconPC}  className={styles.İcons}/>
          <span className={styles.AvailableOf}>Available on Mac</span>
          </div>
          <div className={styles.Box}>
          <img alt="" src={IconAndroid}  className={styles.İcons}/>
          <span className={styles.AvailableOf}>Available on Android</span>
       </div>
    </div>
  </div>; 
};

export default Available;

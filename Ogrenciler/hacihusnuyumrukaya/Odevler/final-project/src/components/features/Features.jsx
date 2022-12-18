import React from "react";
import styles from "./Features.module.scss";
import Icon1 from "../../images/icon-feature-01.png";
import Icon2 from "../../images/group.png";
import Icon3 from "../../images/icon-feature-03.png";
import Icon4 from "../../images/group2.png";
 const Features= () => {
  return <div > 
   
   <div className={styles.Features}>
    <div className={styles.FeaturesIn}>
    <div >
        <div className={styles.FeaturesText}>Features</div>
        <div className={styles.Lorem}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
    </div>
    
    <div className={styles.Mobile}>
     <div className={styles.Bottomden}><img alt="" src={Icon1} className={styles.IconFeature1}/>
      Lorem ipsum dolor sit amet</div> 
      <div> <img alt="" src={Icon3} className={styles.IconFeature1}/>Lorem ipsum dolor sit amet</div>
    </div>
    <div className={styles.Mobile}>
      <div className={styles.Bottomden}> <img alt="" src={Icon2} className={styles.IconFeature1}/>Lorem ipsum dolor sit amet</div>
      <div> <img alt="" src={Icon4} className={styles.IconFeature1}/>Lorem ipsum dolor sit amet</div>
    </div>
    </div> 

     </div>
 
  </div>;
};

export default Features;

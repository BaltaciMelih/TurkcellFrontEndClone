import React from "react";
import styles from "./FooterRegister.module.scss";
import facebook from "../../images/icon-facebook.png";
import twitter from "../../images/icon-twitter.png";
import instagram from "../../images/icon-instagram.png";
import youtube from "../../images/icon-youtube.png";
import arrow from "../../images/icons-arrow-large.png";
 const FooterRegister= () => {

  return <div > 
  <div className={styles.desktop}>
      <div className={styles.footertab}>
        <div className={styles.Games}>Games<br></br>
                                      Membership<br></br>
                                      Download
        </div>
      
        <div className={styles.FollowUs}><div className={styles.FollowUsIn}>Follow Us!</div><br></br>
        <img alt="" src={facebook} className="me-3"/>
        <img alt="" src={twitter}  className="me-3"/>
        <img alt="" src={instagram} className="me-3" />
        <img alt="" src={youtube} className="me-3" />
        </div>
        <div className={styles.Language}><div className={styles.LanguageIn}>Site Language</div><br></br>
        English <img alt="" src={arrow}  />
        </div>
      </div>
      <div className={styles.footerbottom}>
        <span className={styles.Terms}>Terms of Use</span>
        <span className={styles.Privacy}>Privacy Policy</span>
        <span className={styles.Cookies}>Cookies</span>
        <span className={styles.Copyright}>Tüm hakları saklıdır.</span>
      </div>
  </div>
        <div className={styles.mobile}>
            <div className={styles.footertab}>
                                          <div>    Games<br></br>
                                                Membership<br></br>
                                                Download<br></br></div>                                 
                                              <div className="mt-3"><b> Follow Us!</b> </div>
                <div className="mb-3"><img alt="" src={facebook} className="ms-3 me-3"/>
                  <img alt="" src={twitter}  className="me-3"/>
                  <img alt="" src={instagram} className="me-3" />
                  <img alt="" src={youtube} className="me-3" /></div> 
                  
                  <b>Site Language</b>
                  <div> English <b><img alt="" src={arrow}  /></b></div>
                  
            </div>
            <div className={styles.footerbottom}>
            <div className="mb-1">Terms of Use</div>
            <div className="mb-1">Privacy Policy</div>
            <div className="mb-1">Cookies</div>
            <div className={styles.copy}> Tüm hakları saklıdır.</div>
            </div>
        </div>
  </div>; 
};

export default FooterRegister;

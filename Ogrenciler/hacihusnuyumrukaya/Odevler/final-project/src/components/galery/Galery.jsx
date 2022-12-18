import React from "react";
import styles from "./Galery.module.scss";
import Galery1 from "../../images/galery1.png";
import Galery2 from "../../images/galery2.png";
import Galery3 from "../../images/galery3.png";
import Galery4 from "../../images/galery4.png";
import Galery5 from "../../images/galery5.png";
import Galery6 from "../../images/galery6.png";
import Galery8 from "../../images/gfn-spotlight-world-of-warships-fb-ig-2048-x-2048(2).png";
import Galery7 from "../../images/gfn-spotlight-world-of-warships-fb-ig-2048-x-2048(1).png";
import Galery9 from "../../images/gfn-spotlight-world-of-warships-fb-ig-2048-x-2048(3).png";
import Galery10 from "../../images/gfn-spotlight-world-of-warships-fb-ig-2048-x-2048(4).png";
import Galery11 from "../../images/gfn-spotlight-world-of-warships-fb-ig-2048-x-2048(5).png";
import Galery12 from "../../images/gfn-spotlight-world-of-warships-fb-ig-2048-x-2048(6).png";
import { ButtonTest } from "../index";
import { Nav } from "react-bootstrap";

 const Galery= () => {
  return <div className={styles.Galery}> 
    
    <div className={styles.Choose}>Choose the game you want to play </div>
    <div className={styles.Boxs}>
       <div className={styles.Box}><img alt="" src={Galery1} /></div>
       <div className={styles.Box}><img alt="" src={Galery2} /></div>
       <div className={styles.Box}><img alt="" src={Galery3} /></div>
       <div className={styles.Box}><img alt="" src={Galery4} /></div>
       <div className={styles.Box}><img alt="" src={Galery5} /></div>
       <div className={styles.Box}><img alt="" src={Galery6} /></div>
       <div className={styles.Box2}><img alt="" src={Galery7} /></div>
       <div className={styles.Box2}><img alt="" src={Galery8}/></div>
       <div className={styles.Box2}><img alt="" src={Galery9}/></div>
       <div className={styles.Box2}><img alt="" src={Galery10}/></div>
       <div className={styles.Box2}><img alt="" src={Galery11}/></div>
       <div className={styles.Box2}><img alt="" src={Galery12}/></div>
    </div>
    <div className={styles.buttons} ><Nav.Link href="/games"><ButtonTest text={"SEE ALL GAMES"} href="/register"></ButtonTest></Nav.Link></div>
  </div>;
};

export default Galery;

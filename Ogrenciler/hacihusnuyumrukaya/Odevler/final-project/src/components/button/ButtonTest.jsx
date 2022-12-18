import React from "react";
import styles from "./ButtonTest.module.scss";


 const ButtonTest= (props) => {
  const text=props.text;
  return <div > 
   <button className={styles.register}>{text}</button>
  </div>; 
};

export default ButtonTest;

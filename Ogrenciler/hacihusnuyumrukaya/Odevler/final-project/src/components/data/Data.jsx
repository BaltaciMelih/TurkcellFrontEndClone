import React,{useState} from "react";
import styles from "../gamesfilter/Games.module.scss";
import Form from 'react-bootstrap/Form';
import polygon from "../../images/polygon.svg";
import { connect } from "react-redux";

const mapState = (state) => {
  return {
    data: state.data,
    alphabet:state.alphabet
  };
};
let alphabetset =new Set(); 

const Data = (props) => {

  window.onload = function () {//ekran yüklenirken
    props.dispatch({ type: "A-Z" });
    setAlphabet([...props.alphabet]);
};

//oyunların baş harfinden oluşan bir alfabe dizisi
  const [alphabet,setAlphabet]=useState([...props.alphabet]);

  function sorting(e){//seçilen sıralamaya göre
    if(e.target.value==="TİTLEAZ"){
      props.dispatch({ type: "A-Z" });
      setAlphabet([...props.alphabet]);
    }
    if(e.target.value==="TİTLEZA"){
      props.dispatch({ type: "Z-A" });
      let arr=[];
      arr=[...props.alphabet];
      let arr2 =arr.reverse();
      setAlphabet([...arr2]);
    }
  
  }

  return (
    <div>
      <hr />
       <div className={styles.Titleaz} ><Form.Select className={styles.formselect}  onChange={(e) =>sorting(e)} id="namecategory" aria-label="Default select example">
      <option   value="TİTLEAZ">TİTLE A-Z</option>
      <option value="TİTLEZA">TİTLE Z-A</option>
    </Form.Select></div>
      {alphabet.map((eleman,index2)=>{//filtreleme işleminde kategoriye göre yeni alfabe
        { for (const entry of props.categorySet) {
          props.data.map((object,index)=>{
          if(object.genres.includes(entry)){ 
             if(object.title.substr(0,1).toUpperCase()===eleman)
                alphabetset.add(eleman);
                      }})}}})} 


 <div >{alphabet.map((eleman,index2)=>{//Genel ekranda gösterilen data kısmı
        if(alphabetset.size===0 ||alphabetset.has(eleman))//filtreleme kontrolünden gelen alfabe
        {//kartların oluşturulması
          return   <div className={styles.cardblock} key={index2}>  
          <div className={styles.alphabeticon}>
          <img alt=""  src={polygon} />
          <span className={styles.alphabettext}  >{eleman}</span>
          </div> 
          {props.data.map((object,index)=>{ //gelen data üzerinde elemanın ilk harfinde oluşuna göre sıralama
            if(object.title.substr(0,1).toUpperCase()===eleman){
              if(props.categorySet.size===0){//hiç kategori seçilmediyse
                 return  <span className={styles.datatitle}  key={index}>{object.title  }<br></br></span>
                }
              else{ //seçilen kategori varsa bu kategori adını datanın kategorileri arasında aratma
                for (const entry of props.categorySet) {//set ile tanımlanmış veri for ile daha kolay alıyor verisini
                    if(object.genres.includes(entry)){ 
                      return <span className={styles.datatitle}  key={index}>{object.title  }<br></br></span>
                 }}}}})}</div> }
     })}</div>{alphabetset.clear()}
    </div>  
  );
};

export default connect(mapState, null)(Data);
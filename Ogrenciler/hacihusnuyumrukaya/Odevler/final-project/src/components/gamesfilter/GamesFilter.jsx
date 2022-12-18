import React,{useState} from "react";
import styles from "./Games.module.scss";
import {Data} from "../index";
import { connect } from "react-redux";


const mapState = (state) => {
  return {
    data: state.data,
  };
};
 let categorySet= new Set();
 const GamesFilter= (props) => { 
  const [noneblock,setNoneBlock]=useState(false);
 
    function genrefiltersOpenClose(){//kategori kısmı kapanıp açılması
      setNoneBlock(current => !current)
      if(noneblock){
        document.querySelector(".selectedboxs").style="display:block";}
      else{
        document.querySelector(".selectedboxs").style="display:none";}
    }

    function checkcontrol(e){//sıralama seçim kontrolü
      props.dispatch({ type: "A-Z" });
     if(e.target.checked){
      categorySet.add(e.target.value);}
     else{
      categorySet.delete(e.target.value);}
    } 

  return <div > 
       <div className={styles.filterbg}>
        <div>
        <div className={styles.browsegameslorem}>Browse Games</div>
        </div>
        <div className="d-flex flex-wrap w-100">
                  <div className={styles.selectedbox}>
                        <div className={styles.selected}>
                          <div className={styles.genrefiltres} onClick={genrefiltersOpenClose}>Genre Filtres  <button  className={styles.Icons} >▼</button></div>
                                <div className="selectedboxs" onChange={(e)=>checkcontrol(e)} >
                                  <label >
                                    <input  type="checkbox" className="form-check-input" name="Aile Dostu" value="Aile Dostu"/>
                                    <span className="checkbox__label">Aile Dostu</span></label>
                                  <label className="checkbox">
                                    <input type="checkbox" className="form-check-input" name="Aksiyon" value="Aksiyon"/>
                                    <span className="checkbox__label">Aksiyon</span></label>
                                  <label className="checkbox">
                                    <input type="checkbox" className="form-check-input" name="Arcade" value="Arcade"/>
                                    <span className="checkbox__label">Arcade</span></label>
                                  <label className="checkbox">
                                    <input type="checkbox" className="form-check-input" name="Basit Eğlence" value="Basit Eğlence"/>
                                    <span className="checkbox__label">Basit Eğlence</span></label>
                                  <label className="checkbox">
                                        <input type="checkbox" className="form-check-input" name="Bağımsız" value="Bağımsız"/>
                                        <span className="checkbox__label">Bağımsız</span></label>
                                  <label className="checkbox">
                                        <input type="checkbox" className="form-check-input" name="Bulmaca" value="Bulmaca"/>
                                        <span className="checkbox__label">Bulmaca</span></label>
                                  <label className="checkbox">
                                        <input type="checkbox" className="form-check-input" name="Canlandırma" value="Canlandırma"/>
                                        <span className="checkbox__label">Canlandırma</span></label>
                                  <label className="checkbox">
                                        <input type="checkbox" className="form-check-input" name="Demo" value="Demo"/>
                                        <span className="checkbox__label">Demo</span></label>
                                  <label className="checkbox">
                                        <input type="checkbox" className="form-check-input" name="Devasa Çok Oyunculu Çevrimiçi" value="Devasa Çok Oyunculu Çevrimiçi"/>
                                        <span className="checkbox__label">Devasa Çok Oyunculu Çevrimiçi</span></label>
                                  <label className="checkbox">
                                    <input type="checkbox" className="form-check-input" name="Dövüş oyunu" value="Dövüş oyunu"/>
                                    <span className="checkbox__label">Dövüş oyunu</span></label>
                                  <label className="checkbox">
                                      <input type="checkbox" className="form-check-input" name="Kahramanın gözünden oynanan ateş etme oyunu" value="Kahramanın gözünden oynanan ateş etme oyunu"/>
                                      <span className="checkbox__label">Kahramanın gözünden oynanan ateş etme oyunu</span></label>
                                  <label className="checkbox">
                                      <input type="checkbox" className="form-check-input" name="Macera" value="Macera"/>
                                      <span className="checkbox__label">Macera</span></label>
                                  <label className="checkbox">
                                      <input type="checkbox" className="form-check-input" name="Oynaması Ücretsiz" value="Oynaması Ücretsiz"/>
                                      <span className="checkbox__label">Oynaması Ücretsiz</span></label>
                                  <label className="checkbox">
                                      <input type="checkbox" className="form-check-input" name="Platform" value="Platform"/>
                                      <span className="checkbox__label">Platform</span></label>
                                  <label className="checkbox">
                                      <input type="checkbox" className="form-check-input" name="Simülasyon" value="Simülasyon"/>
                                      <span className="checkbox__label">Simülasyon</span></label>
                                  <label className="checkbox">
                                      <input type="checkbox" className="form-check-input" name="Spor" value="Spor"/>
                                      <span className="checkbox__label">Spor</span></label>
                                  <label className="checkbox">
                                      <input type="checkbox" className="form-check-input" name="Strateji" value="Strateji"/>
                                      <span className="checkbox__label">Strateji</span></label>
                                  <label className="checkbox">
                                      <input type="checkbox" className="form-check-input" name="Yarış" value="Yarış"/>
                                      <span className="checkbox__label">Yarış</span></label>
                                  <label className="checkbox">
                                      <input type="checkbox" className="form-check-input" name="Çok Oyunculu Çevrimiçi Çarpışma Arenası" value="Çok Oyunculu Çevrimiçi Çarpışma Arenası"/>
                                      <span className="checkbox__label">Çok Oyunculu Çevrimiçi Çarpışma Arenası</span>
                                  </label>
                                  </div>
                            </div>  
                      </div >
              <div className={styles.dataright}><Data  categorySet={categorySet}/>   </div>   
            </div>        
      </div>                          
  </div>;
};
export default connect(mapState, null)(GamesFilter);

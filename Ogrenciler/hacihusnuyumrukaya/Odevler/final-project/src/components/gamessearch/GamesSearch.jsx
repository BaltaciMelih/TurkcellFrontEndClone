import React from "react";
import styles from "../gamesfilter/Games.module.scss";
import { connect } from "react-redux";
import gamesbanner from "../../images/gamesbanner.jpg";

const mapState = (state) => {
  return {
    data: state.data,
  };
};

 const GamesSearch= (props) => { 
  //GAMES SEARCH 
 function searchFunc(){
     let filtered=props.data.filter((data)=>{
      return data.title.toLowerCase().indexOf(document.getElementById("filter").value.toLowerCase())!==-1
     })
     if(document.getElementById("filter").value===""){
       document.getElementById("textareaform").style="display:none";
     } 
     else{document.getElementById("textareaform").style="display:inline-block";}   
     document.getElementById("textareaform").textContent="";
     filtered.map((object)=>( //filtrelemeye göre gelen veriler
       document.getElementById("textareaform").textContent+=object.title+`\n`
       ))
  }
  
  return <div > 

      <img alt="" src={gamesbanner} className={styles.searchbox}/>
        <div className={styles.searchboxin}>
        <div className={styles.loremsearch}>Lorem ipsum dolor sit amet consectetur</div>
        <div className={styles.loremsearch2}>With the Cloud Gaming, you can join, play, and share games online with anyone in the world. Play any game on any device!</div>
        <input 
                id="filter"          
                className="form-control" onChange={searchFunc}
                type="text" 
                placeholder="Search Games"/>
                 <textarea className="form-control" id="textareaform" rows="4" style={{display:"none"}}></textarea>
                 </div>                   
  </div>;
};

export default connect(mapState, null)(GamesSearch);

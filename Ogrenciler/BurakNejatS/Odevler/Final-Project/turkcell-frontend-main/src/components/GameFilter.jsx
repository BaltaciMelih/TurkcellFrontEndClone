import React from "react";
import bootsrap from "bootstrap";
import "../styles/gamesCss/gameFilter.css"
const allGenres = [
  "Aile Dostu",
  "Aksiyon",
  "Arcade",
  "Basit Eğlence",
  "Bağımsız",
  "Bulmaca",
  "Canlandırma",
  "Demo",
  "Devasa Çok Oyunculu Çevrimiçi",
  "Dövüş Oyunu",
  "Kahramanın gözünden oynanan ateş etme oyunu",
  "Macera",
  "Oynaması Ücretsiz",
  "Platform",
  "Simülasyon",
  "Spor",
  "Strateji",
  "Yarış",
  "Çok Oyunculu Çevrimiçi,Çarpışma Arenası",
];

const GameFilter = ({ setGenre }) => {
  const handleCheck = (e, genres) => {
    if (e.target.checked) {
      setGenre((prev) => [...prev, genres]);
    } else {
      setGenre((prev) => prev.filter((prev) => prev !== genres));
    }
  };
  return (
    
    <div className="container p-5">
      {allGenres.map((genres, i) => (
        <div className="category1"  key={i} style={{ display: "flex", alignItems: "center" }}>
          <input className="checkbox" type="checkbox" onClick={(e) => handleCheck(e, genres)} />
          <div style={{ paddingLeft: "15px" }}> {genres} </div>
        </div>
      ))}
    </div>
  );
};

export default GameFilter;

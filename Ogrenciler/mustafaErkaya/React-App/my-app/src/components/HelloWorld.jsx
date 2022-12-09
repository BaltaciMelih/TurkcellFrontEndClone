import React from 'react'

const HelloWorld = () => {

    const name = "mustafa Erkaya"
    const birthYear = 1997;
    const howOldAreYou = () => 2022 - birthYear;
    const description = <p>React Öğreniyorum</p>;
    const style = {
        display: "grid",
        placeItems: "center"
    };
    
  return (
    <>
        <div style={style}>
            <h1>JSX'i Değişkenlere atama ve kullanma</h1>
            <p>Ad: {name}</p>
            <p>Yaş: 25</p>
            <p>Yaş: {howOldAreYou()}</p>
            {description}
        </div>
    
    </>
  )
}

export default HelloWorld
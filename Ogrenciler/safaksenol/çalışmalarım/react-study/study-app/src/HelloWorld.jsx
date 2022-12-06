import React from 'react'

export default function HelloWorld() {
    const title=<h1>JSX'i değişkene atama ve içerisinde değişken kullanma</h1>
    const fullName = "Şafak Şenol";
    const birthYear = 1994;
    const howOldAreYou = () => 2022-birthYear;
    const description = <div>React tekrarı yapıyorum</div>;
    const style = {
        display: "grid",
        placeItems: "center",

    };
    return (
        <>
            {/* <input type="checkbox" defaultChecked />
          <br />
          <span className="name">Şafak</span>
          <br />
          <div>
              <label htmlFor="name">Add</label>
              <input type="text" id="name"/>
          </div>
          <br />
          <div style={{fontSize:"50px"}}>React Tekrar</div>
          <br />
          <input type="text" defaultValue={"50"}/> */}
            <div style={style}>
                {title}
                <div>Ad:{fullName}</div>
                <div>Yaş:{howOldAreYou()}</div>
                {description}
            </div>


        </>
    );
}

import React from "react";
import ButonAnasayfa from "../Buttons/ButonAnasayfa";
import "./Register.scss";

function RegisterPage() {
  function alert(type, message, time) {
    const alert = document.createElement("div");
    const form = document.querySelector(".bottom-div");
    alert.className = `mt-3 alert alert-${type}`;
    alert.textContent = message;
    form.appendChild(alert);
    setTimeout(function () {
      alert.remove();
    }, time);
  }
  class Request {
    constructor(url) {
      this.url = url;
    }
    async post(data) {
      const response = await fetch(this.url, {
        method: "POST",
        mode: "cors",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const resData = await response.json();
      return resData;
    }
  }
  const request = new Request("http://localhost:3000/users");

  function addUser() {
    let name = document.getElementById("nameSurname").value;
    let username = document.getElementById("username").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let birth = document.getElementById("birth").value;
    let password = document.getElementById("password").value;

    if (
      name === "" ||
      username === "" ||
      phone === "" ||
      email === "" ||
      birth === "" ||
      password === ""
    ) {
      alert("danger", "Boş Bırakmayınız", 1500);
    } else {
      const newUser = {
        Name: `${name}`,
        Username: `${username}`,
        Phone: `${phone}`,
        Email: `${email}`,
        Birth: `${birth}`,
        Password: `${password}`,
      };
      console.log(newUser);
      request
        .post(newUser)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));

      document.getElementById("nameSurname").value = "";
      document.getElementById("username").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("email").value = "";
      document.getElementById("birth").value = "";
      document.getElementById("password").value = "";
    }
  }
  return (
    <div className="register-dis-div">
      <div className="register-ic-div-left">
        <div className="register-div">
          <div className="register-title">
            Register to play with Game+ Lorem Ipsum
          </div>
          <div className="register-inputs">
            <div>
              <input
                type="text"
                className="register-input"
                id="nameSurname"
                placeholder="Name Surname"
              />
            </div>
            <div>
              <input
                type="text"
                className="register-input"
                id="username"
                placeholder="Username"
              />
            </div>
            <div>
              <input
                type="number"
                className="register-input"
                id="phone"
                placeholder="Phone Number"
              />
            </div>
            <div>
              <input
                type="email"
                className="register-input"
                id="email"
                placeholder="E-mail"
              />
            </div>
            <div>
              <input
                type="text"
                className="register-input"
                id="birth"
                placeholder="Date of Birth"
              />
            </div>
            <div>
              <input
                type="password"
                className="register-input"
                id="password"
                placeholder="Password"
              />
            </div>
          </div>
          <div className="register-password-rules">
            <a href="">Password rules</a>
          </div>
          <div className="register-checkbox marginClassiTop">
            <input type="checkbox" name="" id="" />
            <div className="checkbox-title">
              <a href="">Sözleşmeyi</a> ve <a href="">Gizlilik Şartları</a>’nı
              okudum ve kabul ediyorum.
            </div>
          </div>
          <div className="register-checkbox marginClassi">
            <input type="checkbox" name="" id="" />
            <div className="checkbox-title ">
              <a href="">ETK</a>,{" "}
              <a href="">KVKK ve Turkcell Genel Veri İşleme İzni</a>'ni kabul
              ediyorum.
            </div>
          </div>
          <ButonAnasayfa
            Title="SUBMIT"
            Type="greyButton"
            Witdh="width-384"
            buttonOnClick={addUser}
          />
          <div className="bottom-div">
            Daha önceden kayıt olduysan hemen <a href="">Oturum aç!</a>
          </div>
        </div>
      </div>
      <div className="register-ic-div-right">
        <div className="register-image"></div>
      </div>
    </div>
  );
}

export default RegisterPage;

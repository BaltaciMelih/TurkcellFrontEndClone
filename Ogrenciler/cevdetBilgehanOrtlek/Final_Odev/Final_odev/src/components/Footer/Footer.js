import React from "react";
import FooterContent from "./Footer-content/FooterContent";
import "./Footer.scss";

function Footer(props) {
  return (
    <div className="footer">
      <FooterContent
        homeControl={props.homeControl}
        registerControl={props.registerControl}
      />
          <div className="copyright-dis-div">
      <div className="copyright-left">
        <div className="copyright-left-item">
          <a href="">Terms of Use</a>{" "}
        </div>
        <div className="copyright-left-item">
          <a href="#">Privacy Policy</a>{" "}
        </div>
        <div className="copyright-left-item">
          <a href="#">Cookies</a>
        </div>
      </div>
      <div className="copyright-right">
        <div className="copyright-right-item">Tüm hakları saklıdır.</div>
      </div>
    </div>
    </div>
  );
}

export default Footer;

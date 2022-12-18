import React from "react";
import FooterContent from "./Footer-content/FooterContent";
import FooterCopyright from "./Footer-copyright/FooterCopyright";

function Footer(props) {
  return (
    <div className="footer">
      <FooterContent
        homeControl={props.homeControl}
        registerControl={props.registerControl}
      />
      <FooterCopyright />
    </div>
  );
}

export default Footer;

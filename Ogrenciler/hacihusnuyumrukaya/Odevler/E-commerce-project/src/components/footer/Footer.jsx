import React from "react";
// import styles from "./Footer.module.scss";

const Footer= () => {
  return <div >
    <footer className="py-3  bg-light text-muted">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item me-2">Koşullar ve Gizlilik Bildirimi</li>
      <li className="nav-item me-2">Geri bildirim</li>
      <li className="nav-item me-2">Yardım</li>
      <li className="nav-item me-2">Çerez Bildirimi</li>
    </ul>
    <p className="text-center ">© 2022 Tüm Hakları Saklıdır </p>
    <p className="text-center ">Designed by Hacı Hüsnü Yumrukaya</p>
  </footer>     
</div>;
};

export default Footer;
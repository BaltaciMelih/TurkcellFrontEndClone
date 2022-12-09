import React from "react";
import PropTypes from "prop-types";

export default function Deneme({ isim, baslik, id }) {
  return (
    <div>
      Bu bir component {isim} {baslik} {id}
    </div>
  );
}

Deneme.propTypes = {
  isim: PropTypes.string.isRequired,
  baslik: PropTypes.string,
  id: PropTypes.number,
};

Deneme.defaultProps = {
  isim: "Bilgi girilmedi",
  baslik: "Bilgi girilmedi",
};

import React from "react";
import "./OptionsComponent.scss";
import { BsCheck2 } from "react-icons/bs";
import ButonAnasayfa from "../../../Buttons/ButonAnasayfa";

function OptionsComponent(props) {
  return (
    <div className={`mt-3 mt-lg-0 col-lg-3 ${props.ModuleType}`}>
      <div className="card-title border-0 py-4 fw-bold justify-content-center row">
        {props.optionsTitle}
      </div>
      <div className="card-body border-0 pb-4 px-5 row">
        <div className="text-center py-4">{props.optionsPrice}</div>
        <hr />
        <div className=" border-0 text-lg-start mb-4">
          <div className="my-3 text-start option-item">
            <span className="me-3">
              <BsCheck2 />
            </span>
            Standart Access
          </div>
          <div className="mb-3 text-start option-item">
            <span className="me-3">
              <BsCheck2 />
            </span>
            1-hr session length
          </div>
          <div className="mb-3 text-start option-item">
            <span className="me-3">
              <BsCheck2 />
            </span>
            Standart Access
          </div>
          <div className="mb-3 text-start option-item">
            <span className="me-3">
              <BsCheck2 />
            </span>
            1-hr session length
          </div>
        </div>
        <ButonAnasayfa
          Title="JOIN NOW"
          Type="greenButton"
          Witdh="width-326"
        />
      </div>
    </div>
  );
}

export default OptionsComponent;

import React from "react";
import "./OptionsModuleComponent.scss";
import { BsCheck2 } from "react-icons/bs";
import ButtonHomePage from "../../../Buttons/ButtonHomePage/ButtonHomePage";

function OptionsModuleComponent(props) {
  return (
    <div className={`mt-3 mt-lg-0 col-lg-3 ${props.ModuleComponentType}`}>
      <div className="card-title border-0 py-4 fw-bold justify-content-center row">
        {props.optionsModuleTitle}
      </div>
      <div className="card-body border-0 pb-4 px-5 row">
        <div className="text-center py-4">{props.optionsModulePrice}</div>
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
        <ButtonHomePage
          buttonTitle="JOIN NOW"
          buttonType="greenButton"
          buttonWitdh="width-326"
        />
      </div>
    </div>
  );
}

export default OptionsModuleComponent;

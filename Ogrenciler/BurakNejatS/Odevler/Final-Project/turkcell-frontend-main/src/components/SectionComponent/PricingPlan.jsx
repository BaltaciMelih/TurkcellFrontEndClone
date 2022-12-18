import React from "react";
import Buttons from "./Buttons";

import "./pricingPlan.css";
export default function PricingPlan(prop) {
  return (
    <>
      <div className="container mb-5">
        <div className="row">
          <div className="col-md-4">
            <div class="container mb-3 pricing-container2">
              <div class="card-body">
                <h5 class="card-title text-center p-4 text-light fs-3">
                  BASIC
                </h5>
                <div className="container bg-dark">
                  <p class="card-subtitle mb-2 text-muted text-center p-4 fs-4">
                    Free
                  </p>
                  <p class="card-text text-center text-light">Standard</p>
                  <p class="card-text text-center text-light">
                    1-hr session length
                  </p>
                  <p class="card-text text-center text-light">Standard</p>
                  <p class="card-text text-center text-light">
                    1-hr session length
                  </p>
                  <div className="d-flex justify-content-center">
                    <button href="#" class="pricingButton btn text-light">
                      JOIN NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="col-md-4">
            <div class="container mb-3 pricing-container">
              <div class="card-body">
                <h5 class="card-title text-center p-4 text-light fs-3">
                  STANDARD
                </h5>
                <div className="container bg-dark">
                  <p class="card-subtitle mb-2 text-muted text-center p-4 fs-4">
                    15$/month
                  </p>
                  <p class="card-text text-center text-light">Standard</p>
                  <p class="card-text text-center text-light">
                    1-hr session length
                  </p>
                  <p class="card-text text-center text-light">Standard</p>
                  <p class="card-text text-center text-light">
                    1-hr session length
                  </p>
                  <div className="d-flex justify-content-center">
                    <button href="#" class="pricingButton btn text-light">
                      JOIN NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div class="container mb-3 pricing-container2">
              <div class="card-body">
                <h5 class="card-title text-center p-4 text-light fs-3">
                  PREMİUM
                </h5>
                <div className="container bg-dark">
                  <p class="card-subtitle mb-2 text-muted text-center p-4 fs-4">
                    30$/month
                  </p>
                  <p class="card-text text-center text-light">Standard</p>
                  <p class="card-text text-center text-light">
                    1-hr session length
                  </p>
                  <p class="card-text text-center text-light">Standard</p>
                  <p class="card-text text-center text-light">
                    1-hr session length
                  </p>
                  <div className="d-flex justify-content-center">
                    <button href="#" class="pricingButton btn text-light">
                      JOIN NOW
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

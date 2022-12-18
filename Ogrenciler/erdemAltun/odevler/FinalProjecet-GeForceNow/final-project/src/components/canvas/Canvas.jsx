import React from "react";
import "./Canvas.scss";
import Arrow from "../../assets/games/icons-arrow-large.png";
import Combined from "../../assets/games/combined-shape.svg";

const Canvas = () => {
  return (
    <>
      <button
        className="btn btn-dark d-block d-md-none filter-menu w-50 me-3 d-flex justify-content-between"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasTop"
        aria-controls="offcanvasTop"
      >
        Filtreler
        <img
          src={Combined}
          width="18"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasTop"
          aria-controls="offcanvasTop"
        />
      </button>

      <div
        className="offcanvas offcanvas-top bg-dark h-100 d-md-none"
        tabIndex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div className="offcanvas-header bg-black">
          <h5 className="offcanvas-title  ms-auto fs-2" id="offcanvasTopLabel">
            Filtreler
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white ms-auto "
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="filter-container d-flex justify-content-between">
            <h3
              className="filter-title fs-1"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Oyun Türü
            </h3>
            <img
              src={Arrow}
              width={40}
              className="arrow text-white"
              data-bs-toggle="collapse"
              href="#collapseExample"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample"
            />
          </div>
          <div className="collapse show" id="collapseExample">
            <div className="card filter-games category-card card-body text-darkgray">
              <div className="mb-3 d-flex">
                <input
                  type="checkbox"
                  className="checkbox-input me-3"
                  name="Aile Dostu"
                  value="Aile Dostu"
                />
                <span className="checkbox__label">Aile Dostu</span>
              </div>
              <div className="mb-3 d-flex">
                <input
                  type="checkbox"
                  className="checkbox-input me-3"
                  name="Aksiyon"
                  value="Aksiyon"
                />
                <span className="checkbox__label">Aksiyon</span>
              </div>
              <div className="mb-3 d-flex">
                <input
                  type="checkbox"
                  className="checkbox-input me-3"
                  name="Arcade"
                  value="Arcade"
                />
                <span className="checkbox__label">Arcade</span>
              </div>
              <div className="mb-3 d-flex">
                <input
                  type="checkbox"
                  className="checkbox-input me-3"
                  name="Basit Eğlence"
                  value="Basit Eğlence"
                />
                <span className="checkbox__label">Basit Eğlence</span>
              </div>
              <div className="mb-3 d-flex">
                <input
                  type="checkbox"
                  className="checkbox-input me-3"
                  name="Bağımsız"
                  value="Bağımsız"
                />
                <span className="checkbox__label">Bağımsız</span>
              </div>
              <div className="mb-3 d-flex">
                <input
                  type="checkbox"
                  className="checkbox-input me-3"
                  name="Bulmaca"
                  value="Bulmaca"
                />
                <span className="checkbox__label">Bulmaca</span>
              </div>
              <div className="mb-3 d-flex">
                <input
                  type="checkbox"
                  className="checkbox-input me-3"
                  name="Canlandırma"
                  value="Canlandırma"
                />
                <span className="checkbox__label">Canlandırma</span>
              </div>
              <div className="mb-3 d-flex">
                <input
                  type="checkbox"
                  className="checkbox-input me-3"
                  name="Demo"
                  value="Demo"
                />
                <span className="checkbox__label">Demo</span>
              </div>
              <div className="mb-3 d-flex">
                <input
                  type="checkbox"
                  className="checkbox-input me-3"
                  name="Devasa Çok Oyunculu Çevrimiçi"
                  value="Devasa Çok Oyunculu Çevrimiçi"
                />
                <span className="checkbox__label">
                  Devasa Çok Oyunculu Çevrimiçi
                </span>
              </div>
              <div className="mb-3 d-flex">
                <input
                  type="checkbox"
                  className="checkbox-input me-3"
                  name="Dövüş oyunu"
                  value="Dövüş oyunu"
                />
                <span className="checkbox__label">Dövüş oyunu</span>
              </div>
              <div className="mb-3 d-flex">
                <input
                  type="checkbox"
                  className="checkbox-input me-3"
                  name="Kahramanın gözünden oynanan ateş etme oyunu"
                  value="Kahramanın gözünden oynanan ateş etme oyunu"
                />
                <span className="checkbox__label">
                  Kahramanın gözünden oynanan ateş etme oyunu
                </span>
              </div>
              <div className="mb-3 d-flex">
                <input
                  type="checkbox"
                  className="checkbox-input me-3"
                  name="Macera"
                  value="Macera"
                />
                <span className="checkbox__label">Macera</span>
              </div>
              <div className="mb-3 d-flex">
                <input
                  type="checkbox"
                  className="checkbox-input me-3"
                  name="Oynaması Ücretsiz"
                  value="Oynaması Ücretsiz"
                />
                <span className="checkbox__label">Oynaması Ücretsiz</span>
              </div>
              <div className="mb-3 d-flex">
                <input
                  type="checkbox"
                  className="checkbox-input me-3"
                  name="Platform"
                  value="Platform"
                />
                <span className="checkbox__label">Platform</span>
              </div>
              <div className="mb-3 d-flex">
                <input
                  type="checkbox"
                  className="checkbox-input me-3"
                  name="Simülasyon"
                  value="Simülasyon"
                />
                <span className="checkbox__label">Simülasyon</span>
              </div>
              <div className="mb-3 d-flex">
                <input
                  type="checkbox"
                  className="checkbox-input me-3"
                  name="Spor"
                  value="Spor"
                />
                <span className="checkbox__label">Spor</span>
              </div>
              <div className="mb-3 d-flex">
                <input
                  type="checkbox"
                  className="checkbox-input me-3"
                  name="Strateji"
                  value="Strateji"
                />
                <span className="checkbox__label">Strateji</span>
              </div>
              <div className="mb-3 d-flex">
                <input
                  type="checkbox"
                  className="checkbox-input me-3"
                  name="Yarış"
                  value="Yarış"
                />
                <span className="checkbox__label">Yarış</span>
              </div>
              <div className="mb-3 d-flex">
                <input
                  type="checkbox"
                  className="checkbox-input me-3"
                  name="Çok Oyunculu Çevrimiçi Çarpışma Arenası"
                  value="Çok Oyunculu Çevrimiçi Çarpışma Arenası"
                />
                <span className="checkbox__label">
                  Çok Oyunculu Çevrimiçi Çarpışma Arenası
                </span>
              </div>
              <button
                type="submit"
                className="btn w-100 btn-register myButton fw-bold"
              >
                UYGULA
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Canvas;

import React from "react";
import "./Category.scss";
import Arrow from "../../assets/games/icons-arrow-large.png";

const Category = () => {
  return (
    <>
      <div className="d-flex justify-content-between mb-3">
        <h3
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
        <div className="card filter-games w-100 category-card card-body text-darkgray">
          <div className="mb-3 d-flex check">
            <input
              type="checkbox"
              className="checkbox-input me-3"
              name="Aile Dostu"
              value="Aile Dostu"
            />
            <span className="checkbox__label ">Aile Dostu</span>
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
            <span className="checkbox__label ">
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
        </div>
      </div>
    </>
  );
};

export default Category;

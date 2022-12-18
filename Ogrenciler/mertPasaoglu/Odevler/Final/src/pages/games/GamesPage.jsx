import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./GamesPage.scss";
import Accordion from "react-bootstrap/Accordion";
import Form from "react-bootstrap/Form";
import searchIcon from "../../assets/icons/search-icon.png";
import ViewGames from "../../components/viewgames/ViewGames";

const GamesPage = ({ games }) => {
  const [search, setSearch] = useState("");
  const [sortVal, setSortVal] = useState("a-z");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (e) => {
    let newCategories;
    if (e.target.checked) {
      newCategories = [...selectedCategories, e.target.value];
    } else {
      newCategories = selectedCategories.filter(
        (category) => category !== e.target.value
      );
    }
    setSelectedCategories(newCategories);
    console.log(selectedCategories);
  };

  const genre = [
    {
      name: "Shooters",
      key: "shooters",
      category: "Kahramanın gözünden oynanan ateş etme oyunu",
    },
    {
      name: "Action",
      key: "action",
      category: "Aksiyon",
    },
    {
      name: "RPG",
      key: "rpg",
      category: "Canlandırma",
    },
    {
      name: "Racing",
      key: "racing",
      category: "Yarış",
    },
    {
      name: "MOBA/MMO",
      key: "moba-mmo",
      category: "Çok Oyunculu Çevrimiçi Çarpışma Arenası",
    },
    {
      name: "Simulation",
      key: "simulation",
      category: "Simülasyon",
    },
    {
      name: "Strategy",
      key: "strategy",
      category: "Strateji",
    },
    {
      name: "Sports",
      key: "sports",
      category: "Spor",
    },
    {
      name: "Kids/Family",
      key: "kids-family",
      category: "Aile Dostu",
    },
    {
      name: "Casual",
      key: "casual",
      category: "Basit Eğlence",
    },
    {
      name: "Demo",
      key: "demo",
      category: "Demo",
    },
    {
      name: "Horror",
      key: "horror",
      category: "Korku",
    },
    {
      name: "Platformer",
      key: "platformer",
      category: "Platform",
    },
    {
      name: "Battle Royale",
      key: "battle-royale",
      category: "Çok Oyunculu Çevrimiçi Çarpışma Arenası",
    },
    {
      name: "Adventure",
      key: "adventure",
      category: "Macera",
    },
    {
      name: "Open World",
      key: "open-world",
      category: "Devasa Çok Oyunculu Çevrimiçi",
    },
  ];

  const state = [
    {
      name: "Available",
      key: "available",
    },
    {
      name: "Patching",
      key: "patching",
    },
    {
      name: "Maintenance",
      key: "maintenance",
    },
  ];

  return (
    <>
      <Header />
      <div className="text-white">
        <div className="row background">
          <div className="col">
            <div className="games-search">
              <h1>Lorem ipsum dolor sit amet consectetur</h1>
              <p>
                With the Cloud Gaming, you can join, play, and share games
                online with anyone in the world. Play any game on any device!{" "}
              </p>
              <img src={searchIcon} alt="" className="search-icon" />
              <input
                type="text"
                placeholder="Search Games"
                className="search-input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="games-container bg-black">
        <div className="row text-white ">
          <div className="browse">
            <h2>Browse Games</h2>
            <select
              className="order"
              value={sortVal}
              onChange={(e) => setSortVal(e.target.value)}
            >
              <option value="a-z">Title A-Z</option>
              <option value="z-a">Title Z-A</option>
            </select>
          </div>
        </div>

        <div className="row categories-container">
          <div className="col-xl-4 col-lg-12 ">
            <div>
              <Accordion defaultActiveKey="0" alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>State</Accordion.Header>
                  <Accordion.Body>
                    <Form>
                      {state.map((val, index) => (
                        <div key={`${val.key}-${index}`} className="mb-3">
                          <Form.Check
                            inline
                            label={val.name}
                            name="group1"
                            type="checkbox"
                            id={`inline-checkbox-${val.key}`}
                          />
                        </div>
                      ))}
                    </Form>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Genre Filters</Accordion.Header>
                  <Accordion.Body>
                    <Form>
                      {genre.map((val, index) => (
                        <div key={`${val.key}-${index}`} className="mb-3">
                          <Form.Check
                            inline
                            label={val.name}
                            name="group1"
                            type="checkbox"
                            id={`inline-checkbox-${val.key}`}
                            value={val.category}
                            onChange={handleCategoryChange}
                          />
                        </div>
                      ))}
                    </Form>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="col-xl-8 col-lg-12 games-card">
            <ViewGames
              searchValue={search}
              sort={sortVal}
              filter={selectedCategories}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default GamesPage;

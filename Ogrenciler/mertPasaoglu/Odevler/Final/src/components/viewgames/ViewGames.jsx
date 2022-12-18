import React, { useEffect, useState } from "react";
import styles from "./ViewGames.module.scss";

function ViewGames(props) {
  const { searchValue, sort, selectedCategories } = props;
  const [games, setGames] = useState([]);

  const fetchGames = async () => {
    let response = await fetch("http://localhost:3000/data/").then((res) => {
      return res.json();
    });
    if (sort === "a-z") {
      response.sort((a, b) =>
        a.title.localeCompare(b.title, "es", { sensitivity: "base" })
      );
    } else {
      response.sort((b, a) =>
        a.title.localeCompare(b.title, "es", { sensitivity: "base" })
      );
    }
    console.log(response);

    if (!!searchValue.length) {
      response = response.filter((element) => {
        const search = searchValue ? searchValue.toLowerCase() : "";
        const title = element.title.toLowerCase();
        return title.includes(search);
      });
    }

/*       response = response.filter((element) =>
selectedCategories.includes(element.genres)
);  */

/*   response.filter((item) =>
Object.keys(selectedCategories).some((c) => c === item.category && selectedCategories[c])
); */

    let data = response.reduce((acc, el) => {
      let alphabet = el.title[0];

      if (!acc[alphabet]) {
        acc[alphabet] = { alphabet, games: [el] };
      } else {
        acc[alphabet].games.push(el);
      }

      return acc;
    }, {});
    console.log(data);
    data = Object.values(data);
    setGames(data);
  };

  useEffect(() => {
    fetchGames();
  }, [searchValue, sort, selectedCategories]);

  return (
    <div>
      {games.map((game, index) => (
        <div
          key={index}
          style={{ marginBottom: "24px" }}
          className={styles.gamesCard}
        >
          <div className={styles.polygonContainer}>
            <div className={styles.alphabet}>
              {" "}
              <span className={styles.letter}>{game.alphabet}</span>
            </div>
          </div>
          <div className={styles.gamesCardContainer}>
            {game.games.map((value, index) => (
              <div className={styles.listItem} key={value.id + "-" + index}>
                {value.title}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ViewGames;

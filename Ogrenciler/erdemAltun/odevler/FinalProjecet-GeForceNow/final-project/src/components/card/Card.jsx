import React from "react";
import "./Card.scss";

export default function Card(props) {
  return (
    <div>
      <div className="game-titles mb-4 p-4">
        <div className="games-hex text-center mb-4">
          <p className="py-1 fs-2 text-dark fw-bold">{props.item[0]}</p>
        </div>
        <div className="content-area d-flex flex-wrap">
          {props.item[1].map((val, index) => (
            <a
              target="_blank"
              key={index}
              href={val.url}
              className="game-list-card"
            >
              {val.title}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

import React from "react";
import Glasgow from "./data/glasgow.jpg";
import London from "./data/london.jpg";
import Manchester from "./data/manchester.jpeg";

const TouristInfoCards = () => {
  const cards = [
    {
      heading: "Glasgow",
      imgUrl: Glasgow,
      infoUrl: "https://peoplemakeglasgow.com/",
      info:
        "Glasgow is a compact city and it’s easy to find your way around, whether on foot, by bike or public transport"
    },
    {
      heading: "London",
      imgUrl: London,
      infoUrl: "https://www.visitlondon.com/",
      info:
        "London is the capital and largest city of England and the United Kingdom, with a population of just under 9 million."
    },
    {
      heading: "Manchester",
      imgUrl: Manchester,
      infoUrl: "https://www.visitmanchester.com/",
      info:
        "Manchester is renowned for its entertainment, with a plethora of cinemas, theatre and legendary clubs for great night-time amusement."
    }
  ];

  return (
    <div id="container">
      {cards.map(({ imgUrl, info, infoUrl, heading }) => {
        return (
          <div className="card">
            <img src={imgUrl} className="card-img-top" alt="Glasgow" />
            <h3>{heading}</h3>
            <div className="card-body">
              <p>{info}</p>
              <a href={infoUrl} className="btn btn-primary">
                More Information
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TouristInfoCards;

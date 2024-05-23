import React from "react";
import Card from "./Card";


const CardContainer = () => {
  const cardData = [
    {
      title: "Card Title 1",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imgSrc: "https://1.bp.blogspot.com/-eN-AXWAPZFM/UYpmhmsmm3I/AAAAAAAAGJ8/tCWRCDwGyt8/s1600/888523-1024x768-558.jpg",
      link: "#"
    },
    {
      title: "Card Title 2",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imgSrc: "https://1.bp.blogspot.com/-eN-AXWAPZFM/UYpmhmsmm3I/AAAAAAAAGJ8/tCWRCDwGyt8/s1600/888523-1024x768-558.jpg",
      link: "#"
    },
    {
      title: "Card Title 3",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imgSrc: "https://1.bp.blogspot.com/-eN-AXWAPZFM/UYpmhmsmm3I/AAAAAAAAGJ8/tCWRCDwGyt8/s1600/888523-1024x768-558.jpg",
      link: "#"
    },
    {
      title: "Card Title 4",
      text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      imgSrc: "https://1.bp.blogspot.com/-eN-AXWAPZFM/UYpmhmsmm3I/AAAAAAAAGJ8/tCWRCDwGyt8/s1600/888523-1024x768-558.jpg",
      link: "#"
    },
    {
        title: "Card Title 5",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        imgSrc: "https://1.bp.blogspot.com/-eN-AXWAPZFM/UYpmhmsmm3I/AAAAAAAAGJ8/tCWRCDwGyt8/s1600/888523-1024x768-558.jpg",
        link: "#"
      },
      {
        title: "Card Title 6",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        imgSrc: "https://1.bp.blogspot.com/-eN-AXWAPZFM/UYpmhmsmm3I/AAAAAAAAGJ8/tCWRCDwGyt8/s1600/888523-1024x768-558.jpg",
        link: "#"
      },
      {
        title: "Card Title 7",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        imgSrc: "https://1.bp.blogspot.com/-eN-AXWAPZFM/UYpmhmsmm3I/AAAAAAAAGJ8/tCWRCDwGyt8/s1600/888523-1024x768-558.jpg",
        link: "#"
      },
      {
        title: "Card Title 8",
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        imgSrc: "https://1.bp.blogspot.com/-eN-AXWAPZFM/UYpmhmsmm3I/AAAAAAAAGJ8/tCWRCDwGyt8/s1600/888523-1024x768-558.jpg",
        link: "#"
      }
  ];

  return (
    <div className="container">
      <div className="row">
        {cardData.map((card, index) => (
          <Card 
            key={index}
            title={card.title}
            text={card.text}
            imgSrc={card.imgSrc}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
}

export default CardContainer;

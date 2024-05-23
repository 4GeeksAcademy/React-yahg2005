import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css'; 

const Card = ({ title, text, imgSrc, link }) => {
  return (
    <div className="col-12 col-sm-6 col-md-6 col-lg-3 mb-4 d-flex justify-content-center align-self-center">
      <div className="card" style={{ width: "18rem" }}>
        <img src={imgSrc} className="card-img-top" alt="Card image" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <a href={link} className="btn btn-primary">Find out More!</a>
        </div>
      </div>
    </div>
  );
}

export default Card;

import React from "react";

const Jumbotron = () => {
  return (
    <div className="jumbotron">
      <div className="container-fluid d-flex justify-content-center">
        <div className="bg-light p-4 rounded" style={{ maxWidth: "1250px", textAlign: "left" }}>
          <h1 style={{ fontSize: "3rem", marginLeft: "20px" }}>A Warm Welcome!</h1>
          <p style={{ marginLeft: "20px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, fugit animi tempora modi quaerat sapiente aperiam officia ab, sunt autem esse earum cum perspiciatis, illo assumenda excepturi labore? Temporibus, exercitationem.
          </p>
          <button type="button" className="btn btn-primary btn-lg" style={{ marginLeft: "20px" }}>Call to action!</button>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;

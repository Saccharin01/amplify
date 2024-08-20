import React from "react";
import "../globals.css";

const Kamen: React.FC = () => {
  return (
    <div className="flex flex-col">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/kIUCdbI7AAs?si=Xr5KBS5uzOzBHUMA"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="m-5"
      ></iframe>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/1axpeCiCw6U?si=ST-yagjLjstHhqm-"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="m-5"
      ></iframe>
    </div>
  );
};

export default Kamen;

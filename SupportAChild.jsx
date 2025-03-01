import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image4 from "./images/image4.png";
import image5 from "./images/image5.png";

const SupportAChildProgram = () => {
  const imageData = [
    {
      name: "Rohit",
      description:
        "Rohit had to stop studying after 7th grade due to extreme poverty. He works in a garment factory at present. He wants to start his own business after a few years once he saves enough to purchase a sewing machine.",
      image: image4,
    },
    {
      name: "Suparna",
      description:
        "Suparna is a student in class 7. Her favorite subjects are history and geography. She excelled in 100m & 200m sprints - securing first place in school competitions. She wants to be a lawyer and help poor people with legal assistance when she grows up.",
      image: image5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div
      id="ul-lightbox-preview"
      style={{
        textAlign: "center",
        padding: "20px",
        backgroundColor: "#a059de",
        color: "white",
      }}
    >
      <h2 style={{ marginBottom: "10px" }}>Support A Child Program</h2>
      <p>
        Support a poor child with Rs. 700/- per month can help them grow to be a
        responsible citizen. Currently supporting 70+ children
      </p>
      <a
        href="https://www.instamojo.com/ShahtootNGO/support-a-child-7ec27/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontWeight: "bold",
          fontStyle: "italic",
          fontSize: "19px",
          color: "#FFD700",
          textDecoration: "none",
        }}
      >
        Donate Now
      </a>

      <div
        style={{
          maxWidth: "600px",
          margin: "30px auto",
          padding: "20px",
          backgroundColor: "#282828",
          borderRadius: "10px",
        }}
      >
        <Slider {...settings}>
          {imageData.map((item, index) => (
            <div
              key={index}
              className="ul-image"
              data-i={index}
              data-length={imageData.length}
              style={{ textAlign: "center", padding: "10px" }}
            >
              <span
                className="ul-prev icon-p-special-arrow-right-big icon-rotate-deg-180"
                style={{ width: "204.8px" }}
              ></span>
              <span
                className="ul-next icon-p-special-arrow-right-big"
                style={{ width: "205.2px" }}
              ></span>
              <img
                data-src={item.image}
                src={item.image}
                alt={item.name}
                style={{ width: "100%", height: "auto", borderRadius: "10px" }}
              />
              <div
                className="ul-lightbox-description-wrap"
                style={{
                  backgroundColor: "#FFF8DC",
                  padding: "15px",
                  borderRadius: "8px",
                  marginTop: "10px",
                  color: "black",
                }}
              >
                <h3 style={{ fontWeight: "bold" }}>{item.name}</h3>
                <p style={{ fontSize: "16px", lineHeight: "1.5" }}>
                  {item.description}
                </p>
                <p className="ul-lightbox-descr ul-lightbox-slide-number">
                  <span className="ul-length">
                    {index + 1} of {imageData.length}{" "}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SupportAChildProgram;

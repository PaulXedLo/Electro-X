import React, { useState, useEffect } from "react";

export default function ProductPresentation({ product }) {
  const [isVisible, setIsVisible] = useState(false);
  const devices = require("./devices");
  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight * 0.35;
      const top = window.pageYOffset + window.innerHeight;
      const elementPosition = document.querySelector(
        ".product__presentation"
      ).offsetTop;
      if (top > elementPosition + threshold) {
        setIsVisible(true);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`product__presentation ${isVisible ? "visible" : ""}`}>
      <h1 className={`presentation__title ${isVisible ? "animate" : ""}`}>
        Reject Tradition, Embrace Modernity.
      </h1>
      <iframe
        width="800"
        height="600"
        src={product.embed}
        title="Video of the phone"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        className="product_iframe"
      ></iframe>
    </div>
  );
}

import { useParams } from "react-router-dom";
import devices from "./devices";
import Navigation from "../navigation";
import StarRating from "./starrating";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";
import { useRef } from "react";
import ProductPresentation from "./ProductPresentation";
import ProductSpecs from "./ProductSpecs";

export default function ProductDetails() {
  const [showNotification, setShowNotification] = useState(false);
  const { id } = useParams();
  const product = devices.find((device) => device.id === parseInt(id));
  const productDetailsRef = useRef(null);
  const scrollArrowRef = useRef(null);
  const handleAddToCart = (e) => {
    e.preventDefault();
    const cartItems = JSON.parse(sessionStorage.getItem("cartItems")) || [];
    const isItemInCart = cartItems.some((item) => item.name === product.name);
    if (isItemInCart) {
      setShowNotification({
        message: "The item is already in cart",
        color: "red",
      });
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      return;
    }
    const updatedCartItems = [...cartItems, product];
    sessionStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setShowNotification({ message: "Added to cart", color: "green" });
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  useEffect(() => {
    const animateProductInfo = () => {
      const productInfoElements =
        document.querySelectorAll(".product__info li");
      productInfoElements.forEach((element, index) => {
        setTimeout(() => {
          element.style.animation = "animateInfo 0.5s ease forwards";
        }, index * 100);
      });
    };

    const animateProductDetails = () => {
      const productDetailsElement =
        document.querySelector(".product__maininfo");
      productDetailsElement.style.animation =
        "animateDetails 0.5s ease forwards";
    };

    animateProductInfo();
    animateProductDetails();
  }, []);

  if (!product) {
    return <div>Product not found</div>;
  }

  const getDefaultRating = () => {
    const ramSize = parseFloat(product.ram);
    if (ramSize > 10) {
      return 5;
    } else if (ramSize >= 6) {
      return 4;
    } else {
      return 3;
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
      <Navigation />
      <div className="productdetails__page" ref={productDetailsRef}>
        <div
          className="notification-slider"
          style={{
            right: showNotification ? "0" : "-100%",
            backgroundColor: showNotification.color,
          }}
        >
          {showNotification.message}
        </div>
        <div className="product__nameandrating">
          <h2 className="product__name">{product.name}</h2>
          <StarRating defaultRating={getDefaultRating} />
        </div>
        <div className="product__component">
          <div className="product__maininfo">
            <h1>Details</h1>
            <p>{product.details}</p>
            <div className="scroll-down-arrow-container">
              <FaAngleDown
                className="scroll-down-arrow"
                style={{ width: "300px", height: "100px" }}
              />
            </div>
          </div>
          <Slider
            {...settings}
            className="slider__comp"
            style={{ width: "50vw", height: "50vh" }}
          >
            {product.img.map((image, index) => (
              <div key={index} className="slider__div">
                <img
                  src={image}
                  alt={`${product.name} image ${index + 1}`}
                  className="product__image"
                />
              </div>
            ))}
          </Slider>
          <ul className="product__info">
            <li className="product__price">
              💵 Price: <span>{product.price}</span>
            </li>
            <li>🌟 Size: {product.size}</li>
            <li>💿 Ram: {product.ram}</li>
            <li>🔋 Battery: {product.battery}</li>
            <li>📸 Camera: {product.camera}</li>
            <button
              type="button"
              onClick={handleAddToCart}
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
            >
              Add To Cart
            </button>
          </ul>
        </div>
      </div>
      <ProductPresentation product={product} />
      <ProductSpecs product={product} />
    </>
  );
}

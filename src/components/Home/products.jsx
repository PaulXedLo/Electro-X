import { useContext, useEffect, useReducer, useMemo, useState } from "react";
import StarRating from "./starrating";
import Modal from "react-modal";
import ProductSort from "./sort";
const devices = require("./devices");

const initialState = {
  sortedDevices: devices,
  showSort: devices.length > 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_SORTED_DEVICES":
      return {
        ...state,
        sortedDevices: action.payload,
      };
    case "SET_SHOW_SORT":
      return {
        ...state,
        showSort: action.payload,
      };
    default:
      return state;
  }
};

export default function Products({ search }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSort = (sortBy) => {
    let sortedProducts = [...devices];

    switch (sortBy) {
      case "price":
        sortedProducts.sort(
          (a, b) => parseFloat(a.price) - parseFloat(b.price)
        );
        break;
      case "ram":
        sortedProducts.sort((a, b) => parseFloat(a.ram) - parseFloat(b.ram));
        break;
      default:
        break;
    }

    dispatch({ type: "SET_SORTED_DEVICES", payload: sortedProducts });
  };

  function handleScroll() {
    window.scrollTo(0, 0);
  }

  const filteredDevices = useMemo(() => {
    return state.sortedDevices.filter((item) =>
      search.trim() === ""
        ? true
        : item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, state.sortedDevices]);

  useEffect(() => {
    dispatch({ type: "SET_SHOW_SORT", payload: filteredDevices.length > 0 });
  }, [filteredDevices]);

  return (
    <div>
      {state.showSort ? <ProductSort handleSort={handleSort} /> : null}
      <ul className="product-list">
        {filteredDevices.length === 0 ? (
          <div className="errorSearch">
            <h1 className="errorhd">No devices found</h1>
            <span className="errorp">Try searching another model</span>
          </div>
        ) : (
          filteredDevices.map((dev) => <Product dev={dev} key={dev.name} />)
        )}
        <img
          className="scroll"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Feather-arrows-arrow-up.svg/2048px-Feather-arrows-arrow-up.svg.png"
          onClick={handleScroll}
        />
      </ul>
    </div>
  );
}

export function Product({ dev }) {
  const [showNotification, setShowNotification] = useState(false);
  const [modalIsOpen, setIsOpen] = useReducer((state, action) => {
    switch (action.type) {
      case "OPEN_MODAL":
        return true;
      case "CLOSE_MODAL":
        return false;
      default:
        return state;
    }
  }, false);

  const getDefaultRating = () => {
    const ramSize = parseFloat(dev.ram);
    if (ramSize > 10) {
      return 5;
    } else if (ramSize >= 6) {
      return 4;
    } else {
      return 3;
    }
  };
  const handleAddToCart = (e) => {
    e.preventDefault();
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    const isItemInCart = cartItems.some((item) => item.name === dev.name);
    closeModal();
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
    const updatedCartItems = [...cartItems, dev];
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    setShowNotification({ message: "Added to cart", color: "green" });
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  function openModal(e) {
    if (e.target.tagName === "IMG") {
      setIsOpen({ type: "OPEN_MODAL" });
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
      document.body.classList.add("modal-open");
    }
  }

  function closeModal() {
    setIsOpen({ type: "CLOSE_MODAL" });
    document.body.style.overflow = "auto";
    document.body.classList.remove("modal-open");
  }

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <>
      <li className="product-item">
        <div
          className="w-full max-w-sm rounded-lg shadow dark:bg-white-300"
          id="productanim"
          onClick={openModal}
        >
          <a href="#">
            <img
              className="p-8 rounded-t-lg"
              src={dev.img[0]}
              alt="product image"
            />
          </a>
          <div className="px-5 pb-5">
            <a href="#" onClick={openModal}>
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-black">
                {dev.name}
              </h5>
            </a>
            <StarRating
              defaultRating={getDefaultRating()}
              className="starrating"
            />
            <div className="flex items-center justify-between">
              <span className="text-3xl font-bold text-gray-900 dark:text-black mt-5">
                {dev.price}
              </span>
              <a
                href="#"
                onClick={handleAddToCart}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
              >
                Add to cart
              </a>
            </div>
          </div>
        </div>
        <div
          className="notification-slider"
          style={{
            right: showNotification ? "0" : "-100%",
            backgroundColor: showNotification.color,
          }}
        >
          {showNotification.message}
        </div>
      </li>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Product Modal"
        overlayClassName="modal-overlay"
      >
        <div className="dark-overlay" onClick={closeModal}></div>
        <button onClick={closeModal} className="closemodal">
          Close
        </button>
        <div onClick={stopPropagation} className="modalinfo">
          <div className="modalmain">
            <img src={dev.img[0]} className="modalimg" />
            <h4 className="copyright">
              © 2024 ElectroX™. All Rights Reserved.
            </h4>
          </div>
          <div className="modalspecs">
            <div
              id="overlay"
              class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700"
            >
              <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
                {dev.name}
              </h5>
              <div class="flex items-baseline text-gray-900 dark:text-white">
                <span class="text-3xl font-semibold"></span>
                <span class="text-5xl font-extrabold tracking-tight">
                  {dev.price}
                </span>
              </div>
              <ul role="list" class="space-y-5 my-7">
                <li class="flex items-center">
                  <svg
                    class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    RAM: {dev.ram}
                  </span>
                </li>
                <li class="flex">
                  <svg
                    class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    Battery: {dev.battery}
                  </span>
                </li>
                <li class="flex">
                  <svg
                    class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    Camera: {dev.camera}
                  </span>
                </li>
                <li class="flex">
                  <svg
                    class="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                  </svg>
                  <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
                    Size: {dev.size}
                  </span>
                </li>
              </ul>
              <button
                type="button"
                onClick={handleAddToCart}
                class="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

import { useEffect, useState } from "react";

export default function Items({ totalPrice, setTotalPrice }) {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedItems);
    updateTotalPrice(storedItems);
  }, [localStorage]);
  const deliveryPrice = 19.99;
  const updateTotalPrice = (items) => {
    const total = items.reduce((acc, item) => {
      const price = parseFloat(item.price);
      const quantity = item.quantity || 1;
      if (!isNaN(price)) {
        acc += price * quantity;
      }
      return acc;
    }, 0);
    setTotalPrice(total.toFixed(2));
  };

  const updateQuantity = (index, newQuantity) => {
    const newItems = [...cartItems];
    newItems[index].quantity = newQuantity;
    setCartItems(newItems);
    updateTotalPrice(newItems);
  };

  const removeItem = (index) => {
    const newItems = cartItems.filter((_, i) => i !== index);
    setCartItems(newItems);
    updateTotalPrice(newItems);
  };

  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="emptycart">
          <h1>The cart is empty, please go back to the store.</h1>
          <button className="gh">
            <a href="/Electro-X" className="gohome">
              Take me back
            </a>
          </button>
          <h3 className="copyrightcart">
            © 2024 ElectroX™. All Rights Reserved.
          </h3>
        </div>
      ) : (
        <ul className="cartitems">
          <h1 className="summary">Summary</h1>
          {cartItems.map((item, index) => (
            <Item
              key={index}
              el={item}
              index={index}
              cartItems={cartItems}
              updateQuantity={updateQuantity}
              removeItem={removeItem}
              deliveryPrice={deliveryPrice}
            />
          ))}
          <div className="checkout">
            <div className="totalpricebox">
              <h1 className="totalpricetotal">Total:</h1>
              <h2 className="totalprice">
                ${(parseFloat(totalPrice) + deliveryPrice).toFixed(2)}
              </h2>
              <h3 className="delivery">Delivery: ${deliveryPrice}</h3>
            </div>
            <div className="checkoutbtn">
              <a className="purchase" href="Electro-X/checkout">
                Proceed to Checkout
              </a>
            </div>
          </div>
        </ul>
      )}
    </div>
  );
}

export function Item({ el, index, updateQuantity, removeItem, cartItems }) {
  const [quantity, setQuantity] = useState(el.quantity || 1);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    updateQuantity(index, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      updateQuantity(index, quantity - 1);
    }
  };

  const handleRemove = () => {
    const newItems = [...cartItems];
    newItems.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(newItems));
    removeItem(index);
  };

  const price = parseFloat(el.price);

  if (isNaN(price)) {
    return <p>Error: Invalid price</p>;
  }

  const totalPrice = (quantity * price).toFixed(2);

  return (
    <li className="product">
      <img src={el.img} alt="Product Image" className="productimage" />
      <h2>{el.name}</h2>
      <h1 className="productprice">${totalPrice}</h1>{" "}
      <div className="quantity">
        <button className="inc" onClick={handleIncrement}>
          +
        </button>
        <p>{quantity}</p>
        <button className="dec" onClick={handleDecrement}>
          -
        </button>
      </div>
      <button className="removeitem" onClick={handleRemove}>
        X
      </button>
    </li>
  );
}

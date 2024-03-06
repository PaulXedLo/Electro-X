import Navigation from "../components/navigation";
import Items from "../components/ShoppingCart/items";
import { useState, useEffect } from "react";

function ShoppingCart({
  isSignedIn,
  setIsSignedIn,
  handleLogout,
  cartSize,
  totalPrice,
  setTotalPrice,
}) {
  return (
    <>
      <Navigation
        cartSize={cartSize}
        isSignedIn={isSignedIn}
        handleLogout={handleLogout}
      />
      <Items
        isSignedin={isSignedIn}
        setIsSignedIn={setIsSignedIn}
        handleLogout={handleLogout}
        totalPrice={totalPrice}
        setTotalPrice={setTotalPrice}
      />
    </>
  );
}

export default ShoppingCart;

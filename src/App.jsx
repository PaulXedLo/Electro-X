import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import ShoppingCart from "./pages/shoppingcart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Support from "./pages/Support";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";
function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [discount, setDiscount] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsSignedIn(true);
      setDiscount(true);
    } else {
      setIsSignedIn(false);
      setDiscount(false);
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    window.location.reload();
  };
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              discount={discount}
              isSignedIn={isSignedIn}
              setIsSignedIn={setIsSignedIn}
              handleLogout={handleLogout}
            />
          }
        />
        <Route
          path="/signin"
          element={
            <Signin
              isSignedIn={isSignedIn}
              setIsSignedIn={setIsSignedIn}
              handleLogout={handleLogout}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <ShoppingCart
              isSignedIn={isSignedIn}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
              setIsSignedIn={setIsSignedIn}
              handleLogout={handleLogout}
            />
          }
        />
        <Route
          path="/support"
          element={
            <Support
              isSignedIn={isSignedIn}
              setIsSignedIn={setIsSignedIn}
              handleLogout={handleLogout}
            />
          }
        />
        <Route
          path="/profile"
          element={
            <Profile
              isSignedIn={isSignedIn}
              setIsSignedIn={setIsSignedIn}
              handleLogout={handleLogout}
            />
          }
        />
        <Route
          path="/checkout"
          element={
            <Checkout
              isSignedIn={isSignedIn}
              setIsSignedIn={setIsSignedIn}
              handleLogout={handleLogout}
              totalPrice={totalPrice}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

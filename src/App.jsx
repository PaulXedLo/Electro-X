import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import ShoppingCart from "./pages/shoppingcart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Support from "./pages/Support";
import Profile from "./pages/Profile";
import Checkout from "./pages/Checkout";
import ProductDetails from "./components/Home/ProductDetails";
function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [discount, setDiscount] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      setIsSignedIn(true);
      setDiscount(true);
    } else {
      setIsSignedIn(false);
      setDiscount(false);
    }
  }, []);
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("password");
    sessionStorage.removeItem("address");
    sessionStorage.removeItem("postalCode");
    sessionStorage.removeItem("firstName");
    sessionStorage.removeItem("lastName");
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
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

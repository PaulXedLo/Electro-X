import Navigation from "../components/navigation";
import Items from "../components/ShoppingCart/items";
function ShoppingCart({
  isSignedIn,
  setIsSignedIn,
  handleLogout,
  totalPrice,
  setTotalPrice,
}) {
  return (
    <>
      <Navigation isSignedIn={isSignedIn} handleLogout={handleLogout} />
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

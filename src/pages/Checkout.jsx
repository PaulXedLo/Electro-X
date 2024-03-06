import CheckoutMain from "../components/Checkout/checkout_main";
import Navigation from "../components/navigation";

export default function Checkout({ isSignedIn, handleLogout, cartSize }) {
  return (
    <>
      <Navigation
        isSignedIn={isSignedIn}
        handleLogout={handleLogout}
        cartSize={cartSize}
      />
      <CheckoutMain />
    </>
  );
}

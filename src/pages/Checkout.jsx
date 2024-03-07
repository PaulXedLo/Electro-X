import CheckoutMain from "../components/Checkout/checkout_main";
import Navigation from "../components/navigation";
import "../components/Checkout/checkout.scss";
export default function Checkout({ isSignedIn, handleLogout }) {
  return (
    <>
      <Navigation isSignedIn={isSignedIn} handleLogout={handleLogout} />
      <CheckoutMain />
    </>
  );
}

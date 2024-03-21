import { useState, useEffect } from "react";
export default function CheckoutMain({}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [estimatedDeliveryDate, setEstimatedDeliveryDate] = useState("");

  useEffect(() => {
    const storedFirstName = sessionStorage.getItem("firstName") || "";
    const storedLastName = sessionStorage.getItem("lastName") || "";
    const storedAddress = sessionStorage.getItem("address") || "";
    setFirstName(storedFirstName);
    setLastName(storedLastName);
    setAddress(storedAddress);
    const currentDate = new Date();
    const deliveryDate = new Date(
      currentDate.getTime() + 5 * 24 * 60 * 60 * 1000
    );
    setEstimatedDeliveryDate(deliveryDate.toDateString());
  }, []);

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  return (
    <div className="checkout_container">
      <div className="checkout_form">
        <h2 className="checkout_header">Checkout</h2>
        <div className="payment_options">
          <label>
            <input
              type="radio"
              value="Cash"
              checked={paymentMethod === "Cash"}
              onChange={() => handlePaymentMethodChange("Cash")}
            />
            Cash
          </label>
          <label>
            <input
              type="radio"
              value="Card"
              checked={paymentMethod === "Card"}
              onChange={() => handlePaymentMethodChange("Card")}
              disabled
            />
            Card
          </label>
        </div>
        <div className="personal_information">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="address_information">
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <input
            type="text"
            placeholder="Address 2"
            value={address2}
            onChange={(e) => setAddress2(e.target.value)}
          />
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            type="text"
            placeholder="Postal Code"
            value={postalCode}
            onChange={(e) => setPostalCode(e.target.value)}
          />
        </div>
        <div className="checkout_summary">
          <p className="delivery_date">
            Estimated Delivery Date: {estimatedDeliveryDate}
          </p>
          <a className="place_order_button" href="/Electro-X">
            Place Order
          </a>
        </div>
      </div>
    </div>
  );
}

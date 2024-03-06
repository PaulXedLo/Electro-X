export default function Navigation({
  cartSize,
  isSignedIn,
  handleLogout,
  discount,
}) {
  return (
    <div className="navbar-ol">
      <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <a href="/">Home</a>
          </li>
          {isSignedIn ? (
            <>
              <li>
                <a href="/profile">
                  <i className="fas fa-user"></i> Profile
                </a>
              </li>
              <li>
                <a href="/" onClick={handleLogout}>
                  Log Out
                </a>
              </li>
            </>
          ) : (
            <li>
              <a href="/signin">Sign Up</a>
            </li>
          )}
          <li>
            <a href="/support">Support</a>
          </li>
        </ul>
        <div className="cart">
          <a href="/cart" className="cart-link">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI1-lBuH3Vxd6FcFez0vjEKjWLqgUDsPoOSwZ6WTw7W70rxaoGHZ7XBXl7X0DygKm3Iwg&usqp=CAU"
              alt="Cart"
              className="cartimg"
            />
            {cartSize > 0 && <span className="cart-size">{cartSize}</span>}
          </a>
        </div>
      </nav>
    </div>
  );
}

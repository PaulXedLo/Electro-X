import { Link } from "react-router-dom";

export default function Navigation({ isSignedIn, handleLogout }) {
  return (
    <div className="navbar-ol">
      <nav className="navbar">
        <ul className="navbar-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          {isSignedIn ? (
            <>
              <li>
                <Link to="/profile">
                  <i className="fas fa-user"></i> Profile
                </Link>
              </li>
              <li>
                <Link to="/" onClick={handleLogout}>
                  Log Out
                </Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/signin">Sign Up</Link>
            </li>
          )}
          <li>
            <Link to="/support">Support</Link>
          </li>
        </ul>
        <div className="cart">
          <Link to="/cart" className="cart-link">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI1-lBuH3Vxd6FcFez0vjEKjWLqgUDsPoOSwZ6WTw7W70rxaoGHZ7XBXl7X0DygKm3Iwg&usqp=CAU"
              alt="Cart"
              className="cartimg"
            />
          </Link>
        </div>
      </nav>
    </div>
  );
}

import Dashboard from "../components/Profile/Dashboard";
import Navigation from "../components/navigation";
import "../components/Profile/profile.scss";
import SignFooter from "../components/Signin/footer";
export default function Profile({ isSignedIn, setIsSignedIn, handleLogout }) {
  return (
    <>
      <Navigation
        isSignedIn={isSignedIn}
        setIsSignedIn={setIsSignedIn}
        handleLogout={handleLogout}
      />
      <Dashboard handleLogout={handleLogout} />
      <SignFooter />
    </>
  );
}

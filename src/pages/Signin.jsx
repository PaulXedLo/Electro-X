import Navigation from "../components/navigation";
import Form from "../components/Signin/form";
import SignFooter from "../components/Signin/footer";
import "../components/Signin/signin.scss";
export default function Signin({ isSignedIn, setIsSignedIn, handleLogout }) {
  return (
    <>
      <Navigation
        isSignedIn={isSignedIn}
        setIsSignedIn={setIsSignedIn}
        handleLogout={handleLogout}
      />
      <Form isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
      <SignFooter />
    </>
  );
}

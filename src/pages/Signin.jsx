import Navigation from "../components/navigation";
import Form from "../components/Signin/form";
import SignFooter from "../components/Signin/footer";
export default function Signin({
  isSignedIn,
  setIsSignedIn,
  handleLogout,
  cartSize,
}) {
  return (
    <>
      <Navigation
        isSignedIn={isSignedIn}
        setIsSignedIn={setIsSignedIn}
        handleLogout={handleLogout}
        cartSize={cartSize}
      />
      <Form isSignedIn={isSignedIn} setIsSignedIn={setIsSignedIn} />
      <SignFooter />
    </>
  );
}

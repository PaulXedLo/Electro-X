import SupportInfo from "../components/Support/SupportInfo";
import Navigation from "../components/navigation";

export default function Support({
  isSignedIn,
  setIsSignedIn,
  cartSize,
  handleLogout,
}) {
  return (
    <div className="supp">
      <Navigation
        isSignedIn={isSignedIn}
        setIsSignedIn={setIsSignedIn}
        cartSize={cartSize}
        handleLogout={handleLogout}
      />
      <SupportInfo />
    </div>
  );
}

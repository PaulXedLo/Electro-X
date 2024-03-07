import Search from "./search";
export default function Header({ setSearch, search }) {
  return (
    <header className="header">
      <div className="header-info">
        <h1 className="header-text">Get your new phone today!</h1>
        <Search setSearch={setSearch} search={search} />
      </div>
      <img
        src="./Electro-X/header-bg.png"
        alt="photo of iphone"
        className="phonephoto"
      />
    </header>
  );
}

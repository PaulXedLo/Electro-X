import Search from "./search";
export default function Header({ setSearch, search }) {
  return (
    <header className="header">
      <div className="header-info">
        <h1 className="header-text">Get your new phone today!</h1>
        <Search setSearch={setSearch} search={search} />
      </div>
      <img src="/header-bg.jpg" alt="photo of iphone" className="phonephoto" />
    </header>
  );
}

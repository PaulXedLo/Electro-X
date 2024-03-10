import Search from "./search";
import headerback from "./images/header_bg.jpg";
import headerbottom from "./images/header_bottom.jpg";
export default function Header({ setSearch, search }) {
  return (
    <header className="header">
      <div className="header-info">
        <h1 className="header-text">Get your new phone today!</h1>
        <Search setSearch={setSearch} search={search} />
      </div>
      <img src={headerback} alt="photo of iphone" className="phonephoto" />
      <img src={headerbottom} alt="photo of iphone" className="header_bottom" />
    </header>
  );
}

import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";

const Header = () => {
  return (
    <header>
      <div className="header-container">
        <div>
          <div className="logo">
            <img src={logo} alt="marvel logo" />
          </div>
          <nav>
            <Link to={"/"}> Characters</Link>
            <Link to={"/comics"}>Comics</Link>
            <Link>Favoris</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

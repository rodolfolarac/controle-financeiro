import "./style.css";
import logo from "../../assets/img/logo.svg";
const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="" />

      <button className="buttonHeader">Inicio</button>
    </header>
  );
};

export default Header;

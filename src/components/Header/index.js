import Navbar from "react-bootstrap/Navbar";
import Button from "../Button";

function Header({ darkMode, setDarkMode }) {
  return (
    <Navbar>
      <Navbar.Brand href="#home" className="container">
        <Button darkMode={darkMode} setDarkMode={setDarkMode} />
      </Navbar.Brand>
    </Navbar>
  );
}

export default Header;

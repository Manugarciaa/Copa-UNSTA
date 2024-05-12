import { logo } from "../assets";

const Header = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="Facultad-de-Ingenieria" className="w-[124px] h-[40px]" />
    </nav>
  );
};

export default Header;

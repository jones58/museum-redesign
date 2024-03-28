// React Header component //
import ComputerDropdown from "./computerDropDown";

const Header = () => {
  return (
    <header>
      <ComputerDropdown />
      <div className="flex items-center justify-between py-8 text-black text-2xl font-bold uppercase">
        <h1>Computers</h1>

        <h1>Visit</h1>
        <h1>Support</h1>
        <h1>Contact</h1>
      </div>
    </header>
  );
};

export default Header;

// React Header component //
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="flex flex-col lg:flex-row items-center lg:justify-between lg:py-10">
      <Logo />
      <div className="flex items-center justify-end lg:flex-row flex-col space-x-5  text-black text-2xl font-bold uppercase">
        <h1>Computers</h1>
        <h1>Visit</h1>
        <h1>Support</h1>
        <h1>Contact</h1>
      </div>
    </header>
  );
};

export default Header;

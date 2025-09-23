import { useState } from "react";
import logoVerde from "../assets/logoVerde.png";
import DropdownMenu from "./DropdownMenu";
import MobileMenu from "./MobileMenu";
import { menuData, mobileMenuItems } from "../data/menuData";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState({
    servicos: false,
    consultoria: false,
    sobre: false,
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState({
    servicos: false,
    consultoria: false,
    sobre: false,
  });

  const openDropdown = (menu) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [menu]: true,
    }));
  };

  const closeDropdown = (menu) => {
    setDropdownOpen((prev) => ({
      ...prev,
      [menu]: false,
    }));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen({
      servicos: false,
      consultoria: false,
      sobre: false,
    });
  };

  const toggleMobileDropdown = (menu) => {
    setMobileDropdownOpen((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-32 py-6 border-b border-gray-300 bg-backgrond">
      <div>
        <img src={logoVerde} alt="logo" className="h-10 sm:h-12" />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex text-base text-white items-center gap-4 lg:gap-6 xl:gap-8 font-roboto">
        <li className="hover:text-primary transition-colors">
          <a href="/">Início</a>
        </li>

        <DropdownMenu
          title={menuData.servicos.title}
          items={menuData.servicos.items}
          isOpen={dropdownOpen.servicos}
          onMouseEnter={() => openDropdown("servicos")}
          onMouseLeave={() => closeDropdown("servicos")}
          width={menuData.servicos.width}
        />

        <DropdownMenu
          title={menuData.consultoria.title}
          items={menuData.consultoria.items}
          isOpen={dropdownOpen.consultoria}
          onMouseEnter={() => openDropdown("consultoria")}
          onMouseLeave={() => closeDropdown("consultoria")}
          width={menuData.consultoria.width}
        />

        <li className="hover:text-primary transition-colors">
          <a href="/academy">Academia</a>
        </li>

        <DropdownMenu
          title={menuData.sobre.title}
          items={menuData.sobre.items}
          isOpen={dropdownOpen.sobre}
          onMouseEnter={() => openDropdown("sobre")}
          onMouseLeave={() => closeDropdown("sobre")}
          width={menuData.sobre.width}
        />

        <li className="hover:text-primary transition-colors">
          <a href="/contact">Contato</a>
        </li>
      </ul>

      {/* Desktop Portal Button */}
      <div className="hidden md:block bg-primary text-black px-6 py-2 rounded-lg hover:bg-primary/50 transition duration-300 cursor-pointer">
        Portal do Cliente
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1"
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-transform ${
            mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-opacity ${
            mobileMenuOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`block w-6 h-0.5 bg-white transition-transform ${
            mobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></span>
      </button>

      <MobileMenu
        isOpen={mobileMenuOpen}
        menuItems={mobileMenuItems}
        dropdownStates={mobileDropdownOpen}
        onToggleDropdown={toggleMobileDropdown}
        onCloseMenu={closeMobileMenu}
      />
    </div>
  );
};

export default Navbar;

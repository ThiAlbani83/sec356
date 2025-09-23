import { GoChevronDown } from "react-icons/go";
import { Link } from "react-router-dom";

const MobileMenu = ({
  isOpen,
  menuItems,
  dropdownStates,
  onToggleDropdown,
  onCloseMenu,
}) => {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 w-full bg-backgrond border-t border-gray-300 md:hidden z-50">
      <ul className="flex flex-col py-4 px-4 sm:px-6 space-y-2">
        {menuItems.map((item, index) => (
          <li key={index}>
            {item.items ? (
              // Dropdown item
              <>
                <button
                  onClick={() => onToggleDropdown(item.key)}
                  className="flex justify-between items-center w-full py-2 text-white hover:text-primary transition-colors"
                >
                  {item.title}
                  <GoChevronDown
                    className={`transform transition-transform ${
                      dropdownStates[item.key] ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {dropdownStates[item.key] && (
                  <ul className="pl-4 mt-2 space-y-1">
                    {item.items.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={subItem.href}
                          onClick={onCloseMenu}
                          className="block py-1 text-gray-300 hover:text-primary transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              // Regular link
              <Link
                to={item.href}
                onClick={onCloseMenu}
                className="block py-2 text-white hover:text-primary transition-colors"
              >
                {item.title}
              </Link>
            )}
          </li>
        ))}

        {/* Portal Button */}
        <li className="pt-4">
          <div className="bg-primary text-black px-6 py-2 rounded-lg hover:bg-primary/50 transition duration-300 cursor-pointer text-center">
            Portal do Cliente
          </div>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;

import { GoChevronDown } from "react-icons/go";

const DropdownMenu = ({
  title,
  items,
  isOpen,
  onMouseEnter,
  onMouseLeave,
  width = "w-80",
}) => {
  return (
    <li
      className="relative"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="flex items-center gap-1 hover:text-primary transition-colors cursor-pointer">
        {title}
        <GoChevronDown />
      </div>
      {isOpen && (
        <div
          className={`absolute top-full left-0 mt-0 ${width} max-w-[90vw] bg-backgrond rounded-lg shadow-lg py-3 z-50 border border-gray-700`}
        >
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="block px-4 py-2 hover:text-primary text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </li>
  );
};

export default DropdownMenu;

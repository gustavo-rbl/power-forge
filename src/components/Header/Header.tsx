import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { headerData } from "../../assets/data";

// style
import style from "./Header.module.scss";
import { FaBars, FaX } from "react-icons/fa6";

// asset
import { CgGym } from "react-icons/cg";

function Header() {
  const [isToggle, setIsToggle] = useState(false);

  const toggleMenu = () => {
    setIsToggle((old) => !old);
  };

  const handleExpanded = (e) => {
    const { tagName } = e.target;

    if (window.scrollY !== 0) setIsToggle(false);

    if (tagName !== "A") return;

    if (isToggle) setIsToggle(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleExpanded);

    return () => {
      window.removeEventListener("scroll", handleExpanded);
    };
  });

  return (
    <header className={style.header}>
      <Link to="." className={style.header_hero}>
        <CgGym className={style.header_hero_logo} />
        <div>
          <h2>PowerForge</h2>
          <h2 className={style.header_hero_small}>Fitness</h2>
        </div>
      </Link>

      <nav className={`${style.header_nav} ${isToggle ? style.header_nav_active : null}`}>
        <ul className={style.header_navLinks} onClick={handleExpanded}>
          {headerData.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.to === "home" ? "." : link.to}
                className={({ isActive }) => (isActive ? style.header_navLinks_active : undefined)}
              >
                {link.to.toUpperCase()}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className={style.header_menu} onClick={toggleMenu}>
        {isToggle ? <FaX /> : <FaBars />}
      </div>
    </header>
  );
}

export default Header;

import React, { useState, useEffect } from "react";
import "../../styleSheets/Nav.css";
import HamburgerMenu from "./HamburgerMenu";
import { navLinks } from "./Data";
import LinkItem from "./LinkItem";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(window.innerWidth > 990);
  const [activeLink, setActiveLink] = useState(0);

  const handleClickScroll = (textId) => {
    const element = document.getElementById(textId);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const sectionElements = navLinks.map((link) =>
      document.getElementById(link.text)
    );
    const viewportHeight = window.innerHeight;

    for (let i = 0; i < sectionElements.length; i++) {
      const rect = sectionElements[i].getBoundingClientRect();
      if (rect.top >= 0 && rect.top <= viewportHeight) {
        setActiveLink(i);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 990) {
        setIsNavOpen(false);
      } else {
        setIsNavOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isNavOpen]);

  return (
    <>
      <HamburgerMenu open={isNavOpen} setOpen={setIsNavOpen} />
      {/* Metodo para cerrar y abrir el menu */}
      <nav
        class={`toggle-menu ${isNavOpen ? "toggle-menu__open" : "toggle-menu__close"
          }`}
      >
        {/* <div className="toggle-menu__logo">the company logo</div> */}
        <ul className="toggle-menu__list">
          {navLinks.map((link, index) => (
            <li key={index}>
              {/* Use the Link component from react-scroll */}
              <a
                href="#"
                className={`toggle-menu__link ${activeLink === index ? "toggle-menu__active" : ""
                  }`}
                onClick={(e) => {
                  e.preventDefault(); // Prevent default anchor link behavior
                  setActiveLink(index);
                  handleClickScroll(link.text);
                }}
              >
                <LinkItem
                  text={link.text}
                  icon={link.icon}
                  iconClassName="icon-nav"
                  index={index}
                />
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Nav;

import React from "react";
import "../../styleSheets/HamburgerMenu.css";
import { CgClose, CgMenu } from "react-icons/cg";

const HamburgerMenu = ({ open, setOpen }) => {
  return (
    <button
      className={`menu ${open ? "menu__active" : ""}`} // Metodo para mantener el icono en azul una vez demos clic sobre el
      onClick={() => {
        setOpen((prevOpen) => !prevOpen);
      }}
    >
      <span class="menu__icon">
        {open ? <CgClose /> : <CgMenu />}
        {/*Metodo para cambiar de estado el boton */}
      </span>
    </button>
  );
};

export default HamburgerMenu;

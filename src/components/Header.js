import React from "react";
import "./Header.css";

const Header = ({ black }) => {
  return (
    <header className={black ? "black" : ""}>
      <div className="header--logo">
        <a href="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix"
          ></img>
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img
            src="https://ia803404.us.archive.org/31/items/profiles_202104/chicken.png"
            alt="Usuário"
          ></img>
        </a>
      </div>
    </header>
  );
};

export default Header;

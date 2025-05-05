import React from "react";
import "../styles/layout/_l-header.scss";
import {
  FaUserCircle,
  FaStar,
  FaGamepad,
  FaUsers,
  FaCrown,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="l-header">
      <div className="l-header__left">
        <FaUserCircle className="l-header__icon--user-icon" />
        <span className="l-header__username">ユーザー名</span>
      </div>
      <div className="l-header__right">
        <FaStar className="l-header__icon" />
        <FaGamepad className="l-header__icon" />
        <FaUsers className="l-header__icon" />
        <FaCrown className="l-header__icon" />
      </div>
    </header>
  );
};

export default Header;

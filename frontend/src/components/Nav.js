import React from "react";
import { navigation } from "../data";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="ml-[70px]">
      <ul className="flex gap-x-[42px]">
        {navigation.map((item, index) => {
          return (
            <li key={index}>
              <Link to={item.href}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;

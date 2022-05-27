import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export const Nav = () => {
  const navigate = useNavigate();

  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/search">Suche</NavLink>
      </li>
      <li>
        <NavLink to="/imprint">Impressum</NavLink>
      </li>
      <li>
        <NavLink to="customers/new">Neuer Kunde</NavLink>
      </li>
      {/* Beispiel: navigate Back */}
      {/* <li
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </li> */}
    </ul>
  );
};

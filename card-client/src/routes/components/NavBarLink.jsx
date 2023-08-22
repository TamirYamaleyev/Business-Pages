import { node, object, string } from "prop-types";
import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBarLink({ to, children, sx }) {

  return (
    <NavLink to={to} style={({ isActive }) => ({ backgroundColor: (isActive && to != "/") ? "#03a8f4d8" : "", ...sx })}>
      {children}
    </NavLink>
  );
}

NavBarLink.propTypes = {
  to: string.isRequired,
  children: node.isRequired,
  sx: object,
};



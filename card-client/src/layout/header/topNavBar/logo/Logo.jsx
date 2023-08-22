import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import NavBarLink from "../../../../routes/components/NavBarLink";
import ROUTES from "../../../../routes/routesModel";

export default function Logo() {
  return (
      <NavBarLink to={ROUTES.ROOT}>
        <Typography
          variant="h4"
          sx={{
            marginRight: 2,
            marginLeft: 1,
            marginTop: 0,
            fontFamily: "fantasy",
          }}
        >
          Business Pages
        </Typography>
      </NavBarLink>
  );
}

import { Box } from "@mui/material";
import { node } from "prop-types";
import React from "react";
import { useTheme } from "../../providers/ThemeProvider";

export default function Main({ children }) {
  const { theme } = useTheme();
  return (
    <React.Fragment>
      <Box
        sx={{
          minHeight: "90vh",
          backgroundColor: theme.palette.mode === 'dark' ? "#333333" : "#e3f2fd",
          color: theme.palette.text.primary
        }}
      >
        {children}
      </Box>
    </React.Fragment>
  );
}

Main.propTypes = {
  children: node.isRequired,
};

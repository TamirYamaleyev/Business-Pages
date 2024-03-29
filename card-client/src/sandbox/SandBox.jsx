import { AppBar, Container, Toolbar } from "@mui/material";
import React from "react";
import {  Outlet } from "react-router-dom";
import NavItem from "../routes/components/NavItem";
import { styled } from '@mui/material/styles';
import { useTheme } from "../providers/ThemeProvider";

const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

export default function SandBox() {

  const { theme } = useTheme();

  return (
    <div>
      <AppBar className={theme.palette.mode === 'dark' ? "AppBarSandboxDark" : "AppBarSandbox"} position="fixed">
        <Toolbar>
          <NavItem to="counter" label="Counter Page" />
          <NavItem
            to="mydetails"
            label="My Details Page"
          />
          <NavItem
            to="password"
            label="Password Page"
          />
          <NavItem to="todo" label="Todo Page" />
          <NavItem
            to="firsteffect"
            label="First Effect Page"
          />
          <NavItem
            to="countries"
            label="Coutries Page"
          />
          <NavItem to="render" label="Render" />
        </Toolbar>
      </AppBar>
      <Offset />
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.css";

export default function NavBar() {
  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: "#2c4147" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <nav className="navbar">
            <ul>
              <div className="logo">
                <a href="/">
                  <img src="https://codepath-student-store-demo.surge.sh/assets/codepath.f1b3e41a.svg " />
                </a>
              </div>
              <li>
                <a href=" ">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>

                <a href=" ">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
                <a href=" ">
                  <i className="fa fa-facebook" aria-hidden="true"></i>
                </a>

                <a href="/activity " className="Home">
                  Activity
                </a>
              </li>
              <li>
                <a href="/exercise">Exercise</a>
              </li>
              <li>
                <a href="\nutrition ">Nutrition</a>
              </li>
              <li>
                <a href="\sleep ">Sleep</a>
              </li>
              <li>
                <a href="\login">Login</a>
              </li>
              <li>
                <a href="\signup" className="sign">
                  Sign Up
                </a>
              </li>
            </ul>
          </nav>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

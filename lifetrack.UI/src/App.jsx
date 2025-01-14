import * as React from "react";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

import Activity from "./components/Activity";
import Button from "@mui/material/Button";
import NavBar from "./components/Navbar";
import Container from "@mui/material/Container";
import Hero from "./components/Hero";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { AuthContextProvider, useAuthContext } from "../AuthContext/auth";
import Nutritform from "./components/Nutritform";
import NutritionPage from "./components/NutritionPage";
import apiClient from "../apiClient";
import ExerciseForm from "./components/ExerciseForm";
import Exercise from "./components/Exercise";
function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchAuthUser = async () => {
      const { data, error } = await apiClient.fetchUserFromToken();
      if (data) setUser(data.user);
    };

    const token = localStorage.getItem("life-starter-token");
    if (token) {
      apiClient.setToken(token);
      fetchAuthUser();
    }
  }, []);

  return (
    <AuthContextProvider>
      <>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/nutrition" element={<NutritionPage />} />
            <Route path="/nutritform" element={<Nutritform />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/exercise" element={<Exercise />} />
            <Route path="/exerciseform" element={<ExerciseForm />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/nutritform" element={<nutritform />} /> */}
          </Routes>
        </BrowserRouter>

        {/* <Container
        id="container"
        maxWidth={false}
        sx={{ backgroundColor: "#2c4147", flexGrow: 1 }}
      >
        {" "}
        my Container
      </Container> */}
      </>
    </AuthContextProvider>
    /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
          <Button variant="contained">Contained</Button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header> */
  );
}

export default App;

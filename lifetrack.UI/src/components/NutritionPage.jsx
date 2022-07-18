import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../AuthContext/auth";
import axios from "axios";

import "./NutritionPage.css";

export default function Nutrition({}) {
  const { user, setUser } = useAuthContext();
  return (
    <div className="Nutrition">
      <div className="header">
        <h1 className="head">Nutrition</h1>
      </div>
      <div className="content">
        <h3>Overview</h3>
        <a href="/nutritform">
          <button className="nutritbutton">Record nutrition</button>
        </a>
      </div>
      <div className="feed">
        <div className="ending">
          <h2>Nothing here yet.</h2>
        </div>
      </div>
    </div>
  );
}

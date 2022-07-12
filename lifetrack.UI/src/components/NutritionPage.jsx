import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import "./NutritionPage.css";

export default function Nutrition({ setAppState }) {
  return (
    <div className="Nutrition">
      <div classname="header">
        <h1>Nutrition</h1>
      </div>
      <button>
        <Link to="/nutritform">Record nutrition</Link>
      </button>
    </div>
  );
}

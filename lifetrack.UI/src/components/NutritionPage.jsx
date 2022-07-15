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
        <h1>Nutrition</h1>
      </div>
      <button>
        <Link to="/nutritform">Record nutrition</Link>
      </button>
    </div>
  );
}

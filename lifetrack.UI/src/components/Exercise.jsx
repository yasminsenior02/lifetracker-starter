import axios from "axios";
import "./Exercise.css";
import ExerciseForm from "./ExerciseForm";
import { useAuthContext } from "../../AuthContext/auth";
import { Link } from "react-router-dom";
import NavBar from "./Navbar";

export default function Exercise({}) {
  const { user, setUser } = useAuthContext();
  return (
    <div className="Nutrition">
      <div className="header">
        <h1>Exercise</h1>
      </div>
      <button>
        <Link to="/exerciseform">Record Exercise</Link>
      </button>
    </div>
  );
}

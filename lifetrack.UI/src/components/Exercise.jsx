import axios from "axios";
import "./Exercise.css";
import ExerciseForm from "./ExerciseForm";
import { useAuthContext } from "../../AuthContext/auth";
import { Link } from "react-router-dom";
import NavBar from "./Navbar";

export default function Exercise({}) {
  const { user, setUser } = useAuthContext();
  return (
    <div className="Exercise">
      <div className="header">
        <h1>Exercise</h1>
      </div>
      <div className="content">
        <h3>Overview</h3>
        <a href="/exerciseform">
          <button className="exercisebutton">Record Exercise</button>
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

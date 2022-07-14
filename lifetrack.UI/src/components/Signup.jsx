import axios from "axios";
import "./Signup.css";
import Signupform from "./Signupform";
import NavBar from "./Navbar";

export default function Signup({ setAppState }) {
  return <Signupform setAppState={setAppState} />;
}

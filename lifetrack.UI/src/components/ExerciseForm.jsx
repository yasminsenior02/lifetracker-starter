import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./ExerciseForm.css";
import { useAuthContext } from "../../AuthContext/auth";
import apiClient from "../../apiClient";
import NavBar from "./Navbar";
import Exercise from "./Exercise";

export default function ExerciseForm({}) {
  const { user, setUser } = useAuthContext();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: "",
    category: "",

    duration: "",
    intensity: "",
  });

  const handleOnInputChange = (event) => {
    if (event.target.name === "password") {
      if (form.passwordConfirm && form.passwordConfirm !== event.target.value) {
        setErrors((e) => ({
          ...e,
          passwordConfirm: "Password's do not match",
        }));
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }));
      }
    }
    if (event.target.name === "passwordConfirm") {
      if (form.password && form.password !== event.target.value) {
        setErrors((e) => ({
          ...e,
          passwordConfirm: "Password's do not match",
        }));
      } else {
        setErrors((e) => ({ ...e, passwordConfirm: null }));
      }
    }
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setErrors((e) => ({ ...e, email: "Please enter a valid email." }));
      } else {
        setErrors((e) => ({ ...e, email: null }));
      }
    }

    setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };

  const handleOnSubmit = async () => {
    setIsLoading(true);
    setErrors((e) => ({ ...e, form: null }));

    if (form.passwordConfirm !== form.password) {
      setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match." }));
      setIsLoading(false);
      return;
    } else {
      setErrors((e) => ({ ...e, passwordConfirm: null }));
    }
    try {
      const res = await apiClient.request("exercise", "post", form);

      console.log(res);
      if (res?.data?.exercise) {
        setUser(res.data);
        // apiClient.setToken(res.data.token);
        setIsLoading(false);
        navigate("/exercise");
      } else {
        setErrors((e) => ({
          ...e,
          form: "Something went wrong with Record Exercise",
        }));
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
      const message = err?.response?.data?.error?.message;
      setErrors((e) => ({
        ...e,
        form: message ? String(message) : String(err),
      }));
      setIsLoading(false);
    }
  };

  return (
    <div className="ExRecord">
      <div className="media">{/* <MedicalResearch width={555} /> */}</div>
      <div className="card">
        <div className="text">
          <h2>Record Exercise </h2>
        </div>

        {errors.form && <span className="error">{errors.form}</span>}
        <br />

        <div className="form">
          <div className="input-field">
            <label htmlFor="name">name</label>
            <br />
            <input
              type="name"
              name="name"
              placeholder="Exercise name"
              value={form.name}
              onChange={handleOnInputChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="split-inputs">
            <div className="input-field">
              <label htmlFor="category">Category</label>
              <br />
              <input
                type="text"
                name="category"
                placeholder="Exercise category"
                value={form.category}
                onChange={handleOnInputChange}
              />
              {errors.category && (
                <span className="error">{errors.category}</span>
              )}
            </div>
            <div>
              <div className="input-field">
                <label htmlFor="duration">Duration</label>
                <br />
                <input
                  type="text"
                  name="duration"
                  placeholder="duration"
                  value={form.duration}
                  onChange={handleOnInputChange}
                />
                {errors.quantity && (
                  <span className="error">{errors.duration}</span>
                )}
              </div>
            </div>

            <div className="input-field">
              <label htmlFor="intnesity">Intensity</label>
              <br />
              <input
                type="text"
                name="intensity"
                placeholder="Intensity"
                value={form.intensity}
                onChange={handleOnInputChange}
              />
              {errors.image && (
                <span className="error">{errors.intensity}</span>
              )}
            </div>

            <button
              className="btn"
              disabled={isLoading}
              onClick={handleOnSubmit}
            >
              {isLoading ? "Loading..." : "Save"}
            </button>
          </div>

          <div className="footer"></div>
        </div>
      </div>
    </div>
  );
}

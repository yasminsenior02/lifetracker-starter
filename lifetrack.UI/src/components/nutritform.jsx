import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Nutritform.css";
import NavBar from "./Navbar";

export default function Nutritform({ setAppState }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: "",
    category: "",
    quantity: "",
    calories: "",
    image: "",
  });

  //   const handleOnInputChange = (event) => {
  //     if (event.target.name === "name") {
  //       if (event.target.value.indexOf("@") === -1) {
  //         setErrors((e) => ({ ...e, email: "Please enter a valid email." }));
  //       } else {
  //         setErrors((e) => ({ ...e, email: null }));
  //       }
  //     }

  //     setForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  //   };

  //   const handleOnSubmit = async () => {
  //     setIsLoading(true);
  //     setErrors((e) => ({ ...e, form: null }));

  //     if (form.passwordConfirm !== form.password) {
  //       setErrors((e) => ({ ...e, passwordConfirm: "Passwords do not match." }));
  //       setIsLoading(false);
  //       return;
  //     } else {
  //       setErrors((e) => ({ ...e, passwordConfirm: null }));
  //     }
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
      const res = await axios.post("http://localhost:3001/auth/register", {
        name: form.name,
        category: form.category,
        quantity: form.quantity,
        calories: form.calories,
        image: form.image,
      });

      if (res?.data?.user) {
        setAppState(res.data);
        setIsLoading(false);
        navigate("/portal");
      } else {
        setErrors((e) => ({
          ...e,
          form: "Something went wrong with Record Nutrition",
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
    <div className="NutRecord">
      <div className="media">{/* <MedicalResearch width={555} /> */}</div>
      <div className="card">
        <div className="text">
          <h2>Record Nutrition </h2>
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
              placeholder="Nutrition name"
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
                placeholder="Nutrition category"
                value={form.category}
                onChange={handleOnInputChange}
              />
              {errors.category && (
                <span className="error">{errors.category}</span>
              )}
            </div>

            <div className="split-inputs">
              <div className="input-field">
                <label htmlFor="quantity">Quantity</label>
                <br />
                <input
                  type="text"
                  name="firstName"
                  placeholder=""
                  value={form.quantity}
                  onChange={handleOnInputChange}
                />
                {errors.quantity && (
                  <span className="error">{errors.quantity}</span>
                )}
              </div>
              <div className="input-field">
                <label htmlFor="calories">Calories</label>
                <br />
                <input
                  type="text"
                  name="calories"
                  placeholder=""
                  value={form.quantity}
                  onChange={handleOnInputChange}
                />
                {errors.quantity && (
                  <span className="error">{errors.quantity}</span>
                )}
              </div>
            </div>

            <div className="input-field">
              <label htmlFor="image">Image URL</label>
              <br />
              <input
                type="text"
                name="image"
                placeholder="http://www.food-image.com/1"
                value={form.image}
                onChange={handleOnInputChange}
              />
              {errors.image && <span className="error">{errors.image}</span>}
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

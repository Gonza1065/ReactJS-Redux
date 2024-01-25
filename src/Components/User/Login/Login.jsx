import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { storeToken } from "../../../features/token/tokenSlice";
import "./Login.css";

export function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        const { token } = data;
        dispatch(storeToken(token));
        navigate("/");
      } else {
        const data = await response.json();
        const { message } = data;
        setMessage(message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <div className="title-login">
        <h1>Login</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={formData.password}
        />
        <button type="submit">Login</button>
      </form>
      <div className="message">
        <h3>{message}</h3>
      </div>
    </>
  );
}

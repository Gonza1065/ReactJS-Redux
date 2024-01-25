import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
export function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
    direction: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        navigate("/login");
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
      <div className="title-signup">
        <h1>Signup</h1>
      </div>
      <form onSubmit={handleSubmit} className="form-signup">
        <input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={formData.name}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          onChange={handleChange}
          value={formData.lastName}
        />
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
        <input
          type="text"
          name="role"
          placeholder="Role"
          onChange={handleChange}
          value={formData.role}
        />
        <input
          type="text"
          name="direction"
          placeholder="Direction"
          onChange={handleChange}
          value={formData.direction}
        />
        <button type="submit">Signup</button>
      </form>
    </>
  );
}

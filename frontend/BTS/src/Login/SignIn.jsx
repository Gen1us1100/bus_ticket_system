import "./index.scss";
import vid from "../Assets/xyz.gif";
import "boxicons";
import axios from "axios";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

export default function Login() {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your backend to verify the login credentials
      const response = await axios.post("http://localhost:8000/login/", {
        email,
        password,
      });
      console.log(response.data);
      // If login is successful, navigate to the home page
      if (response.status === 200) {
        navigate("/home");
      } else {
        // Handle the case where the login fails
        alert("Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="container">
       <button className="btn"   onClick={() => navigate("/nav")}>navigation</button>
      <div className="box">
        <div className="welcome">Welcome to BTS!</div>
        <div className="gif">
          <img src={vid} alt="loading..." />
        </div>

        <div className="login">
          <form onSubmit={handleSubmit}>
            <div className="input">
              <input type="text" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
              <box-icon
                name="user-circle"
                type="solid"
                color="#71c563"
              ></box-icon>
            </div>
            <div className="input">
              <input type="text" placeholder="Password" value={password}
                onChange={(e) => setPassword(e.target.value)} required />
              <box-icon type="solid" name="lock-alt" color="#71c563"></box-icon>
            </div>
            <div className="input">
              <button type="submit" className="btn">
                LOGIN
              </button>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <div
                style={{ flex: 1, height: "1px", backgroundColor: "GREY" }}
              />

              <div style={{ padding: "0 2px" }}>
                <p
                  style={{
                    width: "70px",
                    textAlign: "center",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  OR
                </p>
              </div>
              <div
                style={{ flex: 1, height: "1px", backgroundColor: "GREY" }}
              />
            </div>

            <div className="google">
              Login with 
              <button
                className="g-btn"
                onClick={() => {
                  console.log("Google sign-in button clicked");
                }}
              >
                <FcGoogle size={25} />
              </button>
              
            </div>

            <div className="sign-up">
              <p>
                Don&apos;t have an account?<br></br>
                <a className="link" onClick={() => navigate("/register")}>
                  SignUp
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

import "./index.scss";
import vid from "../Assets/xyz.gif";
import "boxicons";

import { useNavigate } from "react-router-dom";

export default function Register() {
  let navigate = useNavigate();

  return (
    <div className="container">
      <div className="box">
        <div className="welcome">Welcome to BTS!</div>
        <div className="gif">
          <img src={vid} alt="loading..." />
        </div>

        <div className="login">
          <form>
            <div className="input">
              <input type="text" placeholder="Full Name" required />
              <box-icon
                name="user-circle"
                type="solid"
                color="#71c563"
              ></box-icon>
            </div>
            <div className="input">
              <input type="text" placeholder="Email" required />
              <box-icon
                name="user-circle"
                type="solid"
                color="#71c563"
              ></box-icon>
            </div>
            <div className="input">
              <input type="text" placeholder="Password" required />
              <box-icon type="solid" name="lock-alt" color="#71c563"></box-icon>
            </div>
            <div className="input">
              <input type="text" placeholder="Confirm Password" required />
              <box-icon type="solid" name="lock-alt" color="#71c563"></box-icon>
            </div>
            <div className="input">
              <button type="submit" className="btn">
                SIGN UP
              </button>
            </div>
            <div className="sign-up">
              <p>
                Already have an account?<br></br>
                <a className="link" onClick={() => navigate("/")}>
                  SignIn
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

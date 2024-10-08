import "./navbar.scss";
import { FaHome } from "react-icons/fa";
import { IoTicketSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import Home from "../Home";
import Ticket from "../Ticket/Ticket";
import Profile from "../Profile/Profile";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("home");

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <Home />;
      case "tickets":
        return <Ticket />;
      case "profile":
        return <Profile />;
      default:
        return null;
    }
  };

  return (
    <div className="container1">
      <div className="box1">
        <div className="xyz">
          <div className="navigation">
            <ul>
              <li className={`list ${activeTab === "home" ? "active" : ""}`}>
                <a href="#" onClick={() => setActiveTab("home")}>
                  <span className="icon">
                    <FaHome  />
                  </span>
                  <span className="text">Home</span>
                </a>
              </li>

              <li className={`list ${activeTab === "tickets" ? "active" : ""}`}>
                <a href="#" onClick={() => setActiveTab("tickets")}>
                  <span className="icon">
                    <IoTicketSharp  />
                  </span>
                  <span className="text">Tickets</span>
                </a>
              </li>

              <li className={`list ${activeTab === "profile" ? "active" : ""}`}>
                <a href="#" onClick={() => setActiveTab("profile")}>
                  <span className="icon">
                    <FaUserCircle  />
                  </span>
                  <span className="text">Profile</span>
                </a>
              </li>
              <div className="indicator"></div>
            </ul>
          </div>
        </div>
        {renderContent()}
      </div>
    </div>
  );
}

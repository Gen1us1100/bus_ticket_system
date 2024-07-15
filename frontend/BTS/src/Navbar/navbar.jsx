
import './navbar.scss'
import { FaHome } from "react-icons/fa";
import { IoTicketSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="container1">
      <div className="box1">

        <div className="navigation">

            <ul>
                <li className="list active">
                    <a href='#'>
                        <span className="icon">
                        <FaHome color='#fff'/>
                        </span>
                        <span className="text">Home</span>
                    </a>
                </li>

                <li className="list">
                    <a href='#'>
                        <span className="icon">
                        <IoTicketSharp color='#fff'/>
                        </span>
                        <span className="text">Tickets</span>
                    </a>
                </li>

                <li className="list">
                    <a href='#'>
                        <span className="icon">
                        <FaUserCircle color='#fff'/>
                        </span>
                        <span className="text">Profile</span>
                    </a>
                </li>
                <div className='indicator'></div>
            </ul>
        </div>


      </div>
    </div>
  )
}

import React from "react";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom";
function Nav() {
  return (
     <header>
      <nav>
       <Link to="/" className="linklogo">
       <div className="logo">
          <p>KUMIA</p>
        </div>
       </Link>
        <div className="navtext">
          <p>buy smarter , tested and trusted</p>
        </div>
        <div className="userpart">
          <p>SIGN IN || REGISTRATION</p>
        </div>
        <div className="cart">
          <p>
            <FontAwesomeIcon icon={faCartPlus} />
          </p>
        </div>
      </nav>
    </header>
  );
}

export default Nav;

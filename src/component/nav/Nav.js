import React from "react";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
     <header>
      <nav>
        <div className="logo">
          <p>KUMIA</p>
        </div>
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

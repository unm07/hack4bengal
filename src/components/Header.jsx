import React from "react";
function Header() {
  const loggedInEmail = localStorage.getItem("loggedInEmail");

  return (
    <div className="header">
      <div className="logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSORy2u3wUJhYiuFUdLuxFmTgYrQI6YyICoDw&usqp=CAU"
          alt="Logo"
        />
      </div>
      <div className="doctor-info">
        <p>
          <br/>
          <strong>Doctor: {loggedInEmail}</strong> 

        </p>
      </div>
    </div>
  );
}

export default Header;
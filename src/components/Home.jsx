import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./response.css"
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
const Home = () => {
    const [contact, setContact] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      navigate(`/response/${contact}`);
    };

    return (
      <div className="login-page">
        <header className="heading">
          <div className="logo"><MedicalServicesIcon /></div>
        </header>
            <h2>Welcome to the Home Page</h2>
  
            <form onSubmit={handleSubmit}>
              <div className="buttons">
              <div className="button1">
                <button className="prescription-button">
                  <Link to="/prescription">Issue a Prescription</Link>
                </button>
                </div>
                <div className="wrap">
                <input
                  type="text"
                  value={contact}
                  className="input-section2"
                  onChange={(e) => setContact(e.target.value)}
                  placeholder="Enter Contact"
                />
                <button className="upload-button">Find Prescription</button>
              </div>
              </div>
            </form>

      </div>
    );
};

export default Home;
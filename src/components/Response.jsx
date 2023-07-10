import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase-config";
import Prompt from "./Prompt";
import Header from "./Header";
import "./response.css";

const Response = () => {
  const { contact } = useParams();
  const [patient, setPatient] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPatient = async () => {
      const patientsRef = collection(db, "patients");
      const q = query(patientsRef, where("contact", "==", contact));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const patientData = querySnapshot.docs[0].data();
        setPatient(patientData);
      } else {
        setPatient(null);
      }

      setLoading(false);
    };

    fetchPatient();
  }, [contact]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!patient) {
    return <p>No patient found for the given contact number.</p>;
  }

  const prompt = patient.medicine.join(", ");

  return (
    <div className="prescription-body">
      <Header />
      <h2>Response</h2>
      <div className="input-section">
        <p>Name: {patient.name}</p>
        <p>Contact: {patient.contact}</p>
        <p>Medicine: {patient.medicine.join(", ")}</p>
      </div>
      <Prompt prompt={prompt} />
    </div>
  );
};

export default Response;

import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Header from "./Header";

const Prescription = () => {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [medicine, setMedicine] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new document in the Firestore collection
    const db = getFirestore();
    const prescriptionsCollectionRef = collection(db, "patients");

    addDoc(prescriptionsCollectionRef, {
      name,
      contact,
      medicine: medicine.split(","),
    })
      .then(() => {
        console.log("Prescription added successfully!");
        // Reset the form fields
        setName("");
        setContact("");
        setMedicine("");
      })
      .catch((error) => {
        console.error("Error adding prescription: ", error);
      });
  };

  return (
    <div className="prescription-body">
      <Header />
      <div className="input-section">
      <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Contact"
            required
          />
          <input
            type="text"
            value={medicine}
            onChange={(e) => setMedicine(e.target.value)}
            placeholder="Medicines"
            required
          />
        <button className="hover-button" type="submit">Submit</button>
      </form>
      </div>
    </div>
  );

};

export default Prescription;

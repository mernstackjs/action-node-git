import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
export default function App() {
  const [name, setName] = useState("");

  useEffect(() => {
    setNameHandle();
  }, []);

  const setNameHandle = async () => {
    try {
      const res = await axios.get("http://localhost:3003/name");
      setName(res.data); // Adjust this line based on your actual response structure
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div>
      <h1>Welcome our saas</h1>
      <h3>your name is : {name.name}</h3>
    </div>
  );
}

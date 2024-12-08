import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchDashboardData = async () => {
      const token = localStorage.getItem("auth_token");

      try {
        const response = await axios.get("http://erp.test/dashboard", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true, // Pastikan mengirimkan cookie
        });
        setData(response.data);
      } catch (err) {
        setError("Error fetching dashboard data");
      }
    };

    fetchDashboardData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>Welcome, {data.username}!</p>
    </div>
  );
};

export default Dashboard;

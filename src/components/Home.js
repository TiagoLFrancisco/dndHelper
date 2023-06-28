import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

import "./Home.css";

function Home() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://www.dnd5eapi.co/api/");
      setApiData(response.data);
    } catch (error) {
      console.error("Error fetching API data:", error);
    }
  };

  return (
    <div className="list-container">
      {apiData ? (
        <List className="horizontal-list">
          {Object.keys(apiData).map((key) => (
            <ListItem key={key} className="list-item">
              <ListItemButton>
                <ListItemText primary={key} secondary={apiData[key]} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      ) : (
        <p>Loading API data...</p>
      )}
    </div>
  );
}

export default Home;

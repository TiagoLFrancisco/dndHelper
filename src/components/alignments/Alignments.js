import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

import "./Alignments.css";

function Alignments() {
  const [alignmentsData, setAlignmentsData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://www.dnd5eapi.co/api/alignments"
      );
      setAlignmentsData(response.data);
    } catch (error) {
      console.error("Error fetching abilityScores data:", error);
    }
  };

  const handleListItemClick = () => {};

  return (
    <div className="list-container">
      {alignmentsData ? (
        <List className="horizontal-list">
          {alignmentsData.results.map(({ index, name }) => (
            <ListItem key={index} className="list-item">
              <ListItemButton onClick={() => handleListItemClick()}>
                <ListItemText primary={name} secondary={index} />
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

export default Alignments;

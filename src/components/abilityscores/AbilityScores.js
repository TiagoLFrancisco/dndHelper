import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { useNavigate } from "react-router-dom";

import "./AbilityScores.css";

function AbilityScores() {
  const navigate = useNavigate();
  const [abilityScoresData, setAbilityScoresData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://www.dnd5eapi.co/api/ability-scores"
      );
      const abilityScoresData = response.data.results;

      const updatedData = await Promise.all(
        abilityScoresData.map(async (abilityScore) => {
          const abilityResponse = await axios.get(
            `https://www.dnd5eapi.co${abilityScore.url}`
          );
          const full_name = abilityResponse.data.full_name;
          return { ...abilityScore, full_name };
        })
      );
      setAbilityScoresData(updatedData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleListItemClick = (index) => {
    navigate(index);
  };

  return (
    <div className="list-container">
      {abilityScoresData ? (
        <List className="horizontal-list">
          {abilityScoresData.map(({ name, full_name, index }) => (
            <ListItem key={name} className="list-item">
              <ListItemButton onClick={() => handleListItemClick(index)}>
                <ListItemText primary={full_name} secondary={name} />
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

export default AbilityScores;

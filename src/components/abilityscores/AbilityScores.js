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

  const abilityDescription = (
    <p>
      Is a character muscle-bound and insightful? Brilliant and charming? Nimble
      and hardy?
      <br />
      <br />
      Six abilities provide a quick description of every creature's physical and
      mental characteristics:
      <br />
      Charisma, Dexterity, Constitution, Intelligence, Strength and Wisdom.
      <br />
      <br />
      Ability scores define these qualities, a creature's assets as well as
      weaknesses. The three main rolls of the game are the ability check, the
      saving throw, and the attack roll and they rely on the six ability scores.
      <br />
      The basic rule behind these rolls: roll a d20, add an ability modifier
      derived from one of the six ability scores, and compare the total to a
      target number.
    </p>
  );

  return (
    <div className="list-container">
      {abilityScoresData ? (
        <List className="horizontal-list">
          {abilityScoresData.map(({ name, full_name, index, url }) => (
            <ListItem key={name} className="list-item">
              <ListItemButton onClick={() => handleListItemClick(index)}>
                <ListItemText primary={full_name} secondary={url} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      ) : (
        <p>Loading API data...</p>
      )}

      <List>
        <ListItem>
          <ListItemText
            primary={"Abilities"}
            secondary={abilityDescription}
          ></ListItemText>
        </ListItem>
      </List>
    </div>
  );
}

export default AbilityScores;

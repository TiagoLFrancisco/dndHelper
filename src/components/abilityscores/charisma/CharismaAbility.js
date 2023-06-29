import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

import "./CharismaAbility.css";

const charismaAbility = {
  index: "cha",
  name: "CHA",
  full_name: "Charisma",
  desc: "Charisma measures your ability to interact effectively with others. It includes such factors as confidence and eloquence, and it can represent a charming or commanding personality.",
  saving:
    "A Charisma check might arise when you try to influence or entertain others, when you try to make an impression or tell a convincing lie, or when you are navigating a tricky social situation.",
  skill_desc:
    "The Deception, Intimidation, Performance, and Persuasion skills reflect aptitude in certain kinds of Charisma checks.",
  skills: [
    {
      name: "Deception",
      index: "deception",
      url: "/api/skills/deception",
    },
    {
      name: "Intimidation",
      index: "intimidation",
      url: "/api/skills/intimidation",
    },
    {
      name: "Performance",
      index: "performance",
      url: "/api/skills/performance",
    },
    {
      name: "Persuasion",
      index: "persuasion",
      url: "/api/skills/persuasion",
    },
  ],
  url: "/api/ability-scores/cha",
};

function CharismaAbility() {
  return (
    <div>
      <List>
        <ListItem>
          <ListItemText
            primary={charismaAbility.full_name}
            secondary={charismaAbility.name}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={"Description"}
            secondary={charismaAbility.desc}
          />
        </ListItem>
        <ListItem>
          <ListItemText primary={"Check"} secondary={charismaAbility.saving} />
        </ListItem>
      </List>
      <List className="horizontal-list">
        <ListItem>
          <ListItemText
            primary="Affected Skills"
            secondary={charismaAbility.skill_desc}
          />
        </ListItem>
        {charismaAbility.skills.map((skill, index) => (
          <ListItem key={index} className="list-item">
            <ListItemButton>
              <ListItemText primary={skill.name} secondary={skill.url} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
}

export default CharismaAbility;

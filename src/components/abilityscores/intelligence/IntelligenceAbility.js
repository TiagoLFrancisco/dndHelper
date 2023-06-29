import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

import "./IntelligenceAbility.css";

const intelligenceAbility = {
  index: "int",
  name: "INT",
  full_name: "Intelligence",
  desc: "Intelligence measures mental acuity, accuracy of recall, and the ability to reason.",
  check:
    "An Intelligence check comes into play when you need to draw on logic, education, memory, or deductive reasoning. ",
  skill_desc:
    "The Arcana, History, Investigation, Nature, and Religion skills reflect aptitude in certain kinds of Intelligence checks.",
  skills: [
    {
      name: "Arcana",
      index: "arcana",
      url: "/api/skills/arcana",
    },
    {
      name: "History",
      index: "history",
      url: "/api/skills/history",
    },
    {
      name: "Investigation",
      index: "investigation",
      url: "/api/skills/investigation",
    },
    {
      name: "Nature",
      index: "nature",
      url: "/api/skills/nature",
    },
    {
      name: "Religion",
      index: "religion",
      url: "/api/skills/religion",
    },
  ],
  url: "/api/ability-scores/int",
};

function IntelligenceAbility() {
  return (
    <div>
      <List>
        <ListItem>
          <ListItemText
            primary={intelligenceAbility.full_name}
            secondary={intelligenceAbility.name}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={"Description"}
            secondary={intelligenceAbility.desc}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={"Intelligence Check"}
            secondary={intelligenceAbility.check}
          />
        </ListItem>
      </List>
      <List className="horizontal-list">
        <ListItem>
          <ListItemText
            primary="Affected Skills"
            secondary={intelligenceAbility.skill_desc}
          />
        </ListItem>
        {intelligenceAbility.skills.map((skill, index) => (
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

export default IntelligenceAbility;

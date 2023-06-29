import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

import "./WisdomAbility.css";

const wisdomAbility = {
  index: "wis",
  name: "WIS",
  full_name: "Wisdom",
  desc: "Wisdom reflects how attuned you are to the world around you and represents perceptiveness and intuition.",
  check:
    "A Wisdom check might reflect an effort to read body language, understand someone's feelings, notice things about the environment, or care for an injured person. ",
  skill_desc:
    "The Animal Handling, Insight, Medicine, Perception, and Survival skills reflect aptitude in certain kinds of Wisdom checks.",

  skills: [
    {
      name: "Animal Handling",
      index: "animal-handling",
      url: "/api/skills/animal-handling",
    },
    {
      name: "Insight",
      index: "insight",
      url: "/api/skills/insight",
    },
    {
      name: "Medicine",
      index: "medicine",
      url: "/api/skills/medicine",
    },
    {
      name: "Perception",
      index: "perception",
      url: "/api/skills/perception",
    },
    {
      name: "Survival",
      index: "survival",
      url: "/api/skills/survival",
    },
  ],
  url: "/api/ability-scores/wis",
};

function WisdomAbility() {
  return (
    <div>
      <List>
        <ListItem>
          <ListItemText
            primary={wisdomAbility.full_name}
            secondary={wisdomAbility.name}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={"Description"}
            secondary={wisdomAbility.desc}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={"Strength Check"}
            secondary={wisdomAbility.check}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Affected Skills"
            secondary={wisdomAbility.skill_desc}
          />
        </ListItem>
      </List>
      <List className="horizontal-list">
        {wisdomAbility.skills.map((skill, index) => (
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

export default WisdomAbility;

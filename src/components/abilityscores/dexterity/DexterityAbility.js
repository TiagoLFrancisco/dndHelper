import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

import "./DexterityAbility.css";

const dexterityAbility = {
  index: "dex",
  name: "DEX",
  full_name: "Dexterity",
  desc: "Dexterity measures agility, reflexes, and balance.",
  check:
    "A Dexterity check can model any attempt to move nimbly, quickly, or quietly, or to keep from falling on tricky footing. ",
  skill_desc:
    "The Acrobatics, Sleight of Hand, and Stealth skills reflect aptitude in certain kinds of Dexterity checks.",
  skills: [
    {
      name: "Acrobatics",
      index: "acrobatics",
      url: "/api/skills/acrobatics",
    },
    {
      name: "Sleight of Hand",
      index: "sleight-of-hand",
      url: "/api/skills/sleight-of-hand",
    },
    {
      name: "Stealth",
      index: "stealth",
      url: "/api/skills/stealth",
    },
  ],
  url: "/api/ability-scores/dex",
};

function DexterityAbility() {
  return (
    <div>
      <List>
        <ListItem>
          <ListItemText
            primary={dexterityAbility.full_name}
            secondary={dexterityAbility.name}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={"Description"}
            secondary={dexterityAbility.desc}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={"Dexterity Check"}
            secondary={dexterityAbility.check}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Affected Skills"
            secondary={dexterityAbility.skill_desc}
          />
        </ListItem>
      </List>
      <List className="horizontal-list">
        {dexterityAbility.skills.map((skill, index) => (
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

export default DexterityAbility;

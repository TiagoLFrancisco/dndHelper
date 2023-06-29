import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";

import "./StrengthAbility.css";

const strengthAbility = {
  index: "str",
  name: "STR",
  full_name: "Strength",
  desc: "Strength measures bodily power, athletic training, and the extent to which you can exert raw physical force.",
  check:
    "A Strength check can model any attempt to lift, push, pull, or break something, to force your body through a space, or to otherwise apply brute force to a situation. ",
  skill_desc:
    "The Athletics skill reflects aptitude in certain kinds of Strength checks.",
  skills: [
    {
      name: "Athletics",
      index: "athletics",
      url: "/api/skills/athletics",
    },
  ],
  url: "/api/ability-scores/str",
};

function StrengthAbility() {
  return (
    <div>
      <List>
        <ListItem>
          <ListItemText
            primary={strengthAbility.full_name}
            secondary={strengthAbility.name}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={"Description"}
            secondary={strengthAbility.desc}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={"Strength Check"}
            secondary={strengthAbility.check}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Affected Skills"
            secondary={strengthAbility.skill_desc}
          />
        </ListItem>
      </List>
      <List className="horizontal-list">
        {strengthAbility.skills.map((skill, index) => (
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

export default StrengthAbility;

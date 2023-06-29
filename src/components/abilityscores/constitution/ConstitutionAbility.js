import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import "./ConstitutionAbility.css";

const constitutionAbility = {
  index: "con",
  name: "CON",
  full_name: "Constitution",
  desc: "Constitution measures health, stamina, and vital force.",
  check:
    "Constitution checks are uncommon, and no skills apply to Constitution checks, because the endurance this ability represents is largely passive rather than involving a specific effort on the part of a character or monster.",
  skill_desc:
    "A Constitution check can model your attempt to push beyond normal limits. You might be asked for a Constitution check when you try to accomplish tasks like the following: Hold your breath. March or labor for hours without rest. Go without sleep. Survive without food or water.  Quaff an entire stein of ale in one go",

  skills: [],
  url: "/api/ability-scores/con",
};

function ConstitutionAbility() {
  return (
    <div>
      <List>
        <ListItem>
          <ListItemText
            primary={constitutionAbility.full_name}
            secondary={constitutionAbility.name}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={"Description"}
            secondary={constitutionAbility.desc}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={"Constitution Check"}
            secondary={constitutionAbility.check}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Affected Skills"
            secondary={constitutionAbility.skill_desc}
          />
        </ListItem>
      </List>
    </div>
  );
}

export default ConstitutionAbility;

import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import "./LawfulNeutral.css";

const lawfulNeutral = {
  index: "lawful-neutral",
  name: "Lawful Neutral",
  abbreviation: "LN",
  desc: "Lawful neutral (LN) individuals act in accordance with law, tradition, or personal codes. Many monks and some wizards are lawful neutral.",
  url: "/api/alignments/lawful-neutral",
};

function LawfulNeutral() {
  return (
    <div>
      <List>
        <ListItem>
          <ListItemText primary={lawfulNeutral.name} secondary={"Alignment"} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={"Abbreviation"}
            secondary={lawfulNeutral.abbreviation}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={"Description"}
            secondary={lawfulNeutral.desc}
          />
        </ListItem>
      </List>
    </div>
  );
}

export default LawfulNeutral;

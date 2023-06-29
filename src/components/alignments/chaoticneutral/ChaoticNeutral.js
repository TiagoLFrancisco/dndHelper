import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import "./ChaoticNeutral.css";

const chaoticNeutral = {
  index: "chaotic-neutral",
  name: "Chaotic Neutral",
  abbreviation: "CN",
  desc: "Chaotic neutral (CN) creatures follow their whims, holding their personal freedom above all else. Many barbarians and rogues, and some bards, are chaotic neutral.",
  url: "/api/alignments/chaotic-neutral",
};

function ChaoticNeutral() {
  return (
    <div>
      <List>
        <ListItem>
          <ListItemText primary={chaoticNeutral.name} secondary={"Alignment"} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={"Abbreviation"}
            secondary={chaoticNeutral.abbreviation}
          />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={"Description"}
            secondary={chaoticNeutral.desc}
          />
        </ListItem>
      </List>
    </div>
  );
}

export default ChaoticNeutral;

import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import "./NeutralEvil.css";

const neutralEvil = {
  index: "neutral-evil",
  name: "Neutral Evil",
  abbreviation: "NE",
  desc: "Neutral evil (NE) is the alignment of those who do whatever they can get away with, without compassion or qualms. Many drow, some cloud giants, and goblins are neutral evil.",
  url: "/api/alignments/neutral-evil",
};

function NeutralEvil() {
  return (
    <div>
      <List>
        <ListItem>
          <ListItemText primary={neutralEvil.name} secondary={"Alignment"} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={"Abbreviation"}
            secondary={neutralEvil.abbreviation}
          />
        </ListItem>
        <ListItem>
          <ListItemText primary={"Description"} secondary={neutralEvil.desc} />
        </ListItem>
      </List>
    </div>
  );
}

export default NeutralEvil;

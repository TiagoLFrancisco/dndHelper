import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import "./ChaoticEvil.css";

const chaoticEvil = {
  index: "chaotic-evil",
  name: "Chaotic Evil",
  abbreviation: "CE",
  desc: "Chaotic evil (CE) creatures act with arbitrary violence, spurred by their greed, hatred, or bloodlust. Demons, red dragons, and orcs are chaotic evil.",
  url: "/api/alignments/chaotic-evil",
};

function ChaoticEvil() {
  return (
    <div>
      <List>
        <ListItem>
          <ListItemText primary={chaoticEvil.name} secondary={"Alignment"} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={"Abbreviation"}
            secondary={chaoticEvil.abbreviation}
          />
        </ListItem>
        <ListItem>
          <ListItemText primary={"Description"} secondary={chaoticEvil.desc} />
        </ListItem>
      </List>
    </div>
  );
}

export default ChaoticEvil;

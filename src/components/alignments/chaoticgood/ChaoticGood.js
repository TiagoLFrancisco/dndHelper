import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import "./ChaoticGood.css";

const chaoticGood = {
  index: "chaotic-good",
  name: "Chaotic Good",
  abbreviation: "CG",
  desc: "Chaotic good (CG) creatures act as their conscience directs, with little regard for what others expect. Copper dragons, many elves, and unicorns are chaotic good.",
  url: "/api/alignments/chaotic-good",
};

function ChaoticGood() {
  return (
    <div>
      <List>
        <ListItem>
          <ListItemText primary={chaoticGood.name} secondary={"Alignment"} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={"Abbreviation"}
            secondary={chaoticGood.abbreviation}
          />
        </ListItem>
        <ListItem>
          <ListItemText primary={"Description"} secondary={chaoticGood.desc} />
        </ListItem>
      </List>
    </div>
  );
}

export default ChaoticGood;

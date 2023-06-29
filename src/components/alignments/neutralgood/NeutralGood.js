import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import "./NeutralGood.css";

const neutralGood = {
  index: "neutral-good",
  name: "Neutral Good",
  abbreviation: "NG",
  desc: "Neutral good (NG) folk do the best they can to help others according to their needs. Many celestials, some cloud giants, and most gnomes are neutral good.",
  url: "/api/alignments/neutral-good",
};

function NeutralGood() {
  return (
    <div>
      <List>
        <ListItem>
          <ListItemText primary={neutralGood.name} secondary={"Alignment"} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={"Abbreviation"}
            secondary={neutralGood.abbreviation}
          />
        </ListItem>
        <ListItem>
          <ListItemText primary={"Description"} secondary={neutralGood.desc} />
        </ListItem>
      </List>
    </div>
  );
}

export default NeutralGood;

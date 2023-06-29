import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import "./Neutral.css";

const neutral = {
  index: "neutral",
  name: "Neutral",
  abbreviation: "N",
  desc: "Neutral (N) is the alignment of those who prefer to steer clear of moral questions and don't take sides, doing what seems best at the time. Lizardfolk, most druids, and many humans are neutral.",
  url: "/api/alignments/neutral",
};

function Neutral() {
  return (
    <div>
      <List>
        <ListItem>
          <ListItemText primary={neutral.name} secondary={"Alignment"} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={"Abbreviation"}
            secondary={neutral.abbreviation}
          />
        </ListItem>
        <ListItem>
          <ListItemText primary={"Description"} secondary={neutral.desc} />
        </ListItem>
      </List>
    </div>
  );
}

export default Neutral;

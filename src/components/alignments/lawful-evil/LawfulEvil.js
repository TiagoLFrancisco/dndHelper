import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import "./LawfulEvil.css";

const lawfulEvil = {
  index: "lawful-evil",
  name: "Lawful Evil",
  abbreviation: "LE",
  desc: "Lawful evil (LE) creatures methodically take what they want, within the limits of a code of tradition, loyalty, or order. Devils, blue dragons, and hobgoblins are lawful evil.",
  url: "/api/alignments/lawful-evil",
};

function LawfulEvil() {
  return (
    <div>
      <List>
        <ListItem>
          <ListItemText primary={lawfulEvil.name} secondary={"Alignment"} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={"Abbreviation"}
            secondary={lawfulEvil.abbreviation}
          />
        </ListItem>
        <ListItem>
          <ListItemText primary={"Description"} secondary={lawfulEvil.desc} />
        </ListItem>
      </List>
    </div>
  );
}

export default LawfulEvil;

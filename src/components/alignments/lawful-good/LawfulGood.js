import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import "./LawfulGood.css";

const lawfulgood = {
  index: "lawful-good",
  name: "Lawful Good",
  abbreviation: "LG",
  desc: "Lawful good (LG) creatures can be counted on to do the right thing as expected by society. Gold dragons, paladins, and most dwarves are lawful good.",
  url: "/api/alignments/lawful-good",
};

function LawfulGood() {
  return (
    <div>
      <List>
        <ListItem>
          <ListItemText primary={lawfulgood.name} secondary={"Alignment"} />
        </ListItem>
        <ListItem>
          <ListItemText
            primary={"Abbreviation"}
            secondary={lawfulgood.abbreviation}
          />
        </ListItem>
        <ListItem>
          <ListItemText primary={"Description"} secondary={lawfulgood.desc} />
        </ListItem>
      </List>
    </div>
  );
}

export default LawfulGood;

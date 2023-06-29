import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Home from "./components/Home";
import AbilityScores from "./components/abilityscores/AbilityScores";
import Alignments from "./components/alignments/Alignments";
import CharismaAbility from "./components/abilityscores/charisma/CharismaAbility";
import ConstitutionAbility from "./components/abilityscores/constitution/ConstitutionAbility";
import DexterityAbility from "./components/abilityscores/dexterity/DexterityAbility";
import IntelligenceAbility from "./components/abilityscores/intelligence/IntelligenceAbility";
import StrengthAbility from "./components/abilityscores/strength/StrengthAbility";
import WisdomAbility from "./components/abilityscores/wisdom/WisdomAbility";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ability-scores" element={<AbilityScores />} />
          <Route path="/ability-scores/cha" element={<CharismaAbility />} />
          <Route path="/ability-scores/con" element={<ConstitutionAbility />} />
          <Route path="/ability-scores/dex" element={<DexterityAbility />} />
          <Route path="/ability-scores/int" element={<IntelligenceAbility />} />
          <Route path="/ability-scores/str" element={<StrengthAbility />} />
          <Route path="/ability-scores/wis" element={<WisdomAbility />} />
          <Route path="/alignments" element={<Alignments />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

function Navigation() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <nav>
      <BottomNavigation
        showLabels
        sx={{
          justifyContent: "flex-start",
          "& .Mui-selected": {
            color: "dimgrey",
          },
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon style={{ color: "#424242" }} />}
          component={Link}
          to="/"
          onClick={handleClick}
        />
      </BottomNavigation>
    </nav>
  );
}

export default App;

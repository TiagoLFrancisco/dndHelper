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
import ChaoticEvil from "./components/alignments/chaoticevil/ChaoticEvil";
import ChaoticGood from "./components/alignments/chaoticgood/ChaoticGood";
import ChaoticNeutral from "./components/alignments/chaoticneutral/ChaoticNeutral";
import LawfulGood from "./components/alignments/lawful-good/LawfulGood";
import LawfulNeutral from "./components/alignments/lawful-neutral/LawfulNeutral";
import Neutral from "./components/alignments/neutral/Neutral";
import NeutralEvil from "./components/alignments/neutralevil/NeutralEvil";
import NeutralGood from "./components/alignments/neutralgood/NeutralGood";
import LawfulEvil from "./components/alignments/lawful-evil/LawfulEvil";

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
          <Route path="/alignments/chaotic-evil" element={<ChaoticEvil />} />
          <Route path="/alignments/chaotic-good" element={<ChaoticGood />} />
          <Route
            path="/alignments/chaotic-neutral"
            element={<ChaoticNeutral />}
          />
          <Route path="/alignments/lawful-good" element={<LawfulGood />} />
          <Route path="/alignments/lawful-evil" element={<LawfulEvil />} />
          <Route
            path="/alignments/lawful-neutral"
            element={<LawfulNeutral />}
          />
          <Route path="/alignments/neutral" element={<Neutral />} />
          <Route path="/alignments/neutral-evil" element={<NeutralEvil />} />
          <Route path="/alignments/neutral-good" element={<NeutralGood />} />
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

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Character from "./pages/Character";
// import Test from "./pages/Test";
import Comic from "./pages/Comic";
import ComicsListCharacter from "./pages/ComicsListCharacter";

import Header from "./components/Header";

const App = () => {
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/"  element={<Characters />} />
        <Route path="/character/:characterId" element={<Character/>}/>
        <Route path="/comics" element={<Comics />} />
        <Route path="/comics/:characterId" element={<ComicsListCharacter/>}/>
        <Route path="/comic/:comicId" element={<Comic/>}/>
        
      </Routes>
    </Router>
  );
};

export default App;

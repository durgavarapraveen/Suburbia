import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Build from "./Pages/Build";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/build" element={<Build />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { CFlashCard, DisplayCards, Navbar, ViewCard } from "./components";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<CFlashCard />} />
          <Route path="/mycards" element={<DisplayCards />} />
          <Route path="/card/details/:id" element={<ViewCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

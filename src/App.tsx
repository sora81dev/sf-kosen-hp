import { BrowserRouter, Route, Routes } from "react-router-dom";

import Join from "./Pages/Join";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/join" element={<Join />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

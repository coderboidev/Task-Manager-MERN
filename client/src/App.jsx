import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Tasks from "./pages/Tasks";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Tasks />} />
          <Route exact path="/login" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

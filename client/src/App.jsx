import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Tasks from "./pages/Tasks";
import { useGetUserDetailsQuery } from "./redux/service";

const App = () => {
  const { isError } = useGetUserDetailsQuery();

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={isError ? <Register /> : <Tasks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

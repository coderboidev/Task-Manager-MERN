import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Tasks from "./pages/Tasks";
import { useGetUserDetailsQuery } from "./redux/service";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const { isError } = useGetUserDetailsQuery();

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route exact path="/" element={isError ? <Register /> : <Tasks />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

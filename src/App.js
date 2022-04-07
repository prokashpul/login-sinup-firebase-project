import { Route, Routes } from "react-router-dom";
import "./App.css";
import LogInPage from "./Components/LogInPage/LogInPage";
import RegPage from "./Components/RegPage/RegPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogInPage></LogInPage>}></Route>
        <Route path="/log-in" element={<LogInPage></LogInPage>}></Route>
        <Route path="/registration" element={<RegPage></RegPage>}></Route>
      </Routes>
    </>
  );
}

export default App;

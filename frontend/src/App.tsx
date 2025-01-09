import { Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Home from "./page/Home";
import Login from "./page/Login";


const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* <Route path="/hookform" element={<HookForm />} /> */}
        </Routes>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default App;


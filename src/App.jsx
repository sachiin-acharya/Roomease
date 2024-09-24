import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Pages/Home";
import Rent from "./Pages/Rent";
import PostRoom from "./Pages/PostRoom";
import SignIn from "./Components/Signin/Signin";

function App() {
  return (
    <Routes>
      {/* Reusable Layout for Navbar and Footer */}
      <Route path="/" element={<Layout />}>
        {/* Routes for Home and Rent */}
        <Route index element={<Home />} />
        <Route path="rent" element={<Rent />} />
        <Route path="PostRoom" element={<PostRoom />} />
      </Route>
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}

export default App;

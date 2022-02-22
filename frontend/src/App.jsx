import { Routes, Route } from "react-router-dom";
//Global styles
import { GlobalStyles } from "./components/GlobalStyles";
//Pages
import Home from "./pages/Home";
//Components
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

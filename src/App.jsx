import { NavBar } from "./component/common/Navbar";
import Footer from "./component/common/Footer";
import Hero from "./component/pages/Hero";
import Popular from "./component/pages/Popular";
import Recent from "./component/pages/Recent";
import Crousel from "./component/pages/Crousel";

export default function App() {
  return (
    <>
      <NavBar />
      <Crousel />
      {/* <Hero /> */}
      <Popular />
      <Recent />
      
      <Footer />
    </>
  );
}

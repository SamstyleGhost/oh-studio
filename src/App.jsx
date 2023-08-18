import { Home, Profile, Contact, Shop } from "./pages";
import { Navbar } from "./components";
import { Route, Routes } from "react-router-dom";

function App() {
  // TODO: The font is system-ui font. Find a good font and change it here as well as in the tailwind config file
  return (
    <div className="my-8 font-inconsolata"> 
      <div className="flex justify-center fixed w-full h-10 z-10">
        <Navbar />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      
    </div>
  );
}

export default App;

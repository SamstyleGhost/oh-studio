import { Home } from "./pages";
import { Navbar } from "./components";

function App() {
  // TODO: The font is system-ui font. Find a good font and change it here as well as in the tailwind config file
  return (
    <div className="my-8 font-inconsolata"> 
      <div className="flex justify-center fixed w-full h-10 z-10">
        <Navbar />
      </div>

      <div>
        <Home />
      </div>
      
    </div>
  );
}

export default App;

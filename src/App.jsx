import { Home } from "./pages";
import { Navbar } from "./components";

function App() {
  return (
    <div className="my-8 font-spartan">
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

import Navbar from "./components/Navbar";
import { bodyImages } from './constants';
import Display from "./components/Display";

function App() {
  return (
    <div className="my-8 font-spartan">
      <div className="flex justify-center">
        <Navbar />
      </div>
      <div className="mt-8 mx-10 lg:mx-40 grid grid-cols-1 lg:grid-cols-2 justify-items-center items-center gap-x-2 gap-y-4">
        {bodyImages.map((image) => (
          <Display 
            image={image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

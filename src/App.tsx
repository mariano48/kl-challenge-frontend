import MapContainer from "./components/map/MapContainer";
import SearchBar from "./components/searchbar/SearchBar";
import "./index.css";
function App() {
  return (
    <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-start bg-white">
      <SearchBar />
      <MapContainer />
    </div>
  );
}

export default App;

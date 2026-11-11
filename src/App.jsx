import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Lineup from "./pages/Lineup";
import Schedule from "./pages/Schedule";
import About from "./pages/About";
import Tickets from "./pages/Tickets";
import "./App.css";

import NavBar from "./components/NavBar";
import ArtistDetails from "./pages/ArtistDetails";
import NewArtist from "./pages/NewArtist";
import EditArtist from "./pages/EditArtist";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lineup" element={<Lineup />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/about" element={<About />} />
        <Route path="/artists/new" element={<NewArtist />} />
        <Route path="/artists/:id" element={<ArtistDetails />} />
        <Route path="/artists/:id/edit" element={<EditArtist />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
export default App;

import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function Lineup() {
    const [artists, setArtists] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const filteredArtists = artists.filter((artist) => {
return artist.name.toLowerCase().includes(searchTerm.toLowerCase());      
});

    useEffect(() => {
        axios.get("https://module-2-json-server-nv61.onrender.com/artists")
            .then((response) => {
                setArtists(response.data);
            })
            .catch((error) => {
                console.error("Error fetching artists:", error);
            });
    }, []);
  return (
 <div className="artists-page">
  <div className="artists-header">
    <h1 className="artists-title">ARTISTS.</h1>
    <div className="lineup-toolbar">
      <input className="artist-search" type="text" placeholder="Search artists..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
    
    <Link to="/artists/new" className="add-artist-btn">
      + ADD ARTIST
    </Link>
  </div></div>
      
      <ul className="artists-grid">
        {filteredArtists.map((artist) => (
          <li className="artist-card" key={artist.id}>
  <Link to={`/artists/${artist.id}`}>
<img
  src={artist.image || `/images/artist-${artist.id}.jpg`}
  alt={artist.name}
/>
  <h2>{artist.name}</h2>
  <p>{artist.genre}</p>
</Link>
</li>

        ))}
      </ul>
    </div>
  );
}

export default Lineup;


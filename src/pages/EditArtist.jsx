import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function EditArtist() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [artist, setArtist] = useState(null);

  useEffect(() => {
  axios
    .get(`https://module-2-json-server-nv61.onrender.com/artists/${id}`)
    .then((response) => {
      setArtist(response.data);
    })
    .catch((error) => {
      console.error("Error fetching artist:", error);
    });
}, [id]);

const handleSubmit = (event) => {
  event.preventDefault();
  axios
  .put(
    `https://module-2-json-server-nv61.onrender.com/artists/${id}`,
    artist
  )
  .then(() => {
    navigate(`/artists/${id}`);
  })
  .catch((error) => {
    console.error("Error updating artist:", error);
  });
};

  return (
  <div className="edit-artist-page">
  <h1 className="edit-artist-title">EDIT ARTIST.</h1>
    <h2>{artist?.name}</h2>
    {artist && (
  <form className="edit-artist-form" onSubmit={handleSubmit}>
    <label>Artist Name</label>
    <input
      type="text"
      value={artist.name}
      onChange={(event) => {
    setArtist({
      ...artist,
      name: event.target.value
    }); 
    
  }}
  
    />
    <label>Image URL</label>
<input
  type="url"
  placeholder="https://example.com/artist.jpg"
  value={artist.image || ""}
  onChange={(event) => {
    setArtist({
      ...artist,
      image: event.target.value
    });
  }}
/>
    <label>Genre</label>
<input
  type="text"
  value={artist.genre}
  onChange={(event) => {
    setArtist({
      ...artist,
      genre: event.target.value
    });
  }}
/>
    <label>Bio</label>
    <textarea
      value={artist.bio}
      onChange={(event) => {
        setArtist({
          ...artist,
          bio: event.target.value
        });
      }}
    />
    <label>Stage</label>
<select
  value={artist.stageId}
  onChange={(event) => {
    setArtist({
      ...artist,
      stageId: event.target.value
    });
  }}
>
  <option value="1">Main Stage</option>
  <option value="2">Garden Stage</option>
</select>
    <label>Day</label>
    <select
      value={artist.day}
      onChange={(event) => {
        setArtist({
          ...artist,
          day: event.target.value
        });
      }}
    >
      <option value="Friday">Friday</option>
      <option value="Saturday">Saturday</option>
      <option value="Sunday">Sunday</option>
    </select>
    <label>Time</label>
    <input
      type="time"
      value={artist.time}
      onChange={(event) => {
        setArtist({
          ...artist,
          time: event.target.value
        });
      }}
    />
    <button type="submit">Save Changes</button>
  </form>
)}
    </div>
  );
}

export default EditArtist;
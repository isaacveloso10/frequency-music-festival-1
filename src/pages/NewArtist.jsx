import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NewArtist() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [bio, setBio] = useState("");
  const [day, setDay] = useState("Friday");
  const [time, setTime] = useState("");
  const [stageId, setStageId] = useState("1");
  const [image, setImage] = useState("");

  function handleSubmit(event) {
  event.preventDefault();
  const newArtist = {
  name,
  genre,
  bio,
  day,
  time,
  stageId,
  image
};
  axios
    .post("https://module-2-json-server-nv61.onrender.com/artists", newArtist)
    .then(() => {
      navigate("/lineup");
    })
    .catch((error) => {
      console.error("Error creating artist:", error);
    });
}

  return (
<div className="edit-artist-page">      
<h1 className="edit-artist-title">ADD NEW ARTIST.</h1>

<form className="edit-artist-form" onSubmit={handleSubmit}>
  <label>Artist Name</label>
  <input
    type="text"
    value={name}
    onChange={(event) => setName(event.target.value)}
  />
  <label>Image URL</label>
<input
  type="url"
  placeholder="https://example.com/artist.jpg"
  value={image}
  onChange={(event) => setImage(event.target.value)}
/>

  <label>Genre</label>
  <input
    type="text"
    value={genre}
    onChange={(event) => setGenre(event.target.value)}
  />

  <label>Bio</label>
  <textarea
    value={bio}
    onChange={(event) => setBio(event.target.value)}
  />

  <label>Day</label>
  <select
    value={day}
    onChange={(event) => setDay(event.target.value)}
  >
    <option value="Friday">Friday</option>
    <option value="Saturday">Saturday</option>
    <option value="Sunday">Sunday</option>
  </select>

  <label>Time</label>
  <input
    type="time"
    value={time}
    onChange={(event) => setTime(event.target.value)}
  />

  <label>Stage</label>
  <select
    value={stageId}
    onChange={(event) => setStageId(event.target.value)}
  >
    <option value="1">Main Stage</option>
    <option value="2">Garden Stage</option>
  </select>

  <button type="submit">Add Artist</button>
</form>

    </div>
  );
}

export default NewArtist;
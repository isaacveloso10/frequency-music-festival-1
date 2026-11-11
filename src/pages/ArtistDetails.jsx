import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function ArtistDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [artist, setArtist] = useState(null);
  const [stage, setStage] = useState(null);

  useEffect(() => {
    axios.get(`https://module-2-json-server-nv61.onrender.com/artists/${id}`)
      .then((response) => {
        setArtist(response.data);
      })
      .catch((error) => {
        console.error("Error fetching artist:", error);
      });
  }, [id]);

  useEffect(() => {
    if (!artist) return;

    axios
      .get(`https://module-2-json-server-nv61.onrender.com/stages/${artist.stageId}`)
      .then((response) => {
        setStage(response.data);
      })
      .catch((error) => {
        console.error("Error fetching stage:", error);
      });
  }, [artist]);

   const handleDelete = () => {
  const confirmed = window.confirm(
    "Are you sure you want to delete this artist?"
  );

  if (!confirmed) {
    return;
  }

  axios
    .delete(`https://module-2-json-server-nv61.onrender.com/artists/${id}`)
    .then(() => {
      navigate("/lineup");
    })
    .catch((error) => {
      console.error("Error deleting artist:", error);
    });
};

  if (!artist) {
      return <p>Loading artist...</p>;

  }

return (
  <div className="artist-details">
    <h1 className="artist-details-title">{artist.name}</h1>

    <img
  src={artist.image || `/images/artist-${id}.jpg`}
  alt={artist.name}
  className="artist-details-image"
/>

    <div className="artist-details-content">
      <div className="artist-details-bio">
        <h2>{artist.genre}</h2>
        <p>{artist.bio}</p>
      </div>

      <div className="artist-details-info">
        <p>{artist.day}</p>
        <p>{artist.time}</p>
        <p>{stage?.name || "Loading stage..."}</p>
        <div className="artist-actions">
  <Link to={`/artists/${id}/edit`} className="edit-artist-btn">
    Edit Artist
  </Link>

  <button onClick={handleDelete}>Delete Artist</button>
</div>
      </div>
    </div>
  </div>
);
}

export default ArtistDetails
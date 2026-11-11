import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Schedule() {
  const [artists, setArtists] = useState([]);
  const [selectedDay, setSelectedDay] = useState("Friday");
  
  useEffect(() => {
    axios
      .get("https://module-2-json-server-nv61.onrender.com/artists")
      .then((response) => {
        setArtists(response.data);
      })
      .catch((error) => {
        console.error("Error fetching artists:", error);
      });
  }, []);
  const filteredArtists = artists.filter(
  (artist) => artist.day === selectedDay
);

const mainStageArtists = filteredArtists.filter(
  (artist) => artist.stageId === "1"
);

const gardenStageArtists = filteredArtists.filter(
  (artist) => artist.stageId === "2"
);
  return (
    <div className="schedule-page">
  <h1 className="schedule-title">SCHEDULE.</h1>
      <div className="schedule-days">
  <button   className={selectedDay === "Friday" ? "active" : ""}
onClick={() => setSelectedDay("Friday")}>
    Friday
  </button>

  <button   className={selectedDay === "Saturday" ? "active" : ""}
onClick={() => setSelectedDay("Saturday")}>
    Saturday
  </button>

  <button   className={selectedDay === "Sunday" ? "active" : ""}
  onClick={() => setSelectedDay("Sunday")}>
    Sunday
  </button>
</div>

<h3 className="schedule-stage-title">MAIN STAGE</h3>

<ul className="schedule-list">
  {mainStageArtists.map((artist) => (
    <li key={artist.id} className="schedule-item">
      <Link to={`/artists/${artist.id}`}>
        {artist.name}
      </Link>
      <span>{artist.time}</span>
    </li>
  ))}
</ul>

<h3 className="schedule-stage-title">GARDEN STAGE</h3>

<ul className="schedule-list">
  {gardenStageArtists.map((artist) => (
    <li key={artist.id} className="schedule-item">
      <Link to={`/artists/${artist.id}`}>
        {artist.name}
      </Link>
      <span>{artist.time}</span>
    </li>
  ))}
</ul>
    </div>
  );
}

export default Schedule;

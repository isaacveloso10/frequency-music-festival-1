
import { Link } from "react-router-dom";

function Home() {

  return (
    <main className="home">
      <section className="hero">
        <h1>FREQUENCY FESTIVAL</h1>
        <div className="hero-info">
  <span>11 — 13 JULY 2027</span>
  <span>LISBON, PORTUGAL</span>
</div>
<div className="hero-image">
<img
  src="/images/crowd.jpeg"
  alt="Crowd at an electronic music festival"
/></div>
      </section>
      <section className="home-about">
  <h2>MORE THAN MUSIC.</h2>

  <div className="home-about-content">
    <p>
      FREQUENCY is a 3 day electronic music festival
      celebrating sound, art, and underground culture
      in the heart of Lisbon. <br/><br/>
    <span className="home-about-stats">30 ARTISTS / 3 DAYS / 2 STAGES</span>

    </p>
    <Link to="/lineup" className="home-about-link">
  VIEW ARTISTS ↗
</Link>
  </div>
</section>
    </main>
  );
}

export default Home;

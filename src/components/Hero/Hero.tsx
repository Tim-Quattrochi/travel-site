import Video from "../../assets/maldivesVideo.mp4";
import "./hero.css";

function Hero() {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={Video} type="video/mp4" />
      </video>
      <div className="overlay"></div>
    </div>
  );
}
export default Hero;

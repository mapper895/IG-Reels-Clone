import "./App.css";
import VideoCard from "./VideoCard";

function App() {
  return (
    <div className="app">
      <div className="app__top">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/768px-Instagram_logo_2016.svg.png"
          alt=""
          className="app__logo"
        />
        <h1>Reels</h1>
      </div>

      <div className="app__videos">
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
}

export default App;

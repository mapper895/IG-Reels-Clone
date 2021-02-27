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
        <VideoCard
          channel="clever"
          avatarSrc="https://instagram.fmex11-4.fna.fbcdn.net/v/t51.2885-19/s150x150/144589373_744737619757273_5964327189459430613_n.jpg?_nc_ht=instagram.fmex11-4.fna.fbcdn.net&_nc_ohc=Ye50FibIiY4AX97R8zJ&tp=1&oh=0217f9b2f131df95906469b6ad36cea1&oe=60647CCB"
          song="Test song - mapper"
          url="https://instagram.furt1-1.fna.fbcdn.net/v/t50.2886-16/151567081_1309734626120889_6562294731708077574_n.mp4?_nc_ht=instagram.furt1-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=rFxwakzBj_gAX_fvfjA&oe=603BE988&oh=1b197110c3399c766b366f8691e601b6"
          likes={300}
          shares={30}
          // channel={channel}
          // avatarSrc={avatarSrc}
          // song={song}
          // url={url}
          // likes={likes}
          // shares={shares}
        />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
}

export default App;

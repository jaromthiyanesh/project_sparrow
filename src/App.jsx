import "./index.css";
import Follow from "./Follow";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="box">
          <img
            src="https://source.unsplash.com/90x90/?building"
            alt=""
            className="head"
          />
          <img
            src="https://source.unsplash.com/160x160/?user"
            className="user"
            alt=""
          />
          <div className="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              className="icon"
              height="40"
              fill="currentColor"
              class="bi bi-three-dots-vertical"
              viewBox="0 0 16 16"
            >
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
            </svg>
          </div>
          <h1>Morgan Sweeney</h1>
          <Follow />
        </div>
        <h2 className="btn">Follow</h2>
        <p className="para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          laudantium, illo dicta repudiandae labore obcaecati impedit molestiae
          ad nihil quidem?
        </p>
      </div>
    </div>
  );
}

import './App.css';
import logo from './images/logo.svg';
import heroMobile from './images/hero-mobile.jpg';
import arrow from './images/icon-arrow.svg';

function App() {
  return (
    <div>
      <main>
        <div className="content">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <img src={heroMobile} alt="" className="image_mobile" />

          <h1>
            <span>We're </span>coming soon
          </h1>
          <p>
            Hello fellow shoppers! We're currently building our new fashion
            store. Add your email below to stay up-to-date with announcements
            and our launch deals.
          </p>
          <div className="email">
            <input type="text" placeholder="Email Address" />
            <button>
              <img src={arrow} alt="" />
            </button>
          </div>
        </div>

        <div className="image_desktop"></div>
      </main>

      <footer>
        <p className="attribution">
          Challenge by
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            rel="noopener noreferrer"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="https://chalobonden.github.io/">Chalobon</a>.
        </p>
      </footer>
    </div>
  );
}

export default App;

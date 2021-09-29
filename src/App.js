import './App.css';
import logo from './images/logo.svg';
import heroMobile from './images/hero-mobile.jpg';
import { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [checkEmail, setCheckEmail] = useState('');

  const onHandleInput = (e) => {
    setEmail(e.target.value);
  };

  const onClickInput = () => {
    if (email === '') {
      setCheckEmail(false);
    } else {
      setCheckEmail(true);
    }
    setEmail('');
  };

  return (
    <div>
      <main>
        <div className="content">
          <header className="logo">
            <img src={logo} alt="" />
          </header>
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
            <input
              value={email}
              className={checkEmail === false ? 'input_invalid' : 'input_valid'}
              type="text"
              placeholder="Email Address"
              onChange={onHandleInput}
            />
            <button onClick={onClickInput}>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="20">
                <path
                  fill="none"
                  stroke="#FFF"
                  strokeWidth="2"
                  d="M1 1l8.836 8.836L1 18.671"
                />
              </svg>
            </button>
            <div className={checkEmail === false ? 'invalid' : 'valid'}>
              Please provide a valid email
            </div>
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

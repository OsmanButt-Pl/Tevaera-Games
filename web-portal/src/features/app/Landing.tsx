import React from 'react';
// import axios from "axios";
import logo from '../../assets/images/logo.svg';
// import CountDownTimer from './CountDown';
import Fade from 'react-reveal/Fade';
import watcherBg from '../../assets/images/bg-watcher.jpg';
import bannerBg from '../../assets/images/main-bg.jpg';
import ancientBg from '../../assets/images/bg-ancient.jpg';
import dragonBg from '../../assets/images/bg-dragon.jpg';
import moonBg from '../../assets/images/bg-moon.jpg';
import iconFacebook from '../../assets/images/icon-facebook.png';
import iconTelegram from '../../assets/images/icon-telegram.png';
import iconTwitter from '../../assets/images/icon-twitter.png';
import iconInsta from '../../assets/images/icon-insta.png';
import { Parallax } from 'react-parallax';

const Landing: React.FC = () => {
  // const [timerDays, setTimerDays] = usestate('00');
  // const [timerHours, setTimerHours] = usestate('00');
  // const [timerMinutes, setTimerMinutes] = usestate('00');
  // const [timerSeconds, setTimerSeconds] = usestate('00');

  // let interval = useRef();

  // const startTimer = () => {
  //   const countdownDate = new Date('May 30, 2020 00:00:00').getTime();

  //   interval = setInterval(() => {
  //     const now = new Date().getTime();
  //     const distance = countdownDate - now;

  //     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  //     const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60 )));
  //     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  //     const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  //     if (distance < 0) {
  //       //stop out timer
  //       clearInterval(interval.current);
  //     } else {
  //       //update timer
  //       setTimerDays(days);
  //       setTimerHours(hours);
  //       setTimerMinutes(minutes);
  //       setTimerSeconds(seconds);
  //     }
  //   }, 1000);
  // };

  // useEffect(() => {
  //   startTimer();
  //   return () => {
  //     clearInterval(interval.current);
  //   };
  // });

  return (
    <div className="appTevera">
      <Parallax bgImage={bannerBg} strength={500}>
        <div className="banner">
          <header className="header">
            <div className="d-flex justify-content-between align-items-center">
              <a href="/home">
                <img src={logo} className="logo" alt="logo" />
              </a>
              <button className="btn btnDownload">Download Litepaper</button>
            </div>
          </header>
          <div className="d-flex justify-content-center align-items-center upComing">
            <div className="caption">
              <img src={logo} className="logo" alt="logo" />
              <span>
                Gamified Metaverse for <strong>NFTs</strong>
              </span>
            </div>
            <div className="comingOut">
              <span>coming out in</span>
              <div className="countDown">
                <ul>
                  <li>
                    20<strong>Days</strong>
                  </li>
                  <li>
                    00<strong>Hours</strong>
                  </li>
                  <li>
                    50<strong>Mins</strong>
                  </li>
                  <li>
                    11<strong>Sec</strong>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
      <div className="sepTop"></div>
      <div className="txt bg-black text-center">
        <div className="contentHolder">
          <Fade left>
            <p>Just over a thousand years ago, our people faced extinction..</p>
          </Fade>
        </div>
      </div>
      <div className="sepBottom"></div>
      <Parallax bgImage={watcherBg} strength={500}>
        <div className="watcher">
          <Fade left>
            <div className="txt text-right">
              <p>We watched as we were abandoned by our betrayers, as their steel pierced the smog choked sky.</p>
              <p>Yet as they left, escaping to their inevitable doom, we were left to perish.</p>
            </div>
          </Fade>
        </div>
      </Parallax>
      <div className="sepBottom"></div>
      <div className="txt bg-black text-left">
        <div className="contentHolder">
          <Fade left>
            <p>
              As the clouds closed around the craft, plunging the skies into darkness once more, the teva (nature) made a final pleafor
              help.
            </p>
          </Fade>
        </div>
      </div>
      <div className="sepTop"></div>

      <Parallax bgImage={ancientBg} strength={500}>
        <div className="watcher ancient">
          <Fade left>
            <div className="txt text-right">
              <p>
                Ancient protectors emerged from their slumber, beings formed by the teva in the hopes to prevent total annihilation.
              </p>
            </div>
          </Fade>
        </div>
      </Parallax>
      <div className="sepBottom"></div>
      <div className="txt bg-black text-left">
        <Fade left>
          <div className="contentHolder">
            <p>Soon the smog began to dissipate and clear the sky. As the skies began to clear, so too did the seas. </p>
          </div>
        </Fade>
      </div>

      <div className="sepBottom"></div>
      <Parallax bgImage={dragonBg} strength={500}>
        <div className="watcher ancient">
          <Fade left>
            <div className="txt text-right">
              <p>But as the teva healed, our kind were not so fortunate. </p>
              <p>We still dwindled in number, and while the planet was once again safe, there was much to rebuild. </p>
            </div>
          </Fade>
        </div>
      </Parallax>
      <div className="sepBottom"></div>
      <div className="txt bg-black text-center">
        <Fade left>
          <div className="contentHolder">
            <p>And now we honor them even today, as they return to a new era of cohabitation, Tevaera!</p>
          </div>
        </Fade>
      </div>
      <div className="sepTop"></div>
      <Parallax bgImage={moonBg} strength={500}>
        <div className="watcher">
          <div className="txt">
            <div className="about">
              <h3>About Tevaera</h3>
              <p>
                Tevaera is an NFT-driven gaming experience platform that allows the Tevans to participate in a series of fun and
                interactive games in our metaverse.
              </p>
              <p>These Games are being designed to offer the best in class play to earn and learn experience</p>
            </div>
          </div>
        </div>
      </Parallax>
      <div className="sepBottom"></div>
      <div className="newsletter">
        <h2 className="footerHeading">
          <span>Follow & subscribe</span>
        </h2>
        <ul className="socials">
          <li>
            <a target="_blank" href="#">
              <img src={iconFacebook} />
            </a>
          </li>
          <li>
            <a rel="noreferrer" target="_blank" href="https://t.me/TevaeraNews">
              <img src={iconTelegram} />
            </a>
          </li>
          <li>
            <a rel="noreferrer" target="_blank" href="https://twitter.com/tevaera">
              <img src={iconTwitter} />
            </a>
          </li>
          <li>
            <a rel="noreferrer" target="_blank" href="https://www.instagram.com/tevaera/">
              <img src={iconInsta} />
            </a>
          </li>
        </ul>
        <div className="newsLetterForm">
          <h2>Subscribe for updates</h2>
          <form>
            <div className="newsLetter--wrapper">
              <input type="email" placeholder="Enter Email Id" />
              <button className="btn btn-subscribe" type="button">
                Subscribe Now
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-5">
              <img src={logo} className="flogo" alt="logo" />
            </div>
            <div className="col-md-3">
              <div className="fWidget">
                <h4>Legal</h4>
                <ul className="fNav">
                  <li>
                    <a href="/privacy">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/termsCondition">Terms & conditions</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="fWidget">
                <h4>Social</h4>
                <ul className="fNav">
                  <li>
                    <a target="_blank" href="#">
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/tevaera/">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/tevaera">
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a target="_blank" rel="noreferrer" href="https://discord.gg/4kEFfGd9RU">
                      Discord
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="fWidget">
                <h4>Contact Us</h4>
                <div className="fTxt">
                  <a href="mailto:support@tevaera.io">support@tevaera.io</a>
                  <p>1313 Yeti Lane, Czypticzoo universe, New York , USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;

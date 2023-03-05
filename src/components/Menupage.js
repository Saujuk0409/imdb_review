import React from "react";
import { createPortal } from "react-dom";
import image1 from "../assests/IMDB_Logo_2016.svg.png";
import CloseIcon from "@mui/icons-material/Close";
import "../styles/styles.css";
import { color } from "@mui/system";
function Menupage({ open, onClose }) {
  const TrendingList = [
    { id1: 1, title: "Top 250 Movies" },
    { id1: 2, title: "Top 250 Movies" },
    { id1: 3, title: "Top 250 Movies" },
    { id1: 4, title: "Top 250 Movies" },
    { id1: 5, title: "Top 250 Movies" },
    { id1: 6, title: "Top 250 Movies" },
    { id1: 7, title: "Top 250 Movies" },
  ];

  const Movies = [
    { id1: 1, title: "Release Calendar" },
    { id1: 2, title: "Browse Movies by Genre" },
    { id1: 3, title: "Top Box Office" },
    { id1: 4, title: "Showtimes & Tickets" },
    { id1: 5, title: "Movie News" },
    { id1: 6, title: "India Movie Spotlight" },
  ];

  const Tvshows = [
    { id1: 1, title: "What's on TV & Streaming" },
    { id1: 2, title: "Browse TV Shows by Genre" },
    { id1: 3, title: "TV News" },
    { id1: 4, title: "India TV Spotlight" },
  ];

  const watch = [
    { id1: 1, title: "What to Watch" },
    { id1: 2, title: "Latest Trailers" },
    { id1: 3, title: "IMDb Originals" },
    { id1: 4, title: "IMDb Picks" },
    { id1: 5, title: "IMDb Podcasts" },
  ];

  const awards = [
    { id1: 1, title: "Oscars" },
    { id1: 2, title: "Best Picture Winners" },
    { id1: 3, title: "Emmys" },
    { id1: 4, title: "STARmeter Awards" },
    { id1: 5, title: "San Diego Comic-Con" },
    { id1: 6, title: "New York Comic-Con" },
    { id1: 7, title: "Sundance Film Festival" },
    { id1: 8, title: "Toronto Int'l Film Festival" },
    { id1: 9, title: "Awards Central" },
    { id1: 10, title: "Festival Central" },
    { id1: 11, title: "All Events" },
  ];

  const Celebs = [
    { id1: 1, title: "Born Today" },
    { id1: 2, title: "Most Popular Celebs" },
    { id1: 3, title: "Celebrity News" },
  ];

  const Community = [
    { id1: 1, title: "Help Center" },
    { id1: 2, title: "Contributor Zone" },
    { id1: 3, title: "Polls" },
  ];

  return createPortal(
    <>
      {open ? (
        <div className="Menupage">
          <img src={image1} alt="logo"></img>
          <CloseIcon
            onClick={onClose}
            style={{
              marginLeft: "65%",
              backgroundColor: "#F5C518",
              display: "flex",
              borderRadius: "50px",
              padding: "20px",
              marginTop: "-3%",
              color: "black",
            }}
          />
          <div className="row1">
            <div className="column1">
              <div className="trendingMenuGrid">
                <div className="menuPageListHeading">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    // style={{ marginTop: "40px", paddingRight: "20px" }}
                    class="ipc-icon ipc-icon--earth"
                    id="iconContext-earth"
                    viewBox="0 0 24 24"
                    fill="rgb(245,197,24)"
                    role="presentation"
                  >
                    <path fill="black" d="M0 0h24v24H0V0z"></path>
                    <path d="M 12 2 C 6.5 2 2 6.5 2 12 s 4.5 10 10 10 s 10 -4.5 10 -10 S 17.5 2 12 2 Z m 0 18 c -2.6 0 -5 -1.3 -6.4 -3.3 l 2.8 -3.4 l 1.3 1.5 c 0.4 0.4 1 0.4 1.3 0 l 2.9 -3.2 l 1.3 1.4 c 0.3 0.3 0.8 0.1 0.8 -0.3 V 8.5 c 0 -0.3 -0.2 -0.5 -0.5 -0.5 h -4 c -0.4 0 -0.6 0.5 -0.3 0.8 l 1.3 1.4 l -2.2 2.5 L 9 11.3 c -0.4 -0.4 -1 -0.4 -1.3 0 L 4.6 15 c -0.4 -0.9 -0.6 -1.9 -0.6 -3 c 0 -4.4 3.6 -8 8 -8 s 8 3.6 8 8 s -3.6 8 -8 8 Z" />
                  </svg>
                  <div className="h1">Trending</div>
                </div>
                {TrendingList.map((item) => (
                  <ul className="columnItems">{item.title}</ul>
                ))}
              </div>
              <div className="trendingMenuGrid">
                <div className="menuPageListHeading">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    style={{ marginTop: "40px", paddingRight: "20px" }}
                    class="ipc-icon ipc-icon--earth"
                    id="iconContext-earth"
                    viewBox="0 0 24 24"
                    fill="rgb(245,197,24)"
                    role="presentation"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M 18 4 v 1 h -2 V 4 c 0 -0.55 -0.45 -1 -1 -1 H 9 c -0.55 0 -1 0.45 -1 1 v 1 H 6 V 4 c 0 -0.55 -0.45 -1 -1 -1 s -1 0.45 -1 1 v 16 c 0 0.55 0.45 1 1 1 s 1 -0.45 1 -1 v -1 h 2 v 1 c 0 0.55 0.45 1 1 1 h 6 c 0.55 0 1 -0.45 1 -1 v -1 h 2 v 1 c 0 0.55 0.45 1 1 1 s 1 -0.45 1 -1 V 4 c 0 -0.55 -0.45 -1 -1 -1 s -1 0.45 -1 1 Z M 8 17 H 6 v -2 h 2 v 2 Z m 0 -4 H 6 v -2 h 2 v 2 Z m 0 -4 H 6 V 7 h 2 v 2 Z m 10 8 h -2 v -2 h 2 v 2 Z m 0 -4 h -2 v -2 h 2 v 2 Z m 0 -4 h -2 V 7 h 2 v 2 Z" />
                  </svg>
                  <div className="h1">Movies</div>
                </div>
                {Movies.map((item) => (
                  <ul className="columnItems">{item.title}</ul>
                ))}
              </div>
            </div>
            <div className="column2">
              <div className="trendingMenuGrid">
                <div className="menuPageListHeading">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    style={{ marginTop: "40px", paddingRight: "20px" }}
                    class="ipc-icon ipc-icon--earth"
                    id="iconContext-earth"
                    viewBox="0 0 24 24"
                    fill="rgb(245,197,24)"
                    role="presentation"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M 21 3 H 3 c -1.1 0 -2 0.9 -2 2 v 12 c 0 1.1 0.9 2 2 2 h 5 v 1 c 0 0.55 0.45 1 1 1 h 6 c 0.55 0 1 -0.45 1 -1 v -1 h 5 c 1.1 0 1.99 -0.9 1.99 -2 L 23 5 a 2 2 0 0 0 -2 -2 Z m -1 14 H 4 c -0.55 0 -1 -0.45 -1 -1 V 6 c 0 -0.55 0.45 -1 1 -1 h 16 c 0.55 0 1 0.45 1 1 v 10 c 0 0.55 -0.45 1 -1 1 Z" />
                  </svg>
                  <div className="h1">Tv & Shows</div>
                </div>
                {Tvshows.map((item) => (
                  <ul className="columnItems">{item.title}</ul>
                ))}
              </div>
              <div className="trendingMenuGrid">
                <div className="menuPageListHeading">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    style={{ marginTop: "40px", paddingRight: "20px" }}
                    class="ipc-icon ipc-icon--earth"
                    id="iconContext-earth"
                    viewBox="0 0 24 24"
                    fill="rgb(245,197,24)"
                    role="presentation"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M 3 6 c -0.55 0 -1 0.45 -1 1 v 13 c 0 1.1 0.9 2 2 2 h 13 c 0.55 0 1 -0.45 1 -1 s -0.45 -1 -1 -1 H 5 c -0.55 0 -1 -0.45 -1 -1 V 7 c 0 -0.55 -0.45 -1 -1 -1 Z m 17 -4 H 8 c -1.1 0 -2 0.9 -2 2 v 12 c 0 1.1 0.9 2 2 2 h 12 c 1.1 0 2 -0.9 2 -2 V 4 c 0 -1.1 -0.9 -2 -2 -2 Z m -8 12.5 v -9 l 5.47 4.1 c 0.27 0.2 0.27 0.6 0 0.8 L 12 14.5 Z" />
                  </svg>
                  <div className="h1">Watch</div>
                </div>
                {watch.map((item) => (
                  <ul className="columnItems">{item.title}</ul>
                ))}
              </div>
            </div>
            <div className="column3">
              <div className="trendingMenuGrid">
                <div className="menuPageListHeading">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    style={{ marginTop: "40px", paddingRight: "20px" }}
                    class="ipc-icon ipc-icon--earth"
                    id="iconContext-earth"
                    viewBox="0 0 24 24"
                    fill="rgb(245,197,24)"
                    role="presentation"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M 11.99 2 C 6.47 2 2 6.48 2 12 s 4.47 10 9.99 10 C 17.52 22 22 17.52 22 12 S 17.52 2 11.99 2 Z m 3.23 15.39 L 12 15.45 l -3.22 1.94 a 0.502 0.502 0 0 1 -0.75 -0.54 l 0.85 -3.66 l -2.83 -2.45 a 0.505 0.505 0 0 1 0.29 -0.88 l 3.74 -0.32 l 1.46 -3.45 c 0.17 -0.41 0.75 -0.41 0.92 0 l 1.46 3.44 l 3.74 0.32 a 0.5 0.5 0 0 1 0.28 0.88 l -2.83 2.45 l 0.85 3.67 c 0.1 0.43 -0.36 0.77 -0.74 0.54 Z" />
                  </svg>
                  <div className="h1">Awards & Events</div>
                </div>
                {awards.map((item) => (
                  <ul className="columnItems">{item.title}</ul>
                ))}
              </div>
            </div>
          </div>
          <div className="row2">
            <div className="trendingMenuGrid">
              <div className="colum2">
                <div className="menuPageListHeading">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    style={{ marginTop: "40px", paddingRight: "20px" }}
                    class="ipc-icon ipc-icon--earth"
                    id="iconContext-earth"
                    viewBox="0 0 24 24"
                    fill="rgb(245,197,24)"
                    role="presentation"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M 16 11 c 1.66 0 2.99 -1.34 2.99 -3 S 17.66 5 16 5 s -3 1.34 -3 3 s 1.34 3 3 3 Z m -8 0 c 1.66 0 2.99 -1.34 2.99 -3 S 9.66 5 8 5 S 5 6.34 5 8 s 1.34 3 3 3 Z m 0 2 c -2.33 0 -7 1.17 -7 3.5 V 18 c 0 0.55 0.45 1 1 1 h 12 c 0.55 0 1 -0.45 1 -1 v -1.5 c 0 -2.33 -4.67 -3.5 -7 -3.5 Z m 8 0 c -0.29 0 -0.62 0.02 -0.97 0.05 c 0.02 0.01 0.03 0.03 0.04 0.04 c 1.14 0.83 1.93 1.94 1.93 3.41 V 18 c 0 0.35 -0.07 0.69 -0.18 1 H 22 c 0.55 0 1 -0.45 1 -1 v -1.5 c 0 -2.33 -4.67 -3.5 -7 -3.5 Z" />
                  </svg>
                  <div className="h1">Celebs</div>
                </div>
                {Celebs.map((item) => (
                  <ul className="columnItems">{item.title}</ul>
                ))}
              </div>
            </div>
            <div className="column3">
              <div className="trendingMenuGrid" style={{ marginTop: "10%" , marginLeft:"35%"}}>
                <div className="menuPageListHeading">
                  <span className="navlinkcat__itemIcon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      style={{ marginTop: "40px", paddingRight: "20px" }}
                      class="ipc-icon ipc-icon--earth"
                      id="iconContext-earth"
                      viewBox="0 0 24 24"
                      fill="rgb(245,197,24)"
                      role="presentation"
                    >
                      <path fill="none" d="M0 0h24v24H0V0z"></path>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path>
                    </svg>
                  </span>
                  <div className="h1">Community</div>
                </div>
                {Community.map((item) => (
                  <ul className="columnItems">{item.title}</ul>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>,
    document.getElementById("portal")
  );
}

export default Menupage;

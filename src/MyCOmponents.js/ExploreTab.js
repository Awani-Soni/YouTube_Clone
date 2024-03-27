import React from "react";
import Thumbnail from "./Thumbnail";
import men from "D:/AWANI DOCUMENTS/Web D/tut1/youtube_clone/src/MyCOmponents.js/men.png";
import trending from "D:/AWANI DOCUMENTS/Web D/tut1/youtube_clone/src/MyCOmponents.js/trending.png";
import news from "D:/AWANI DOCUMENTS/Web D/tut1/youtube_clone/src/MyCOmponents.js/news.png";
import education from "D:/AWANI DOCUMENTS/Web D/tut1/youtube_clone/src/MyCOmponents.js/education.png";
import sports from "D:/AWANI DOCUMENTS/Web D/tut1/youtube_clone/src/MyCOmponents.js/sports.png";
import entertainment from "D:/AWANI DOCUMENTS/Web D/tut1/youtube_clone/src/MyCOmponents.js/entertainment.png";
import gaming from "D:/AWANI DOCUMENTS/Web D/tut1/youtube_clone/src/MyCOmponents.js/gaming.png";
import music from "D:/AWANI DOCUMENTS/Web D/tut1/youtube_clone/src/MyCOmponents.js/music.png";
import home from "D:/AWANI DOCUMENTS/Web D/tut1/youtube_clone/src/MyCOmponents.js/home.png";

const ExploreTab = ({category, setCategory}) => (
  <div className="explore">
    <h4>
      <b id="exhead">Explore Tab</b>{" "}
    </h4>
    <div className="thumbnails">
      <div
        className={`sidelink ${category === 0 ? "active" : ""}`}
        onClick={() => {
          setCategory(0);
        } }
      >
        <img src={home} className="im" />
        Home
      </div>
      <div
        className={`sidelink ${category === 15 ? "active" : ""}`}
        onClick={() => {
          setCategory(35);
        } }
      >
        <img src={trending} className="im" />
        Trending
      </div>
      <div
        className={`sidelink ${category === 10 ? "active" : ""}`}
        onClick={() => {
          setCategory(10);
        } }
      >
        <img src={music} className="im" />
        Music
      </div>
      <div
        className={`sidelink ${category === 20 ? "active" : ""}`}
        onClick={() => {
          setCategory(20);
        } }
      >
        <img src={gaming} className="im" />
        Gaming
      </div>
      <div
        className={`sidelink ${category === 25 ? "active" : ""}`}
        onClick={() => {
          setCategory(25);
        } }
      >
        <img src={news} className="im" />
        News
      </div>
      <div
        className={`sidelink ${category === 17 ? "active" : ""}`}
        onClick={() => {
          setCategory(17);
        } }
      >
        <img src={sports} className="im" />
        Sports
      </div>
      <div
        className={`sidelink ${category === 24 ? "active" : ""}`}
        onClick={() => {
          setCategory(24);
        } }
      >
        <img src={entertainment} className="im" />
        Entertainment
      </div>
      <div
        className={`sidelink ${category === 18 ? "active" : ""}`}
        onClick={() => {
          setCategory(27);
        } }
      >
        <img src={education} className="im" />
        Education
      </div>
    </div>
  </div>
);

export default ExploreTab;

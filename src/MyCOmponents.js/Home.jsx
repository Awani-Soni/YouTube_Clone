import React from "react";
import ExploreTab from "./ExploreTab";
import Header from "D:/AWANI DOCUMENTS/Web D/tut1/youtube_clone/src/MyCOmponents.js/Header.js";
import { useState } from "react";
import Feed from "./Feed/Feed.jsx";
import "./Home.css";

const Home = () => {
  const [exploreTabVisible, setExploreTabVisible] = useState(true);
  const [category,setCategory]=useState(0);

  const toggleExploreTab = () => {
    setExploreTabVisible(!exploreTabVisible);
  };
  return (
    <div>
      <Header toggleExploreTab={toggleExploreTab} />
      {exploreTabVisible && <ExploreTab category={category} setCategory={setCategory}/>}
      <div className={`container ${ExploreTab ? "" : "large-container"}`}>
        <Feed category={category}/>
      </div>
    </div>
  );
};

export default Home;

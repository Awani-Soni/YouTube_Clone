import React, { useEffect } from "react";
import "./Feed.css";
import t1 from "D:/AWANI DOCUMENTS/Web D/tut1/youtube_clone/src/MyCOmponents.js/t1.jpg";
import t2 from "D:/AWANI DOCUMENTS/Web D/tut1/youtube_clone/src/MyCOmponents.js/t2.jpg";
import t3 from "D:/AWANI DOCUMENTS/Web D/tut1/youtube_clone/src/MyCOmponents.js/t3.jpg";
import t4 from "D:/AWANI DOCUMENTS/Web D/tut1/youtube_clone/src/MyCOmponents.js/t4.jpg";
import t5 from "D:/AWANI DOCUMENTS/Web D/tut1/youtube_clone/src/MyCOmponents.js/t5.jpg";
import t6 from "D:/AWANI DOCUMENTS/Web D/tut1/youtube_clone/src/MyCOmponents.js/t6.jpg";
import t7 from "D:/AWANI DOCUMENTS/Web D/tut1/youtube_clone/src/MyCOmponents.js/t7.jpg";
import t8 from "D:/AWANI DOCUMENTS/Web D/tut1/youtube_clone/src/MyCOmponents.js/t8.jpg";
import API_KEY from "D:/AWANI DOCUMENTS/Web D/tut1/youtube_clone/src/MyCOmponents.js/Data.js";
import { useState } from "react";
import moment from "moment";

const Feed = ({ category }) => {
  const [data, setData] = useState([]);
  const fetchdata = async () => {
    const VideoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`;
    await fetch(VideoList_url)
      .then((response) => response.json())
      .then((data) => setData(data.items));
  };
  useEffect(() => {
    fetchdata();
  }, [category]);
  return (
    <div className="feed">
      {data.map((item, index) => {
        return (
          <div to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>{item.statistics.viewCount} Views&bull;{moment(item.snippet.publishedAt).fromNow()}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Feed;

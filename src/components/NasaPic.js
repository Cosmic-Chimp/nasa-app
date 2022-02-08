import React, { useState, useEffect } from "react";
import Nav from "./Nav";
const api_key = process.env.REACT_APP_APOD_KEY;

const NasaPic = () => {
  // useState for state manipulation
  const [picData, setPicData] = useState(null);

  useEffect(() => {
    fetchPic();

    async function fetchPic() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${api_key}`
      );
      const data = await res.json();
      setPicData(data);
      console.log(data);
    }
  }, []);

  if (!picData) return <div></div>;
  return (
    <>
      <Nav />
      <div>
        {picData.media_type === "image" ? (
          <img src={picData.url} alt={picData.title}></img>
        ) : (
          <iframe
            title="space-video"
            src={picData.url}
            frameBorder="media"
            gesture="media"
            allow="encrypted-media"
            allowFullScreen
            className="photo"
          ></iframe>
        )}
      </div>

      <div>
        <h1>{picData.title}</h1>
        <h5>Today's date: {picData.date}</h5>
        <p>{picData.explanation}</p>
      </div>
    </>
  );
};

export default NasaPic;

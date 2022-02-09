import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import axios from "axios";
// import { OuterDiv } from "../styledComps/NavStyled";
// import { ImgDiv, InfoDiv } from "../styledComps/NasaPicStyled";
///break

const api_key = process.env.REACT_APP_APOD_KEY;

const NasaPic = () => {
  // useState for state manipulation
  const [picData, setPicData] = useState(null);

  // below is fetch API:
  // useEffect(() => {
  //   fetchPic();
  //   async function fetchPic() {
  //     const res = await fetch(
  //       `https://api.nasa.gov/planetary/apod?api_key=${api_key}`
  //     );
  //     const data = await res.json();
  //     setPicData(data);
  //     console.log(data);
  //   }
  // }, []);

  //Axios :
  useEffect(() => {
    const axiosGet = async () => {
      const response = await axios(
        `https://api.nasa.gov/planetary/apod?api_key=${api_key}`
      );
      setPicData(response.data);
    };
    axiosGet();
  }, []);

  if (!picData) return <div></div>;
  return (
    <>
      <div className="outerDiv">
        <div>
          {picData.media_type === "image" ? (
            <img id="imgId" src={picData.url} alt={picData.title}></img>
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
      </div>
      <div className="btns">
        <Nav />
      </div>
    </>
  );
};

export default NasaPic;

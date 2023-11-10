import React from "react";
import { useRef, useState } from "react";
function SectionA() {
  let video = useRef(null);
  let [display, setdisplay] = useState("");
  let [zIndex, setzIndex] = useState("zindex");
  return (
    <>
      <section className="parentsection space_between section_a_parent">
        <section className="section_a">
          <h4 className="heading4_a heading heading4">
            Find the perfect Flooring for your Space, in just a few clicks
          </h4>
          <p className="a_paragraph paragraph">
            Try out our Floor Visualizer app on your phone to see for yourself
            which of our flooring would fit your space
          </p>
          <section className="button100">
            <button className="button blue button100">
              Try Floor Visualizer
            </button>
          </section>
        </section>
        <section className="relative">
          <section className="absolute absolute_image">
            <img
              className={`${display} ${zIndex} video_image`}
              src="./src/assets/Play Video.svg"
              alt="img"
              onClick={() => {
                video.current.play();
                setdisplay((display = "none"));
                setzIndex("");
                video.current.setAttribute("controls", "");
              }}
            />
          </section>
          <video
            src="./src/assets/video.mp4"
            className="video_a"
            ref={video}
            onPlaying={() => {
              video.current.play();
              setdisplay((display = "none"));
              setzIndex("");
            }}
            onPause={() => {
              setdisplay((display = "not_none"));
              setzIndex("zindex");
            }}
            controls
          ></video>
        </section>
      </section>
    </>
  );
}
export default SectionA;

import { useEffect, useState } from "react";

export let HeroChild = ({
  heading,
  paragraph,
  image,
  alt,
  number,
  love,
  setlove,
  order,
  slider,
  setslider,
}) => {
  useEffect(() => {
    setslider((slider = "slide"));
  }, [slider]);
  return (
    <>
      <section className={`hero order${order} ${slider}`}>
        <section>
          <img src={image} alt={alt} className="hero_image" />
        </section>
        <section className="hero_merge">
          <section className="merge">
            <section className="hero_text">
              <h1 className="hero_heading heading">{heading}</h1>
              <p className="hero_paragraph paragraph">{paragraph}</p>
            </section>
            <section className="hero_buttons">
              <button className="button white button100">
                Try Floor Visualizer
              </button>
              <button className="button blue button100">
                Book Free Estimate
              </button>
            </section>
          </section>
          <section className="hero_check">
            <input
              type="radio"
              name={number}
              onChange={() => {
                setslider((e) => (e = ""));
                setlove((love = "1"));
              }}
              checked={number == "1" ? true : false}
            />
            <input
              type="radio"
              name={number}
              onChange={() => {
                setslider((e) => (e = ""));
                setlove((love = "2"));
              }}
              checked={number == "2" ? true : false}
            />
            <input
              type="radio"
              name={number}
              onChange={() => {
                setslider((e) => (e = ""));
                setlove((love = "3"));
              }}
              checked={number == "3" ? true : false}
            />
          </section>
        </section>
      </section>
    </>
  );
};

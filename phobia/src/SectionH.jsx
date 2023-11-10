import { useState } from "react";
import { SectionHChild } from "./SectionHChild";
function SectionH() {
  let min = 0;
  let max = 3;
  let [num, setmum] = useState(0);
  return (
    <>
      <section className="column gap32 section_h">
        <section>
          <h3 className="heading heading3 j_center h_pad">
            Don’t take our word for it
          </h3>
        </section>
        <section className="rows h_container relative">
          <section className="h_scroll relative zindex">
            <section
              className={`rows h_parent gap24 h_child_container h_translate${num}`}
            >
              <SectionHChild
                paragraph="Austin hardwood floors installed engineered hardwood floors in our upstairs hallway,
               bedroom and on the stairs. Matt is very knowledgeable and available to answer any question along the way.
                I would highly recommend this company to install floors."
                bold=" Alaine G."
                image1=" ./src/assets/pexels-pixabay-259962 1 (12).png"
                alt1=""
                image2="./src/assets/alaineg-img.jpg.png"
                alt2=""
                image3="./src/assets/Star 2.svg"
                alt3=""
                image4="./src/assets/Star 2.svg"
                alt4=""
                image5="./src/assets/Star 2.svg"
                alt5=""
                image6="./src/assets/Star 2.svg"
                alt6=""
                image7="./src/assets/Star 2.svg"
                alt7=""
              />
              <SectionHChild
                paragraph="Austin hardwood floors installed engineered hardwood floors in our upstairs hallway,
               bedroom and on the stairs. Matt is very knowledgeable and available to answer any question along the way.
                I would highly recommend this company to install floors."
                bold=" Alaine G."
                image1="./src/assets/pexels-pixabay-259962 1 (14).png"
                alt1=""
                image2="./src/assets/alaineg-img.jpg.png"
                alt2=""
                image3="./src/assets/Star 2.svg"
                alt3=""
                image4="./src/assets/Star 2.svg"
                alt4=""
                image5="./src/assets/Star 2.svg"
                alt5=""
                image6="./src/assets/Star 2.svg"
                alt6=""
                image7="./src/assets/Star 2.svg"
                alt7=""
              />
            </section>
            <section
              className={`rows h_parent gap24 h_child_container h_translate${num}`}
            >
              <SectionHChild
                paragraph="Austin hardwood floors installed engineered hardwood floors in our upstairs hallway,
               bedroom and on the stairs. Matt is very knowledgeable and available to answer any question along the way.
                I would highly recommend this company to install floors."
                bold=" Alaine G."
                image1=" ./src/assets/pexels-pixabay-259962 1 (12).png"
                alt1=""
                image2="./src/assets/alaineg-img.jpg.png"
                alt2=""
                image3="./src/assets/Star 2.svg"
                alt3=""
                image4="./src/assets/Star 2.svg"
                alt4=""
                image5="./src/assets/Star 2.svg"
                alt5=""
                image6="./src/assets/Star 2.svg"
                alt6=""
                image7="./src/assets/Star 2.svg"
                alt7=""
              />
              <SectionHChild
                paragraph="Austin hardwood floors installed engineered hardwood floors in our upstairs hallway,
               bedroom and on the stairs. Matt is very knowledgeable and available to answer any question along the way.
                I would highly recommend this company to install floors."
                bold=" Alaine G."
                image1="./src/assets/pexels-pixabay-259962 1 (14).png"
                alt1=""
                image2="./src/assets/alaineg-img.jpg.png"
                alt2=""
                image3="./src/assets/Star 2.svg"
                alt3=""
                image4="./src/assets/Star 2.svg"
                alt4=""
                image5="./src/assets/Star 2.svg"
                alt5=""
                image6="./src/assets/Star 2.svg"
                alt6=""
                image7="./src/assets/Star 2.svg"
                alt7=""
              />
            </section>
          </section>
          <section className="h_pad arrows">
            <button className="relative zindex transparent_button">
              <img
                src="./src/assets/Move.svg"
                alt=""
                onClick={() => {
                  num == min ? setmum((num = max)) : setmum((num = num - 1));
                }}
              />
            </button>
            <button className="relative zindex transparent_button">
              <img
                src=" ./src/assets/Move (1).svg"
                alt=""
                onClick={() => {
                  num == max ? setmum((num = min)) : setmum((num = num + 1));
                }}
              />
            </button>
          </section>
        </section>
      </section>
    </>
  );
}
export default SectionH;

let num = 0;
export let SectionBChild = ({
  heading,
  paragraph,
  link,
  imageA,
  altA,
}) => {
  let image_b = "./src/assets/chevron_right_b.svg";
  let image_w = "./src/assets/chevron_right_w.svg";
  let blue_bg = "blue_bg";
  let white_bg = "white_bg";
  let empty_bg = "";
  num++;
  return (
    <>
      <section
        className={`j_center b_padding column b_child gap21 ${
          num % 2 == 0 ? blue_bg : white_bg
        }`}
      >
        <section className="j_center">
          <img src={imageA} alt={altA} />
        </section>
        <section className="column gap24">
          <section>
            <h4
              className={`heading heading4 j_center text_center ${
                num % 2 == 0 ? blue_bg : empty_bg
              }`}
            >
              {heading}
            </h4>
            <p
              className={`paragraph j_center text_center ${
                num % 2 == 0 ? blue_bg : empty_bg
              }`}
            >
              {paragraph}
            </p>
          </section>
          <section>
            <a href={link} className="read_more">
              Read More
              <img
                src={num % 2 == 0 ? image_w : image_b}
                alt={num % 2 == 0 ? "blue arrow" : "white arrow"}
              />
            </a>
          </section>
        </section>
      </section>
    </>
  );
};

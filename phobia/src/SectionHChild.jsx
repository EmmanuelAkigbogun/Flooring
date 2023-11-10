export let SectionHChild = ({
  paragraph,
  bold,
  image1,
  alt1,
  image2,
  alt2,
  image3,
  alt3,
  image4,
  alt4,
  image5,
  alt5,
  image6,
  alt6,
  image7,
  alt7,
}) => {

  return (
    <>
      <section className="rows h_container h_parent_a">
        <section className="h_im j_center">
          <img src={image1} className="h_image" alt={alt1} />
        </section>
        <section className="h_text gap40 column j_center">
          <p className="paragraph">{paragraph}</p>
          <section className="rows">
            <section>
              <img src={image2} alt={alt2} />
            </section>
            <section>
              <b className="bold">{bold}</b>
              <section>
                <img src={image3} alt={alt3} />
                <img src={image4} alt={alt4} />
                <img src={image5} alt={alt5} />
                <img src={image6} alt={alt6} />
                <img src={image7} alt={alt7} />
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

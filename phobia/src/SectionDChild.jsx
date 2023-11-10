let num = 0;
export let SectionDChild = ({ button, heading, paragraph, image, alt }) => {
  num++;
  return (
    <>
      <section className={`section_d_child_${num % 2 == 0 ? "a" : "b"}`}>
        <section>
          <section className="rows d_gap48 d_wrap">
            <section
              className={`d_image_container d_order${num % 2 == 0 ? "1" : "0"}`}
            >
              <img src={image} alt={alt} className="d_image" />
            </section>
            <section
              className={`align_center rows d_order${num % 2 == 0 ? "0" : "1"}`}
            >
              <section className="gap16 column">
                <section>
                  <h4 className="heading heading4">{heading}</h4>
                  <p className="paragraph">{paragraph}</p>
                </section>
                <section>
                  <button className="button white button100">{button}</button>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

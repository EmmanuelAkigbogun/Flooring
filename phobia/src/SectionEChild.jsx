export let SectionEChild = ({
  heading,
  paragraph,
  link,
  linkText,
  imageA,
  altA,
}) => {
  return (
    <section>
      <section>
        <img src={imageA} alt={altA} className="e_image" />
      </section>
      <section className="gap12 column e_text">
        <section>
          <h4 className="heading heading4">{heading}</h4>
          <p className="paragraph">{paragraph}</p>
        </section>
        <section>
          <a className="read_more white_bg" href={link}>
            {linkText}
            <img src="./src/assets/chevron_right_b.svg" alt="right arrow" />
          </a>
        </section>
      </section>
    </section>
  );
};

export let SectionCChild = ({
  button,
  heading,
  paragraph,
  linkText,
  link,
  imageA,
  altA,
}) => {
  return (
    <>
      <section className="column gap12">
        <section className="column gap8">
          <section className="gap8 rows">
            <img src={imageA} alt={altA} />
            <button className="red_button ">{button}</button>
          </section>
          <h4 className="heading">{heading}</h4>
          <p className="paragraph">{paragraph}</p>
        </section>
        <section>
          <a href={link} className="read_more white_bg">
            {linkText}
            <img src="./src/assets/chevron_right_b.svg" alt="right arrow" />
          </a>
        </section>
      </section>
    </>
  );
};

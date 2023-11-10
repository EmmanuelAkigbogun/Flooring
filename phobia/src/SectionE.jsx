import { SectionEChild } from "./SectionEChild";
function SectionE() {
  return (
    <>
      <section className="e_parent">
        <section className="column gap32">
          <h3 className="heading heading3 j_center">Flooring Made Easy</h3>
          <section className="rows gap24 e_wrap j_center">
            <SectionEChild
              heading="Flooring by Need"
              paragraph="Find out what floors work best for your lifestyle (pets, kids, durable, eco-friendly)."
              link=""
              linkText="Explore Flooring by Need"
              imageA="./src/assets/pexels-pixabay-259962%201%20(6).png"
              altA=""
            />
            <SectionEChild
              heading="Flooring by Room"
              paragraph="Choose the right color and size for your kitchen, bathrooms, dining room, and more."
              link=""
              linkText="Explore Flooring by Room"
              imageA="./src/assets/pexels-pixabay-259962%201%20(7).png"
              altA=""
            />
          </section>
        </section>
      </section>
    </>
  );
}
export default SectionE;

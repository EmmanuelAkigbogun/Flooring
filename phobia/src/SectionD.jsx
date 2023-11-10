import { SectionDChild } from "./SectionDChild";
function SectionD() {
  return (
    <>
      <section className="section_d_parent">
        <section className="gap32 column">
          <h3 className="heading heading3 j_center headind_d">
            Choose from a wide range of looks
          </h3>
          <section className="column gap24">
            <SectionDChild
              image="./src/assets/Frame%201000002172.png"
              alt=""
              button="View Hardwood Flooring"
              heading="Hardwood Flooring "
              paragraph="We stock engineered hardwood,
               real solid wood floors,
               European Oak wide planks,
               and all the latest designer styles."
            />
            <SectionDChild
              image="./src/assets/pexels-pixabay-259962%201.png"
              alt=""
              button="View Vinyl Floors"
              heading="Vinyl-Plank Flooring"
              paragraph="Stock LVP Luxury Vinyl plank floor that is waterproof and pet friendly.
               Our 3D print products look just like real wood.
                Discover the latest styles."
            />
            <SectionDChild
              image="./src/assets/pexels-pixabay-259962%201%20(1).png"
              alt=""
              button=" View Tile Flooring"
              heading="Tile Flooring "
              paragraph="We can connect you with top quality porcelain,
               ceramic, and stone tile.
                Hundreds of mosaics and backsplash flooring wall tile for kitchen and bathrooms."
            />
          </section>
        </section>
      </section>
    </>
  );
}
export default SectionD;

import { SectionBChild } from "./SectionBChild";
function SectionB() {
  return (
    <>
      <section className="parentsection section_b_parent">
        <section className="column gap32">
          <h3 className="center heading3 heading text_center">What we Offer</h3>
          <section className="rows gap24 b_components">
            <SectionBChild
              heading="Shop-at-Home or Visit Us"
              paragraph="Pick from hundreds of our LVP,
             wood and luxury vinyl plank floor samples online now.
              We will bring them to your door."
              link=""
              imageA="./src/assets/storefront.svg"
              altA="storefront"
            />
            <SectionBChild
              heading="The Latest Product Styles"
              paragraph="Don’t miss out on current flooring styles,
             classic looks and updated colors that are durable, waterproof,
            pet friendly and long lasting."
              link=""
              imageA="./src/assets/grade.svg"
              altA=""

            />
            <SectionBChild
              heading="Get Precise Custom Estimates"
              paragraph="Get a custom hardwood,
             or vinyl plank installation soon as tomorrow and enjoy luxury floors for years to come.
              Be safe knowing the install is guaranteed for life."
              link=""
              imageA="./src/assets/workspace_premium.svg"
              altA=""
            />
            <SectionBChild
              heading="Get Precise Custom Estimates"
              paragraph="Know what your project will cost, up front with no hidden fees.
             Mention this offer for a First Time Customer Discount."
              link=""
              imageA="./src/assets/monetization_on.svg"
              altA=""
            />
          </section>
        </section>
      </section>
    </>
  );
}
export default SectionB;

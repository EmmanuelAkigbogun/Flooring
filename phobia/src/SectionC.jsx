import { SectionCChild } from "./SectionCChild";
function SectionC() {
  return (
    <>
      <section className="parent_secion_c">
        <section className="column gap32">
          <h3 className="heading3  heading text_center">
            Get Floors in 3 easy steps
          </h3>
          <section className="rows gap40 c_wrap">
            <SectionCChild
              button="Step 1"
              heading="Get Inspired"
              paragraph="See your possibilities by searching through
             hundreds of floor products and pick out some favorites"
              linkText="View Floors"
              link=""
              imageA="./src/assets/grid_view.svg"
              altA="rid_view"
            />
            <SectionCChild
              button="Step 2"
              heading="Schedule a free appointment"
              paragraph="When you have chosen your favorites schedule of free
             appointment to start the process of making it happen."
              linkText="Schedule Now"
              link=""
              imageA="./src/assets/calendar_month.svg"
              altA="calendar_month"
            />
            <SectionCChild
              button="Step 3"
              heading="We will guide you through"
              paragraph="With in days your dream floors will become a reality topped with our lifetime guarantee"
              linkText="Our Guarantee"
              link=""
              imageA="./src/assets/footprint.svg"
              altA="footprint"
            />
          </section>
        </section>
      </section>
    </>
  );
}
export default SectionC;

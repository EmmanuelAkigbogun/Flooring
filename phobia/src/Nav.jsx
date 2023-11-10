import { useRef, useState } from "react";
import { list } from "./List";
import { list1 } from "./List";
import { NavDropDown } from "./NavDropDown";
function Nav() {
  let [state, setstate] = useState("");
  let [hover, sethover] = useState("");
  let [click, setclick] = useState("");
  let [click1, setclick1] = useState("");
  let [hover1, sethover1] = useState("");
  let happy = useRef(null);
  let happy1 = useRef(null);
  window.onmouseover = (e) => {
    happy.current.contains(e.target)
      ? sethover((hover = "flex"))
      : sethover((hover = ""));
    happy1.current.contains(e.target)
      ? sethover1((hover1 = "flex"))
      : sethover1((hover1 = ""));
  };
  return (
    <>
      <section className="fixed">
        <section>
          <marquee>
            <span>$99 OFF on listed products for First Time Customers</span>
            <span>$99 OFF on listed products for First Time Customers</span>
            <span>Pet-friendly Water-proof Vinyl Planks</span>
            <span>Try our Flooring Visualizer in your Spaces</span>
          </marquee>
        </section>
        <nav className={`space_between parentsection nav ${state}nav`}>
          <section className={`right_container ${state}right_container`}>
            <section className={`nav_icon ${state}nav_icon`}>
              <a href="#">
                <img src="./src/assets/logo2.svg" alt="img" />
              </a>
              <button
                className="transparent_button"
                onClick={() => {
                  setstate((state = ""));
                }}
              >
                <img
                  src="./src/assets/Close.svg"
                  alt=""
                  className={`close ${state}close`}
                />
              </button>
            </section>
            <ul className={`container ${state}container`}>
              <li
                className="column relative"
                ref={happy}
                onClick={() => {
                  click == ""
                    ? setclick((click = "mobile_flex"))
                    : setclick((click = ""));
                }}
              >
                <section className="hover_menu relative">
                  <p className="paragraph">Products</p>
                  <section className="hover_icon">
                    <img
                      src="./src/assets/expand_more.svg"
                      alt=""
                      className={`${click == "" ? "" : "rotate180"} ${
                        hover == "" ? "" : "hover_rotate180"
                      }`}
                    />
                  </section>
                </section>
                <NavDropDown
                  value={list}
                  position="product_position"
                  hover={hover}
                  click={click}
                />
              </li>
              <li>
                <p className="paragraph">Services</p>
              </li>
              <li>
                <p className="paragraph">How It Works</p>
              </li>
              <li
                className="column relative"
                ref={happy1}
                onClick={() => {
                  click1 == ""
                    ? setclick1((click1 = "mobile_flex"))
                    : setclick1((click1 = ""));
                }}
              >
                <section className="hover_menu relative">
                  <p className="paragraph">About Us</p>
                  <section className="hover_icon">
                    <img
                      src="./src/assets/expand_more.svg"
                      alt=""
                      className={`${click == "" ? "" : "rotate180"} ${
                        hover1 == "" ? "" : "hover_rotate180"
                      }`}
                    />
                  </section>
                </section>
                <NavDropDown
                  value={list1}
                  position="about_position"
                  hover={hover1}
                  click={click1}
                />
              </li>
            </ul>
          </section>
          <section className={`button-container ${state}button-container`}>
            <button
              className={`button ${state}button white_nav_button ${state}white_nav_button white`}
            >
              Try floor visualization
            </button>
            <button className={`button ${state}button blue`}>
              Book free Estimate
            </button>
          </section>
          <section
            className="mobile"
            onClick={() => {
              setstate((state = "menu_"));
            }}
          >
            <button className="transparent_button">
              <img
                src="./src/assets/menu.svg"
                alt=""
                className={`menu ${state}menu`}
              />
            </button>
          </section>
        </nav>
      </section>
    </>
  );
}
export default Nav;

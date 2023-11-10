import { useState } from "react";
/*

.con {
  display: flex;
  justify-content: space-between;
  width: 500px;
  overflow: scroll;
}
.child:nth-of-type(2),.child:nth-of-type(2)::after{
  background-color: var(--secondary-Color);
  color: var(--white);
  content: 'love';
  border: 1px solid var(--white);
}
.childa {
  border: 1px solid gold;
  min-width: 500px;
  height: 300px;
  transform: translate(0%, 0%);
}
      <section className="con">
        <section className="child">a</section>
        <section className="child">b</section>
        <section className="child">c</section>
      </section>


*/
function RandomColor() {
  let [state, setstate] = useState(233);
  //bold issue
  return (
    <>
      <section>
        <b>{state}</b>
      </section>
      <button
        id="love"
        data-hat="hat"
        data-cat="cat"
        className="love"
        style={{
          background: "#" + state,
          color: "white",
          fontSize: "2rem",
        }}
        onClick={(e) => {
          setstate((state = String(Math.random()).slice(2, 8)));
        }}
      >
        button &#x2606;
      </button>
    </>
  );
}
/*.love{
  width:60vw;
  height:30vw;
}
b{
  padding:30vw;
}*/
export default RandomColor;

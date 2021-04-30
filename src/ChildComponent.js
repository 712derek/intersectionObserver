import React from "react";

function ChildComponent(props) {
  return (
    <div ref={props.sectionRef3} className="box3 box">
      Observe me and see what happens 3
    </div>
  );
}

export default ChildComponent;

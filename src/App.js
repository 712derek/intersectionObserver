import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import ChildComponent from "./ChildComponent";

function App() {
  // * INTERSECTION OBSERVER
  const [sectionRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });
  const [sectionRef2, isVisible2] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });
  const [sectionRef3, isVisible3] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });

  return (
    <div className="app">
      <div className="isVisible">
        {isVisible ? "1 IN VIEWPORT  " : "1 not in viewport   "}
        {isVisible2 ? "2 IN VIEWPORT  " : "2 not in viewport   "}
        {isVisible3 ? "3 IN VIEWPORT  " : "3 not in viewport   "}
      </div>
      <div className="section"></div>
      <div className="box" ref={sectionRef}>
        Observe me and see what happens
      </div>
      <div className="box2 box" ref={sectionRef2}>
        Observe me and see what happens 2
      </div>
      <ChildComponent sectionRef3={sectionRef3} />
    </div>
  );
}

export default App;

// * INTERSECTION OBSERVER LOGIC
const useElementOnScreen = (options) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, options);
    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [sectionRef, options]);
  return [sectionRef, isVisible];
};

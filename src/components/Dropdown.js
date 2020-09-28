import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ options, selected, onSelectedChange, label }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(); //set ref

  useEffect(() => {
    const onBodyClick = (event) => {
      //created it as variable so can remove it with .remove
      if (ref.current.contains(event.target)) {
        return;
      } //adding event listener for click .contains checks if node specified descendant
      setOpen(false); //
    };

    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
      //cleanup function invoked when running useEffect again or when component is being removed entirely
      //so when visibility of DD is toggled, then we dont get error message because useeffect has been cleaned up
    };
  }, []);
  const renderedOptions = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    } else {
      return (
        <div
          key={option.value}
          className="item"
          onClick={() => onSelectedChange(option)}
        >
          {option.label}
        </div>
      );
    }
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label"> {label}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"> </i>
          <div className="text"> {selected.label} </div>{" "}
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderedOptions}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dropdown;

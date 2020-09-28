import React, { useState } from "react";
// import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  { title: "What is React", content: "React is a frontend JS framework" },
  {
    title: "Why use React",
    content: "Its a favourite JS library amongst Engineers",
  },
  { title: "How do you use React", content: "You use React by creating items" },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  { label: "A Shade of Blue", value: "blue" },
];

export default () => {
  // const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);

  return (
    <div>
      <Translate />
      {/* <Accordion items={items} />
      <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle DropDown
      </button>
      {showDropdown ? (
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      ) : null} */}
    </div>
  );
};

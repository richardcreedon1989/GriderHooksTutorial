import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

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

// const showAccordion = () => {
//   if (window.location.pathname === "/") {
//     return <Accordion items={items} />;
//   }
// };

// const showList = () => {
//   if (window.location.pathname === "/list") {
//     return <Search />;
//   }
// };

// const showDropdown = () => {
//   if (window.location.pathname === "/dropdown") {
//     return <Dropdown />;
//   }
// };

// const showTranslate = () => {
//   if (window.location.pathname === "/translate") {
//     return <Translate />;
//   }
// };

// whenever jsx is provided inside another jsx tag, inner element provided as prop called children
//this is why route component takes in path and children as props
export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>

      <Route path="/list">
        {" "}
        <Search />
      </Route>

      <Route path="/dropdown">
        {" "}
        <Dropdown
          label="Select a Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>

      <Route path="/translate">
        {" "}
        <Translate />
      </Route>
    </div>
  );
};

// export default () => {
//   return (
//     <div>
//       {showAccordion()}
//       {showList()} {showDropdown()} {showTranslate()}
//     </div>
//   );
// };

// export default () => {
//   // const [selected, setSelected] = useState(options[0]);
//   // const [showDropdown, setShowDropdown] = useState(true);

//   return (
//     <div>
//       <Translate />
//       {/* <Accordion items={items} />
//       <button onClick={() => setShowDropdown(!showDropdown)}>
//         Toggle DropDown
//       </button>
//       {showDropdown ? (
//         <Dropdown
//           options={options}
//           selected={selected}
//           onSelectedChange={setSelected}
//         />
//       ) : null} */}
//     </div>
//   );
// };

import React from "react";

const Link = ({ href, className, children }) => {
  const onClick = (e) => {
    if (e.metaKey || e.ctrlKey) {
      //allows you to hit ctrl and click to open new window
      return; //if ctrl key held down, ignore everything below and behave like normal for a link click (with ctrl)
    }

    e.preventDefault();
    window.history.pushState({}, "", href);

    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a
      onClick={onClick}
      className={className}
      href={href}
      children={children}
    ></a>
  );
};

export default Link;

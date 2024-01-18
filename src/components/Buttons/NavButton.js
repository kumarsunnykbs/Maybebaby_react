import React from "react";

function NavButton({ clickFun, name, isActive,isLast  }) {

  const handleClick = () => {
    clickFun();
  };

  return (
    <div
      className={`nav-button ${isActive ? "active hgi" : "hgi"} ${isLast ? "last-button" : ""}`}
      onClick={handleClick}
    >
      {name}
    </div>
  );
}

export default NavButton;
import React, { useState } from "react";
import Footer from "./footer";
import Sticky from "react-stickynode";
import { Waypoint } from "react-waypoint";
import Header from "./header/header";

const Layout = ({ children }) => {
  const [isSticky, setisSticky] = useState(false);
  const setSticky = () => {
    setisSticky(true);
  };

  const removeSticky = () => {
    setisSticky(false);
  };

  const onWaypointPositionChange = ({ currentPosition }) => {
    if (currentPosition === "above") {
      setSticky();
    }
    if (currentPosition === "below") {
      removeSticky();
    }
  };

  return (
    <React.Fragment>
      <Sticky enabled={isSticky} innerZ={1000} top={0}  >
        <Header className={`${isSticky ? "sticky backdrop-blur border-b-3 border-[#001a33] bg-white" : "unSticky"}`} />
      </Sticky>
      <Waypoint
        onEnter={removeSticky}
        onPositionChange={onWaypointPositionChange}
      />
      <main className="font-body" >
        {children}
        <Footer />
      </main>
    </React.Fragment>
  );
};

export default Layout;

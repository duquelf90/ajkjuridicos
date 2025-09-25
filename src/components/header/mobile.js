import React, { useContext } from "react";
import { MobileNav } from "./navLink";
import Drawer from "../drawer";
import { Icon } from '@iconify/react'
import { DrawerContext } from "contexts/drawer/drawer.context";



const MobileDrawer = () => {
  const { state, dispatch } = useContext(DrawerContext);

  // Toggle drawer
  const toggleHandler = React.useCallback(() => {
    dispatch({
      type: "TOGGLE",
    });
  }, [dispatch]);

  return (
    <Drawer
      width="220px"
      drawerHandler={
        <div className="flex lg:hidden items-center justify-center w-[26px] shrink-0">
          <Icon icon="ic:outline-menu" width="24" height="24" ></Icon>
        </div>
      }
      open={state.isOpen}
      toggleHandler={toggleHandler}
      drawerStyle="w-full h-full bg-gray-800 opacity-1"
      closeBtnStyle="flex items-center justify-center absolute top-[30px] right-[30px] z-5"
    >
      <div className="flex h-full items-center">
        <MobileNav />
      </div>
    </Drawer>
  );
};

export default MobileDrawer;

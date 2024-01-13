import { themeChange } from "theme-change";
import React, { useEffect, useState } from "react";
// import { useSelector, useDispatch } from "react-redux";

import Bars3Icon from "@heroicons/react/24/outline/Bars3Icon";
import MoonIcon from "@heroicons/react/24/outline/MoonIcon";
import SunIcon from "@heroicons/react/24/outline/SunIcon";
import ArrowRightOnRectangleIcon from "@heroicons/react/24/outline/ArrowRightOnRectangleIcon";

function Header() {
  // const dispatch = useDispatch();
  const [currentTheme, setCurrentTheme] = useState(
    localStorage.getItem("theme")
  );
  useEffect(() => {
    themeChange(false);
    if (currentTheme === null) {
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        setCurrentTheme("dark");
      } else {
        setCurrentTheme("light");
      }
    }
  }, []);

  return (
    <>
      <div className="navbar  flex justify-between bg-base-100  z-10 shadow-md  ">
        {/* Menu toogle for mobile view or small screen */}
        <div className="">
          <label
            htmlFor="left-sidebar-drawer"
            className="btn btn-primary drawer-button lg:hidden"
          >
            <Bars3Icon className="h-5 inline-block w-5" />
          </label>
        </div>

        <div className="order-last mx-5">
          <label className="swap ">
            <input type="checkbox" />
            <SunIcon
              data-set-theme="light"
              data-act-class="ACTIVECLASS"
              className={
                "fill-current w-6 h-6 " +
                (currentTheme === "dark" ? "swap-on" : "swap-off")
              }
            />
            <MoonIcon
              data-set-theme="dark"
              data-act-class="ACTIVECLASS"
              className={
                "fill-current w-6 h-6 " +
                (currentTheme === "light" ? "swap-on" : "swap-off")
              }
            />
          </label>
          <div className="mx-5">
            <button
              onClick={() => {
                console.log("hi");
                window.localStorage.clear();
                window.location.href = "/login";
              }}
              className="p-2  text-white rounded align-items-center"
              style={{
                display: "flex",
                alignItems: "center",
                background: "#00a0db",
              }}
            >
              <span style={{ fontWeight: "bold" }}>Logout</span>
              <ArrowRightOnRectangleIcon
                style={{ width: "20px", height: "20px" }}
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

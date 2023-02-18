// SideMenu.js
import React, { Component } from "react";

const sideMenu = {
  position: "fixed",
  width: "100%",
  height: 700,
  overflow: "hidden",
  pointerEvents: "none",
  zIndex: 25,
};

const sideMenuOverlay = {
  position: "absolute",
  right: 10,
  display: "block",
  height: "100%",
  width: "30%",
  backgroundColor: "#abdbe3",
  padding: 10,
};

const title = "Museum";
const description = "nice";
const suggestions = "make it better duh";

class SideMenu extends Component {
  render() {
    return (
      <div class="w-60 h-full shadow-md bg-white px-1 absolute">
        <ul class="relative">
          <li class="relative">
            <a
              class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              {title}
            </a>
          </li>
          <li class="relative">
            <a
              class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              {description}
            </a>
          </li>
          <li class="relative">
            <a
              class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out"
              href="#!"
              data-mdb-ripple="true"
              data-mdb-ripple-color="dark"
            >
              {suggestions}
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SideMenu;

import React from "react";
import "./Topbar.css";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdLanguage } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Nexo Dashboard</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <IoMdNotificationsOutline size={30} />
          </div>
          <div className="topbarIconContainer">
            <MdLanguage size={30} />
          </div>
          <div className="topbarIconContainer">
            <IoSettingsSharp size={30} />
          </div>
          <img src="images/avatar.png" alt="avatar" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}

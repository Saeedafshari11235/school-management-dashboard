import React from "react";
import { MdVisibility } from "react-icons/md";
import "./WidgetSm.css";
import { newMembers } from "../../datas";

export default function WidgetSm() {
  return (
    <div className="widgetsm">
      <span className="widgetsmtitle">New join users</span>
      <ul className="widgetsmlist">
        {newMembers.map((item) => {
            return(
                <li className="widgetsmlistitem">
                <img src="images/avatar.png" alt="avatar" className="widgetsmimg" />
                <div className="widgetsmuser">
                  <span className="widgetsmusername">{item.username}</span>
                  <span className="widgetsmusertitle">{item.jobTitle}</span>
                </div>
                <button className="widgetsmbutton">
                  <MdVisibility className="widgetsmicon" />
                </button>
              </li>
            )
        })}
      </ul>
    </div>
  );
}

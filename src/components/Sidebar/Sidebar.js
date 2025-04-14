import React from "react";
import "./Sidebar.css";
import { FaHome } from "react-icons/fa";
import { IoAnalyticsSharp } from "react-icons/io5";
import { MdOutlineSsidChart } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { TbTransactionDollar } from "react-icons/tb";
import { MdReport } from "react-icons/md";
import { CiMail } from "react-icons/ci";
import { MdOutlineFeedback } from "react-icons/md";
import { LuMessageSquare } from "react-icons/lu";
import { MdOutlineManageAccounts } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <div className="sidebarmenu">
          <h3 className="sidebartitle">Dashboard</h3>
          <ul className="sidebarlist">
            <Link to="/" className="link">
              <li className="sidebarlistitem active">
                <FaHome className="sidebaricon" />
                Home
              </li>
            </Link>
            <li className="sidebarlistitem">
              <IoAnalyticsSharp className="sidebaricon" />
              Analytics
            </li>
            <li className="sidebarlistitem">
              <MdOutlineSsidChart className="sidebaricon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarmenu">
          <h3 className="sidebartitle">Quick menu</h3>
          <ul className="sidebarlist">
            <Link to="/users" className="link">
              <li className="sidebarlistitem">
                <FaUser className="sidebaricon" />
                Users
              </li>
            </Link>
            <Link to="/newuser" className="link">
              <li className="sidebarlistitem">
                <FaUserPlus className="sidebaricon" />
                New users
              </li>
            </Link>
            <Link to="/products" className="link">
              <li className="sidebarlistitem">
                <AiFillProduct className="sidebaricon" />
                Products
              </li>
            </Link>
            <li className="sidebarlistitem">
              <TbTransactionDollar className="sidebaricon" />
              Transactions
            </li>
            <li className="sidebarlistitem">
              <MdReport className="sidebaricon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarmenu">
          <h3 className="sidebartitle">Notifications</h3>
          <ul className="sidebarlist">
            <li className="sidebarlistitem">
              <CiMail className="sidebaricon" />
              Mail
            </li>
            <li className="sidebarlistitem">
              <MdOutlineFeedback className="sidebaricon" />
              Feedback
            </li>
            <li className="sidebarlistitem">
              <LuMessageSquare className="sidebaricon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarmenu">
          <h3 className="sidebartitle">Staff</h3>
          <ul className="sidebarlist">
            <li className="sidebarlistitem">
              <MdOutlineManageAccounts className="sidebaricon" />
              Manage
            </li>
            <li className="sidebarlistitem">
              <LuMessageSquare className="sidebaricon" />
              Messages
            </li>
            <li className="sidebarlistitem">
              <MdReport className="sidebaricon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

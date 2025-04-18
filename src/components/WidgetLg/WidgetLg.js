import React from "react";
import "./WidgetLg.css";

export default function WidgetLg() {
  const Button = (type) => {
    return <button className={"widgetlgbutton " + type}>{type}</button>;
  };

  return (
    <div className="widgetlg">
      <h3 className="widgetlgtitle">Latest Transactions</h3>
      <table className="widgetlgtable">
        <tr className="widgetlgtr">
          <th className="widgetlgth">Customer</th>
          <th className="widgetlgth">Date</th>
          <th className="widgetlgth">Amount</th>
          <th className="widgetlgth">Status</th>
        </tr>
        <tr className="widgetlgtr">
          <td className="wdigetlgusder">
            <img
              src="images/avatar.png"
              alt="profile"
              className="widgetlgimg"
            />
            <span>saeed</span>
          </td>
          <td className="wdigetlgdate">2 may 2002</td>
          <td className="widgetlgamount">$199.95</td>
          <td className="widgetlgstatus">{Button("approved")}</td>
        </tr>

        <tr className="widgetlgtr">
          <td className="wdigetlgusder">
            <img
              src="images/avatar.png"
              alt="profile"
              className="widgetlgimg"
            />
            <span>mammad</span>
          </td>
          <td className="wdigetlgdate">2 may 2002</td>
          <td className="widgetlgamount">$199.95</td>
          <td className="widgetlgstatus">{Button("pending")}</td>
        </tr>

        <tr className="widgetlgtr">
          <td className="wdigetlgusder">
            <img
              src="images/avatar.png"
              alt="profile"
              className="widgetlgimg"
            />
            <span>ali</span>
          </td>
          <td className="wdigetlgdate">2 may 2002</td>
          <td className="widgetlgamount">$199.95</td>
          <td className="widgetlgstatus">{Button("declined")}</td>
        </tr>

        <tr className="widgetlgtr">
          <td className="wdigetlgusder">
            <img
              src="images/avatar.png"
              alt="profile"
              className="widgetlgimg"
            />
            <span>ali</span>
          </td>
          <td className="wdigetlgdate">2 may 2002</td>
          <td className="widgetlgamount">$199.95</td>
          <td className="widgetlgstatus">{Button("declined")}</td>
        </tr>
      </table>
    </div>
  );
}

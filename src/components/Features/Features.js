import React from "react";
import "./Feature.css";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

export default function Features() {
  return (
    <div className="features">
      <div className="featureitem">
        <span className="featuretitle">Revanue</span>
        <div className="featurecontainer">
          <span className="featureprice">$2,415</span>
          <span className="featurerate">
            -11.4%
            <FaArrowDown className="featureicon fall" />
          </span>
        </div>
        <span className="featuresub">Compared to last month</span>
      </div>
      <div className="featureitem">
        <span className="featuretitle">Revanue</span>
        <div className="featurecontainer">
          <span className="featureprice">$4,415</span>
          <span className="featurerate">
            -1.4%
            <FaArrowDown className="featureicon fall" />
          </span>
        </div>
        <span className="featuresub">Compared to last month</span>
      </div>
      <div className="featureitem">
        <span className="featuretitle">Revanue</span>
        <div className="featurecontainer">
          <span className="featureprice">$2,225</span>
          <span className="featurerate">
            +2.4%
            <FaArrowUp className="featureicon" />
          </span>
        </div>
        <span className="featuresub">Compared to last month</span>
      </div>
    </div>
  );
}

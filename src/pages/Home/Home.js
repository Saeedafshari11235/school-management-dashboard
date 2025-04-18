import React from "react";
import Features from "../../components/Features/Features";
import Chart from "../../components/Chart/Chart";
import "./Home.css";
import { chartData } from "../../datas";
import WidgetSm from "../../components/WidgetSm/WidgetSm";
import WidgetLg from "../../components/WidgetLg/WidgetLg";

export default function Home() {
  return (
    <div className="home">
      <Features />
      <Chart grid title="Monthly sale" data={chartData} datakey="sale" />
      <div className="homewidget">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

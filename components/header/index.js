import React, { useState } from "react";
import LeftSide from "./LeftSide";
import RightSide from "./RightSide";
import TopBarProgress from "react-topbar-progress-indicator";
import Router from "next/router";
import {useSelector} from "react-redux"

TopBarProgress.config({
  barColors: {
    0: "#ced4da",
    "1.0": "#ced4da"
  },
  shadowBlur: 5,
  barThickness: 4
});
export default function Index() {
  const theme = useSelector((state)=>state.theme.value)
  const [Progress, setProgress] = useState(false);
  Router.events.on("routeChangeStart", () => {
    setProgress(true);
  });
  Router.events.on("routeChangeComplete", () => {
    setProgress(false);
  });
  return (
    <header className="d-flex position-relative" style={{ height: "90px" }}>
      <nav
        className={"navbar"+" "+"bg-"+theme[0]+" "+"navbar-"+theme[0]+" " +"navbar-expand-lg fixed-top"}
        style={{
          boxShadow: "0 14px 9px rgb(0 0 0 /5%)",
          height: "90px"
        }}
      >
        {Progress && <TopBarProgress />}
        <div className="container">
          <LeftSide />
          <RightSide />
        </div>
      </nav>
    </header>
  );
}

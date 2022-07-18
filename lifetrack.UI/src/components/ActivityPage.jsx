import * as React from "react";
import "./ActivityPage.css";
import { useState } from "react";
import Login from "../Login/Login";
import { useNavigate } from "react-router-dom";
import ActivityFeed from "./ActivityFeed";

export default function ActivityPage(props) {
  console.log("propsAP", props);
  const navigate = useNavigate();
  return (
    <div className="activie-page">
      {props.user.email ? (
        <ActivityFeed
          activity={props.activity}
          user={props.user}
        ></ActivityFeed>
      ) : (
        <Login user={props.user} setUser={props.setUser}></Login>
      )}
    </div>
  );
}

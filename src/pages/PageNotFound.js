import React from "react";
import { Outlet } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div>
      <h1>Oops! Hier ist etwas schiefgegangen!</h1>
      <div style={{ border: "2px solid red" }}>
        <Outlet />
      </div>
    </div>
  );
};

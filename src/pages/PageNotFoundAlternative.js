import React from "react";
import { useLocation } from "react-router-dom";

export const PageNotFoundAlternative = () => {
  const location = useLocation();

  return (
    <div>
      <h1>Oops, es ist etwas schiefgegangen</h1>
      <p>
        Die Seite{" "}
        <span
          style={{
            // Sinnloses Beispiel!
            color: location.pathname === "/red" ? "red" : "blue",
            fontWeight: "bold",
          }}
        >
          {location.pathname}
        </span>{" "}
        konnte nicht gefunden werden.
      </p>
    </div>
  );
};

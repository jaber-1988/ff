import React from "react";
import { useParams } from "react-router-dom";
export const PageNotFoundContent = () => {
  const params = useParams();
  return (
    <div>
      Die Seite {params.pathNotFound} konnte leider nicht gefunden werden.
    </div>
  );
};

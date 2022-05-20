import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>Willkommen zur Northwind Data Site!</h1>
      <p>
        Besuchen Sie doch unsere tolle neue <Link to="/search">Suche</Link>!
      </p>
    </div>
  );
};

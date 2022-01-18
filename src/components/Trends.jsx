import React from "react";
import useTrends from "./useTrends";
import Trend from "./Trend";
import "./Trends.css";

const Trends = () => {
  const { repos, addToFavorites } = useTrends();

  return (
    <ul className="trends">
      {repos.map((repo) => {
        return <Trend key={repo.id} repo={repo} addToFavorites={() => addToFavorites(repo)}/>
      })}
    </ul>
  );
};

export default Trends;

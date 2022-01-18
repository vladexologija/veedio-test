import React from "react";
import useTrends from "./useTrends";
import Trend from "./Trend";
import "./Trends.css";

const Trends = () => {
  const { repos, favoritesToggle, setActiveToggle, addToFavorites } = useTrends();

  return (
    <>
      <select
        onChange={(e) => setActiveToggle(e.target.value)}
      >
        {favoritesToggle.map((toggle) => (
          <option key={toggle.key} value={toggle.key}>{toggle.label}</option>
        ))}
      </select>      
      <ul className="trends">
        {repos.map((repo) => {
          console.log('repo', repo.favorite)
          return (
            <Trend
              key={repo.id}
              repo={repo}
              addToFavorites={() => addToFavorites(repo.id)}
            />
          );
        })}
      </ul>
    </>
  );
};

export default Trends;

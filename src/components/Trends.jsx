import React from "react";
import useTrends from "./useTrends";
import Trend from "./Trend";
import "./Trends.css";

const Trends = () => {
  const {
    repos,
    favoritesToggle,
    setFavoritesActiveToggle,
    languagesToggle,
    setLanguagesActiveToggle,
    addToFavorites,
  } = useTrends();

  return (
    <>
      <nav className="app-navbar">
        <select onChange={(e) => setFavoritesActiveToggle(e.target.value)}>
          {favoritesToggle.map((toggle) => (
            <option key={toggle.key} value={toggle.key}>
              {toggle.label}
            </option>
          ))}
        </select>
        <select onChange={(e) => setLanguagesActiveToggle(e.target.value)}>
          {languagesToggle.map((toggle) => (
            <option key={toggle} value={toggle}>
              {toggle}
            </option>
          ))}
        </select>
      </nav>
      <section className="app-container">
        <ul className="trends">
          {repos.map((repo) => {
            return (
              <Trend
                key={repo.id}
                repo={repo}
                addToFavorites={() => addToFavorites(repo.id)}
              />
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Trends;

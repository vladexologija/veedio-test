import React, { useState, useEffect } from "react";
import "./Trends.css";
import API from "../services/API";

const Trends = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await API.getReoositiories();
      setRepos(result.data.items);
    }

    fetchData();
  }, []);

  return (
    <ul className="trends">
      {repos.map((repo) => (
        <li key={repo.id} className="trend-item">
          <p>
            <span className="trend-item-label">Name:</span> 
            {repo.name}
          </p>
          <p>
            <span className="trend-item-label">Link:</span>
            <a href={repo.url}>{repo.url}</a>
          </p>
          <p>
            <span className="trend-item-label">Description:</span>
            {repo.description}
          </p>
          <p>
            <span className="trend-item-label">Stars:</span>
            {repo.stargazers_count}
          </p>
        </li>
      ))}
    </ul>
  );
};
export default Trends;

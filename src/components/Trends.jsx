import React, { useState, useEffect } from "react";
import API from "../services/API";
import "./Trends.css";

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
          <div className="trend-info">
            <h3>
              {repo.name} 
            </h3>
            <a href={repo.url}>{repo.url}</a>
            <p>{repo.description}</p>
          </div>
          <div className="trend-stats">
            <div className="trend-counter">{repo.stargazers_count}</div>
          </div>          
        </li>
      ))}
    </ul>
  );
};

export default Trends;

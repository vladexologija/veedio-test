import React from "react";
import cx from "classnames";
import { ReactComponent as Star } from "./star.svg";
import "./Trends.css";

const Trend = ({repo, addToFavorites}) => (
  <li key={repo.id} className="trend-item">
    <div className="trend-info">
      <h3>{repo.name}</h3>
      <a href={repo.url}>{repo.url}</a>
      <p>{repo.description}</p>
    </div>
    <div className="trend-stats">
      <h5>{repo.language}</h5>
      <div
        className={cx("trend-item__star", {
          "trend-item__star--favorite": repo.favorite,
        })}
      >
        <Star onClick={addToFavorites} />
      </div>
      <div className="trend-item__counter">{repo.stargazers_count}</div>
    </div>
  </li>
)

export default Trend;

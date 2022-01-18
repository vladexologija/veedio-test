import { useState, useMemo, useCallback, useEffect } from "react";
import API from "../services/API";
const STORAGE = "favorites_storage";

const useTrends = () => {
  const favoritesToggle = [
    { key: "all", label: "Show All" },
    { key: "favorites", label: "Only Favorites" },
  ];
  const [languagesToggle, setLanguagesToggle] = useState([]);
  const [favoritesActiveToggle, setFavoritesActiveToggle] = useState(favoritesToggle[0].key);
  const [languagesActiveToggle, setLanguagesActiveToggle] = useState();
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await API.getRepositiories();
      const storage = window.localStorage.getItem(STORAGE);
      const storageFavorites = storage ? JSON.parse(storage) : {};
      
      const languages = { 'All': true };
      setRepos(
        result.data.items.map((item) => {
          if (item.language) languages[item.language] = true          
          return { ...item, favorite: !!storageFavorites[item.id] };
        })
      );

      setLanguagesToggle(Object.keys(languages))
    }

    fetchData();
  }, []);

  const addToFavorites = useCallback((id) => {
    try {
      const storage = window.localStorage.getItem(STORAGE);
      const storageFavorites = storage ? JSON.parse(storage) : {};
      storageFavorites[id] = !storageFavorites[id];
      window.localStorage.setItem(STORAGE, JSON.stringify(storageFavorites));          
      
      setRepos((repos) =>
        repos.map((item) => {
          if (item.id !== id) return item;
          return { ...item, favorite: storageFavorites[id] };
        })
      );
    } catch (error) {
      console.log("Issue with accessing storage", error);
    }
  }, []);

  const availableRepos = useMemo(() => {
    let filteredRepos = [...repos];
    
    if (favoritesActiveToggle === 'favorites') {
      filteredRepos = filteredRepos.filter(repo => repo.favorite);
    } 
    
    if (languagesActiveToggle && languagesActiveToggle !== 'All') {
      filteredRepos = filteredRepos.filter(repo => repo.language === languagesActiveToggle);
    } 

    return filteredRepos
  }, [repos, languagesActiveToggle, favoritesActiveToggle])

  return { repos: availableRepos, favoritesToggle, languagesToggle, favoritesActiveToggle, setFavoritesActiveToggle, setLanguagesActiveToggle, addToFavorites };
};

export default useTrends;

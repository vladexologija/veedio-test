import { useState, useCallback, useEffect } from "react";
import API from "../services/API";
const STORAGE = 'favorites_storage';

const useTrends = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const result = await API.getRepositiories();
      const storage = window.localStorage.getItem(STORAGE)
      const storageFavorites = storage ? JSON.parse(storage) : {};
      
      setRepos(result.data.items.map((item => {
        return { ...item, favorite: !!storageFavorites[item.id] }
      })));
    }

    fetchData();
  }, []);

  const addToFavorites = useCallback(
    (id) => {
      try {
        const storage = window.localStorage.getItem(STORAGE)
        const storageFavorites = storage ? JSON.parse(storage) : {};

        storageFavorites[id] = !storageFavorites[id]
        window.localStorage.setItem(STORAGE, JSON.stringify(storageFavorites));
        
        setRepos((repos) => repos.map((item => {
          if (item.id !== id) return item
          return { ...item, favorite: storageFavorites[id] }
        })));
      } catch (error) {       
        console.log('Issue with accessing storage', error);
      }
    },
    [],
  )

  return { repos, addToFavorites }
};

export default useTrends;

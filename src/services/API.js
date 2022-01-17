import axios from "axios";

const GITHUB_URL =
  "https://api.github.com/search/repositories?q=created:%3E2017-01-10&sort=stars&order=desc";
const searchUrl = `${GITHUB_URL}/search/repositories`;

const api = axios.create();

const trendsService = {
  getReoositiories: () => {
    const params = new URLSearchParams({
      created: '2021-01-01',
      sort:'stars',
      order: 'desc'
    }).toString()
    return api.get(`${searchUrl}${params}`);
  },
};

export default trendsService;

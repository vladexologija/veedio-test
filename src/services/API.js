import axios from "axios";
import dayjs from "dayjs";

const GITHUB_URL =
  "https://api.github.com";
const searchUrl = `${GITHUB_URL}/search/repositories`;

const api = axios.create();

const trendsService = {
  getReoositiories: () => {
    const lastSevenDays = dayjs().subtract(7, 'days').format('YYYY-MM-DD');
    
    const params = new URLSearchParams({
      q: `created:>${lastSevenDays}`,
      sort:'stars',
      order: 'desc'
    }).toString();

    return api.get(`${searchUrl}?${params}`);
  },};


export default trendsService;

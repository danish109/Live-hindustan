import axios from "axios";

const API_KEY = "712615e68e794831a14bc024aa449983";
const BASE_URL = "https://newsapi.org/v2";

export const newsService = {
  async getTopHeadlines() {
    try {
      const response = await axios.get(
        `${BASE_URL}/top-headlines?country=us&pageSize=20&apiKey=${API_KEY}`
      );
      return response.data.articles;
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  },

  async getNewsByCategory(category) {
    try {
      const response = await axios.get(
        `${BASE_URL}/top-headlines?country=us&category=${category}&pageSize=20&apiKey=${API_KEY}`
      );
      return response.data.articles;
    } catch (error) {
      console.error("Error fetching category news:", error);
    }
  },
};

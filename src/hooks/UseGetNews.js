import { useState, useEffect } from 'react';
import axios from 'axios';

const UseGetNews = () => {
  const KEY = '939b9d2512294a14aa2859841bc9c922';
  const URL = 'https://newsapi.org/v2/top-headlines';
  const SOURCE = 'bbc-news';

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
      try {
        const response = await axios.get(URL, {
          params: {
            sources: SOURCE,
            apiKey: KEY,
          },
        });
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching news data:', error);
        setData({ error: true });
      }
    };

  useEffect(() => {
    fetchData();
  }, []);

  return { data: data, isLoading: isLoading };
};

export default UseGetNews;
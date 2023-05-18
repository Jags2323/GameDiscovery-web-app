import { useEffect, useState } from "react";
import { Game } from "./useGames";
import axios from "axios";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface FetchGameresponse{
    count: number,
    results: Game[]
}

const useTest = () => {
    const [gamesData, setGamesData] = useState<Game[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);
    //let requestConfig : AxiosRequestConfig = { params: { genre: selectedGenre?.id } };

    //const deps = selectedGenre?.id;
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const config = {
              headers: {
                'origin': 'https://games-hub-one.vercel.app'
              }
            };
      
            const response = await axios.get('http://ec2-100-25-24-155.compute-1.amazonaws.com:9030/rawg/games', config);
            setGamesData(response.data);
          } catch (error) {
            console.error;
          }
        };
    
        fetchData();
      }, []);
  return {gamesData, error, isLoading}
}

export default useTest;
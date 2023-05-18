import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";
import { Genres } from "./useGenres";

interface Platform{
    id: number;
    name: string;
    slug: string;

}

export interface Game{
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number
}

interface FetchGameresponse{
    count: number,
    results: Game[]
}

const useGames = (selectedGenre: Genres | null) => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState('');
    const [isLoading, setLoading] = useState(false);
    //let requestConfig : AxiosRequestConfig = { params: { genre: selectedGenre?.id } };

    const deps = selectedGenre?.id;

    useEffect(() => {
        const controller = new AbortController();
        setLoading(true);
        apiClient.get<FetchGameresponse>("/games", { signal: controller.signal , params : { genres: selectedGenre?.id }})
            .then((res) => {
                setGames(res.data.results);
                setLoading(false);
            })
            .catch((err) => {
                if (err instanceof CanceledError) return;
                setError(err.message);
                setLoading(false);
            });
        
        return () => controller.abort();
    }, [deps]);
  return {games, error, isLoading}
}
export default useGames;
import { useEffect, useState } from "react";
import API from "../API";

export const useMangaFetch = mangaId => {
    const [state, setState] = useState({});
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);

    useEffect(() =>{
        const fetchManga = async() =>{
            try {
                setLoading(true);
                setError(false);

                const manga = await API.getManga(mangaId);
                setState(manga[0]);

                setLoading(false);

            } catch(error){
                console.log(error)
                setError(true);
            }
        };

        fetchManga();

    }, [mangaId]);



    return {state, loading, error}

}
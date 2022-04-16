import { useEffect, useState } from "react";
import API from "../API";

export const useChapterFetch = mangaId =>{
    const [state, setState] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);

    useEffect(()=> {
        const fetchChapters = async() =>{
            try{
                setLoading(true);
                setError(false);

                const chapters = await API.getChapters(mangaId);

                setState(chapters.chaptersFound)

                setLoading(false);
            } catch(error){
                setError(true)
            }
        };

     fetchChapters();

    }, [mangaId])

    return {state, loading, error}

}
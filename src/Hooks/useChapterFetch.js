import { useEffect, useState } from "react";
import API from "../API";

export const useChapterFetch = chapterId =>{
    const [state, setState] = useState([]);
    const [ loading, setLoading ] = useState(true);
    const [ error, setError ] = useState(false);

    useEffect(()=> {
        const fetchChapter = async() =>{
            try{
                setLoading(true);
                setError(false);

                const chapter = await API.getChapter(chapterId);

                setState(chapter[0])

                setLoading(false);
            } catch(error){
                setError(true)
            }
        };

     fetchChapter();

    }, [chapterId])

    return {state, loading, error}

}
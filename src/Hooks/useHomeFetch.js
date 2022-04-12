import { useState, useEffect } from "react";
// API
import API from "../API";

const initialState = {
}

export const useHomeFetch = () =>{
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchMangas = async() =>{
        try{
            setError(false);
            setLoading(true);

            const mangas = await API.getMangas();

            setState((prev) =>({
                ...mangas.foundMangas,
            }));

        } catch(error){
            setError(true);
        }
    };


    useEffect(()=>{
        setState(initialState);
        fetchMangas();
    }, [])

    return {state, loading, error};
}
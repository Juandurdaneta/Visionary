import { useState, useEffect } from "react";
import { getUser } from "../redux/ducks/user"; 
import { useDispatch, useSelector } from "react-redux";

export const checkIsFollowing = mangaId => {
    const [isFollowing, setIsFollowing] = useState(false);

    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user)
   
    useEffect(()=>{

        dispatch(getUser())

        if(mangaId && user.following.includes(mangaId)){
            setIsFollowing(true)
        } else {
            setIsFollowing(false)
        }


    }, [mangaId])


    return { isFollowing, setIsFollowing }

}
import React, {useCallback, useEffect, useState} from 'react';
import axios from "axios";


const useFetch = (url) => {

    const [pictures, setPictures] = useState([])
    const [option, setOption] = useState({})
    const [isLoading, setIsLoading] = useState(false)


    const setFetch = useCallback((option = {}) => {
        setOption(option)
        setIsLoading(true)
    }, []);

    useEffect(() => {
        if(!isLoading) {
            return
        }
        const fetchData = async () => {
            const res = await axios(url, option)
            setPictures(res.data)
            setIsLoading(false)
        }
        fetchData()
    }, [isLoading, option, url])


    return [{pictures, isLoading}, setFetch]
}

export default useFetch;
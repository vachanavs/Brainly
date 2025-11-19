// creating custom hook to get contents from BE
import axios from "axios";
import { useEffect, useState } from "react";

export function useContent() {
    const[contents, setContents] = useState([]);

    function refresh() {
        axios.get(`${import.meta.env.VITE_API_URL}/api/v1/dashboard/content`, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        }).then((response) => {
                setContents(response.data.content)
            })
    }

    useEffect(() => {
        refresh();  
            let interval = setInterval(() => {
                refresh()
            }, 10 * 1000)

            return () => {
                clearInterval(interval);
            }
    }, [])

    return {contents, refresh};
}
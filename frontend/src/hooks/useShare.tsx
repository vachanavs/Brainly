import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // To get URL params

export function useShare() {
    const [shareContent, setShareContent] = useState([]);
    const { shareLink } = useParams(); // Extract share link from URL

    useEffect(() => {
        if (shareLink) {
            axios.get(`${import.meta.env.VITE_API_URL}/api/v1/brain/${shareLink}`)
                .then((response) => {
                    setShareContent(response.data.content);
                })
                .catch((error) => {
                    console.error("Error fetching shared content:", error);
                });
        }
    }, [shareLink]);

    return { shareContent };
}

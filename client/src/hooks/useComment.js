import { useEffect, useState } from "react";
import commentsAPI from "../api/comments-api";

export function useCreateComment() {
    const createHandler = (carId, comment) => commentsAPI.create(carId, comment);

    return createHandler;
}

export function useGetAllComments(carId) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await commentsAPI.getAll(carId);
            console.log(result);
            const normalizedComments = result.map(comment => ({
                ...comment,
                text: typeof comment.text === 'object' ? comment.text.comment : comment.text
            }));
            setComments(normalizedComments);
        })();
    }, [carId]);

    return [comments, setComments];
}
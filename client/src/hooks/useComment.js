import { useEffect, useReducer } from "react";
import commentsAPI from "../api/comments-api";

export function useCreateComment() {
    const createHandler = (carId, comment) => commentsAPI.create(carId, comment);

    return createHandler;
}

function commentsReducer(state, action) {
    switch (action.type) {
        case 'GET_ALL':
            return action.payload.slice();
        case 'ADD_COMMENT':
            return [...state, action.payload]
        default:
            return state;
    }
}

export function useGetAllComments(carId) {
    const [comments, dispatch] = useReducer(commentsReducer, []);

    useEffect(() => {
        (async () => {
            const result = await commentsAPI.getAll(carId);
            const normalizedComments = result.map(comment => ({
                ...comment,
                text: typeof comment.text === 'object' ? comment.text.comment : comment.text
            }));
            dispatch({ type: 'GET_ALL', payload: normalizedComments });
        })();
    }, [carId]);

    return [comments, dispatch];
}

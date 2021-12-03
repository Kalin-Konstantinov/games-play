import { baseUrl } from './constants';

export const addComment = (data, token) => {
    return fetch(`${baseUrl}/data/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': token,

        },
        body: JSON.stringify(data)
    })
        .then((response) => response.json())
}


export const getAllComments = (gameId) => fetch(`${baseUrl}/data/comments?where=gameId%3D%22${gameId}%22`).then(r => r.json())
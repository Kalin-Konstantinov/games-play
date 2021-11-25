const baseUrl = 'http://localhost:3030'

export const getAll = () => {
    return fetch(`${baseUrl}/data/games?sortBy=_createdOn%20desc`)
        .then(res => res.json())
}

export const getOne = (id) => {
    return fetch(`${baseUrl}/data/games/${id}`)
        .then(res => res.json())
}
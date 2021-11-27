import { baseUrl } from './constants'

export const getAll = () => {
    return fetch(`${baseUrl}/data/games?sortBy=_createdOn%20desc`)
        .then(res => res.json())
}

export const getOne = (id) => fetch(`${baseUrl}/data/games/${id}`).then(res => res.json())

export const getNewGames = () => fetch(`${baseUrl}/data/games?sortBy=_createdOn%20desc&distinct=category`).then(res => res.json())
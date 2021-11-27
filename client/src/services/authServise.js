import { baseUrl } from "./constants"

export const login = (user) => {
    return fetch(`${baseUrl}/users/login`, {
        method: "POST",
        'Content-Type': 'application/json',
        body: JSON.stringify(user),
    })
        .then(res => res.json())
}

export const register = (user) => {
    return fetch(`${baseUrl}/users/register`, {
        method: "POST",
        'Content-Type': 'application/json',
        body: JSON.stringify(user),
    })
        .then(res => res.json())
}

export const logout = (user) => {
    return fetch(`${baseUrl}/users/logout`, {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': user.accessToken
        }
    })
}
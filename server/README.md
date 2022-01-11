# SoftUni practice server

This is SoftUni practice server created by Viktor Konstadinov for educational purposes.

## Services

| [Authentication](#authentication) | [Games](#games)      | [Comments](#comments) |
| :----:                            |:----:                |:----:                 |
| -[Login](#login)                  | -[AllGames](#allGames)|
| -[Register](#register)            | -[NewGames](#newGames)|
| -[Logout](#logout)                | -[CreateGame](#createGame)|


## Authentication

### Register

To register user send the following request on `/users/register`:
```
{
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
}
```

### Login

To login user send the following request on `/users/login`:

```
{
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
}
```

### Logout

To logout user send the following request on `/users/logout`:

```
{
    method: 'GET',
    headers: {
    'Content-Type': 'application/json',
    'X-Authorization': {userAccessToken}
    }
}
```

## Games

### AllGames

To take all games send `GET` request on `/data/games?sortBy=_createdOn%20desc`

### NewGames

To take new games only send `GET` request on `/data/games?sortBy=_createdOn%20desc&distinct=category`

### createGame

To create new game send following request on `/data/games`:

```
{
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    'X-Authorization': {userAccessToken}
    },
    body: JSON.stringify({  
            title, 
            category,
            maxLevel,
            imageUrl,
            summary
        }
    })
}
```
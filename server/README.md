# SoftUni practice server

This is SoftUni practice server created by Viktor Konstadinov for educational purposes.

## Services

| [Authentication](#authentication) | [Games](#games)              | [Comments](#comments)           |
| :---                              | :---                         | :---                            |
| -[Login](#login)                  | -[AllGames](#allGames)       | -[AllComments](#allComments)    |
| -[Register](#register)            | -[NewGames](#newGames)       | -[CreateComment](#createComment)|
| -[Logout](#logout)                | -[CreateGame](#createGame)   |                                 |
|                                   | -[GameDetails](#gameDetails) |                                 |
|                                   | -[EditGame](#editGame)       |                                 |
|                                   | -[DeleteGame](#deleteGame)   |                                 |


## Authentication

### Register

To register user send following request to `/users/register`:
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

To login user send following request to `/users/login`:

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

To logout user send following request to `/users/logout`:

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

To take all games send `GET` request to `/data/games?sortBy=_createdOn%20desc`

### NewGames

To take new games only send `GET` request to `/data/games?sortBy=_createdOn%20desc&distinct=category`

### CreateGame

To create new game send following request to `/data/games`:

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

### GameDetails

To take details of one game send `GET` request to `/data/games/:gameId`

### EditGame

To edit game send following request to `/data/games/:gameId`:

```
{
    method: 'PUT',
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

### DeleteGame

To delete game send following request to `/data/games/:gameId`:

```
{
    method: 'DELETE',
    headers: {
    'Content-Type': 'application/json',
    'X-Authorization': {userAccessToken}
    }
}
```

## Comments

## AllComments

To get all comments for a specific game send `GET` request to `/data/comments?where=gameId%3D%22{gameId}%22`

## CreateComment

To create comment for a specific game send following request to `/data/comments`:

```
{
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    'X-Authorization': {userAccessToken}
    },
    body: JSON.stringify({  
            gameId,
            comment
        }
    })
}
```
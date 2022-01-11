# SoftUni practice server

This is SoftUni practice server created by Viktor Konstadinov for educational purposes.

## Services

| [Authentication](#authentication) | [Games](#games) | [Comments](#comments) |
| :----:                            |:----:           |:----:                 |
| -[Login](#login)                  |
| -[Register](#register)            |
| -[Logout](#logout)                |


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
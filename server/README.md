# SoftUni practice server

This is SoftUni practice server created by Viktor Konstadinov for educational purposes.

| Services
|---
| -[Authentication](#authentication)
| -[Games](#games)
| -[Comments](#comments)

## Authentication

### Register User

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

### Login Users

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
# SoftUni practice server

This is SoftUni practice server created by Viktor Konstadinov for educational purposes.

| Services
|---
| -[Authentication](#authentication)
| -[Games](#games)
| -[Comments](#comments)

## Authentication

### Register User

To register user:
```
{
    method: 'POST',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
}
```
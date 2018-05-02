# Authentication API Boilerplate

Features user registration, user login/authentication with JWT, server side form validation

## Quick Start

```bash
# Install dependencies (server)
yarn install

# Run server, default: http://localhost:5000
yarn server
```

## Public routes:

**http://localhost:5000/api/users/register** <br/>
_Required fields:_ <br/>
name <br/>
email <br/>
password <br/>
password2

**http://localhost:5000/api/users/login** <br/>
_Required fields:_ <br/>
email <br/>
password <br/>

## Private (For testing token): <br/>
**http://localhost:5000/api/users/current** <br/>
Header: Authorization (Bearer Token) 

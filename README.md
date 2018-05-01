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

**http://localhost:5000/api/users/register**
_Required fields:_
name
email
password
password2

**http://localhost:5000/api/users/login**
_Required fields:_
email
password

## Private (Passport):

**http://localhost:5000/api/users/current**
_Required fields:_
Authorization (Bearer)


# Task 2: Authentication and Authorization

Implement user authentication using JWT and ensure that only authorized users can access their profiles. Also created login,register and profile endpoints.
## API Reference

#### register new user

```http
  POST /register
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `name   ` | `string` | **Required**. name of the user |
| `email   ` | `string` | **Required**. email of the user |
| `password ` | `string` | **Required**. password of the user |

#### login user

```http
  POST /login
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email   ` | `string` | **Required**. email of the user |
| `password ` | `string` | **Required**. password of the user |


```http
  GET /profile/:id
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id   ` | `string` | **Required**. id of the user |


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` - default port is 3000

`JWT_SECRET` - can be any alphanumeric string with special characters.


## Installation

Install all dependencies

```bash
  npm install
```
Create .env file and add fields mentioned in the Environment variable section.

```bash
  JWT_SECRET=your_jwt_secret

```
    
## Deployment

To deploy this project run

```bash
  npm run start
```

## Usage/Examples

#### 1.Register a New User
Send a POST request to /users/register:

```bash
POST /users/register
Content-Type: application/json
```
Request Body:

```json
{
  "username": "johndoe",
  "email": "johndoe@example.com",
  "password": "password123"
}
```
#### 2.Login a User
Send a POST request to /users/login:

```bash
Copy code
POST /users/login
Content-Type: application/json
Request Body:
```
```json
{
  "username": "johndoe",
  "password": "password123"
}
```
Response:

```json
{
  "token": "your-jwt-token-here"
}
```

#### 3.Access a User's Profile
Send a GET request to /users/profile/:id (replace :id with the user’s ID) and include the JWT token in the Authorization header:

```bash
GET /users/profile/1
authorization: Bearer your-jwt-token-here
```

Response:

```json
{
  "status": true,
  "message": "User profile fetched successfully",
  "data": {
    "id": 1,
    "username": "johndoe",
    "email": "johndoe@example.com"
  }
}
```
## Authors

- [@hami-r](https://www.github.com/hami-r)


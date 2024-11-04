# Secure-Api-JWT-Outh2-Roles 📚🚀

## Description
This project is a RESTful API for a Bookstore built using Node.js, Express.js, and MongoDB. It allows users to register, log in (using JWT or OAuth2), and perform CRUD (Create, Read, Update, Delete) operations on a collection of books. The API implements role-based access control to ensure that only authorized users can modify the book data.


## Key Features
- Create an Express.js application for the API.
- Implement JWT-based authentication for user registration and login.
- Integrate Google OAuth2 for third-party authentication.
- Secure routes using middleware for JWT and role verification.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- OAuth2
- dotenv

## Deployment Link
You can access the live API at: [Bookstore API](https://your-deployment-link-here)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Saqibi4213/secure-api-jwt-oauth2-roles.git
   cd bookstore-api


## Copy code
-npm start
The server will run at http://localhost:5000.

## API Endpoints
- `POST /api/auth/signup`: Register a new user.
- `POST /api/auth/login`: Log in a user.
- `GET /api/books`: Retrieve all books (public).
- `POST /api/books`: Create a new book (Admin only).


# Testing with Postman
You can use Postman to test the API endpoints. Ensure the server is running before making requests.
<br>
1: POST that give you token using post and url to http://localhost:5000/api/auth/signup then in body add your details
<br>
2: GET All Books: Make a GET request to http://localhost:5000/api/books.
<br>
3: Create a New Book: Make a POST request to http://localhost:5000/api/books with a JSON body:
<br>

```
{
  "title": "Book Title",
  "author": "Author Name",
  "publishedYear": 2023,
  "genre": "Fiction"
}
```


## Author

- **Name**: Mehria Saqibi
- **Email**: [email](mosawermh@gmail.com)
- **GitHub**: [Saqibi4213]


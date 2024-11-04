# Secure-Api-JWT-Outh2-Roles 📚🚀

## Description
This project is a RESTful API for a Bookstore built using Node.js, Express.js, and MongoDB. It allows users to register, log in (using JWT or OAuth2), and perform CRUD (Create, Read, Update, Delete) operations on a collection of books. The API implements role-based access control to ensure that only authorized users can modify the book data.

## Features
- **User Registration**: New users can sign up with a username, email, and password.
- **User Login**: Existing users can log in using their email and password or Google OAuth2.
- **Fetch All Books**: Retrieve a list of all available books.
- **Fetch a Single Book**: Get details of a specific book by its ID.
- **Create a New Book**: Admin users can add new books to the database.
- **Update a Book**: Admin users can modify details of an existing book.
- **Delete a Book**: Admin users can remove a book from the database.
- **Role-Based Access Control**: Ensure that only authorized users can access certain endpoints.

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- OAuth2 (Google Authentication)
- dotenv
- morgan
- helmet
- cors

## Deployment Link
You can access the live API at: [Bookstore API](https://your-deployment-link-here)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Saqibi4213/bookstore-api.git
   cd bookstore-api


## Copy code
-npm start
The server will run at http://localhost:5000.

#API Endpoints
- GET /api/books: Retrieve all books.
- GET /api/books/
- Retrieve a book by ID.
- POST /api/books: Create a new book.
- PUT /api/books/
- Update an existing book by ID.
- DELETE /api/books/
- Delete a book by ID.


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


Book Store Management System


📌 Project Description

The Book Store Management System is a simple React-based web application that allows users to manage books in a bookstore. The application provides functionality to add, view, edit, delete, and search books.

It is built using React.js, React Router, and React Bootstrap to create a responsive and user-friendly interface.

The application stores book data in Local Storage, so the data remains available even after refreshing the page.

This project demonstrates important React concepts such as:

- Component-based architecture

- State management using useState

- Data persistence using localStorage

- Routing using React Router

- Form handling and validation

🧩 Explanation of Modules
1️⃣ Navigation Module

File: Navigation.jsx

This module creates the top navigation bar of the application.

Features

Provides links to different pages:

Home

Add Book

View Book

Built using React Bootstrap Navbar

Uses React Router Link for navigation without page reload

Purpose

Helps users easily navigate through different sections of the application.

2️⃣ Home Module

File: Home.jsx

The Home page displays all books available in the bookstore.

Features

Displays books using Bootstrap Cards

Shows:

Book Image

Title

Description

Each book contains a View Book Details button

Clicking the button opens the detailed page of that book.

Purpose

Provides a visual overview of available books.

3️⃣ Add Book Module

File: AddBook.jsx

This module allows users to add a new book to the system.

Features

Form to enter book details:

Book ID

Title

Type

Author

Price

Publisher

Image URL

Description

Form validation:

Prevents empty fields

Prevents duplicate Book IDs

After successful submission:

Book is added to the list

User is redirected to the Home page

Purpose

Allows users to store new book information in the system.

4️⃣ View Book Module

File: ViewBook.jsx

This module displays all books in table format.

Features

Shows:

Book ID

Title

Type

Author

Publisher

Price

Book Image

Provides action buttons:

Edit

Delete

Includes advanced features:

🔍 Search books by title

🎯 Filter books by type

🔽 Sort books by price (Low → High / High → Low)

Purpose

Allows users to manage and organize books efficiently.

5️⃣ Book Detail Module

File: BookDetail.jsx

This module displays detailed information about a selected book.

Features

Shows:

Book Image

Title

Type

Author

Publisher

Price

Description

Purpose

Provides full details of a selected book for better understanding.

6️⃣ Edit Book Module

File: EditBook.jsx

This module allows users to update existing book information.

Features

Pre-filled form with current book data

User can modify book details

Updates the book after submission

Redirects to View Book page

Purpose

Allows modification of existing book records.

7️⃣ App Module

File: App.jsx

This is the main component that controls the entire application.

Responsibilities

Stores book data using useState

Handles core operations:

Add book

Delete book

Update book

Saves books to localStorage

Defines application routes using React Router

8️⃣ Main Entry File

File: main.jsx

Purpose

Renders the React application

Wraps the app with BrowserRouter

Enables routing in the entire application.

💾 Data Storage

The application uses Local Storage to store book data.

Benefits

Data remains saved after page refresh

No backend required

Easy data persistence

🛠 Technologies Used

React.js

React Router DOM

React Bootstrap

JavaScript (ES6)

HTML

CSS

Local Storage

🚀 Features

✔ Add new books
✔ View books
✔ Edit book details
✔ Delete books
✔ Search books
✔ Filter books by type
✔ Sort books by price
✔ View detailed book information
✔ Persistent data using Local Storage

#SCREENSHOTS
 BASIC 
 <img width="1905" height="913" alt="basic" src="https://github.com/user-attachments/assets/d279f6a0-d6a8-4b63-aa0d-96d19695bb25" />

 ADD BOOK
 <img width="1919" height="891" alt="add-book" src="https://github.com/user-attachments/assets/7a637d05-660c-4ac2-9549-5a8bc5866eaf" />

 DATA-ADD
 <img width="1896" height="894" alt="data-add" src="https://github.com/user-attachments/assets/03f062c3-16be-4280-8245-ef57a1601fbe" />
 
 BOOK VALIDATION
 <img width="1893" height="905" alt="book-validation" src="https://github.com/user-attachments/assets/e6ec9031-1ad9-424b-bf20-74b6fe4305a4" />

 ADDED BOOK
 <img width="1903" height="912" alt="added-book" src="https://github.com/user-attachments/assets/04508675-72d6-4972-a9d0-a8794168fee4" />

 DETAIL BOOK
 <img width="1903" height="904" alt="detail-book" src="https://github.com/user-attachments/assets/460f4b6c-c837-43dc-9088-ebd31d9c64e6" />

 SUCCESS
 <img width="1910" height="891" alt="success" src="https://github.com/user-attachments/assets/2851a9f4-fb8a-4180-a5ca-1bf017267d84" />

 SEARCH
 <img width="1919" height="907" alt="search" src="https://github.com/user-attachments/assets/93f89d55-6594-45d8-a2e7-2a5def30141a" />

 SORT BY LOW TO HIGH
 <img width="1884" height="902" alt="sort-by-lth" src="https://github.com/user-attachments/assets/ef738829-f6b4-4d6e-af1f-94dbbb9019eb" />

 SORT BY HIGH TO LOW
 <img width="1889" height="896" alt="sort-by-htl" src="https://github.com/user-attachments/assets/b93f1aa8-ddea-4ca5-8987-993544292b09" />









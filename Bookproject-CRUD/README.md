📚 Book Store Management System
📌 Project Overview

The Book Store Management System is a responsive React web application developed to manage bookstore records efficiently.
This system allows users to add, display, update, remove, search, and organize books in an interactive way.

The application is created using React.js, React Router, and React Bootstrap, ensuring a smooth user experience and mobile-friendly design.

All book information is stored in Local Storage, which means data remains safe even after refreshing the browser.

This project helps learners understand real-world React development concepts such as:

Reusable Components

State Handling using React Hooks

Client-side Routing

Form Validation

Persistent Data Storage

🧩 Application Modules Explanation
1️⃣ Navigation Component

File: Navigation.jsx

This component builds the top menu bar of the application.

🔹 Features

Navigation links to main pages:

Home

Add Book

View Book

Implemented using React Bootstrap Navbar

Uses React Router for seamless page transitions

🎯 Purpose

To provide users with quick and easy navigation across different sections.

2️⃣ Home Page

File: Home.jsx

This page shows a collection of available books.

🔹 Features

Displays books in attractive Bootstrap Cards

Shows important information like:

Book Cover Image

Book Title

Short Description

Includes a View Details button for each book

🎯 Purpose

To give users a visual preview of books present in the store.

3️⃣ Add Book Page

File: AddBook.jsx

Used to insert new book records into the system.

🔹 Features

Form inputs include:

Book ID

Title

Category

Author

Price

Publisher

Image URL

Description

Validations applied:

Required field checking

Duplicate Book ID prevention

After submission:

Book gets saved

User redirects to Home

🎯 Purpose

To allow entry of new book data easily.

4️⃣ View Book Page

File: ViewBook.jsx

Displays all stored books in a structured table format.

🔹 Features

Shows detailed columns:

Book ID

Title

Category

Author

Publisher

Price

Book Image

Action buttons:

Edit

Delete

⭐ Extra Functionalities

🔍 Search by Book Title

🎯 Filter by Book Category

🔽 Sort by Price (Ascending / Descending)

🎯 Purpose

To manage book records effectively.

5️⃣ Book Detail Page

File: BookDetail.jsx

Shows complete information of a selected book.

🔹 Displays

Large Book Image

Title

Category

Author

Publisher

Price

Full Description

🎯 Purpose

To help users understand complete book information before taking action.

6️⃣ Edit Book Page

File: EditBook.jsx

Allows modification of previously saved book details.

🔹 Features

Form auto-fills existing data

User can update required fields

After updating:

Data gets saved

Redirects to View Book page

🎯 Purpose

To maintain accurate and updated records.

7️⃣ Main Application Component

File: App.jsx

Acts as the central controller of the entire project.

🔹 Responsibilities

Maintains book list using useState

Performs core CRUD operations:

Add Book

Delete Book

Update Book

Saves data to Local Storage

Manages routing configuration

8️⃣ Entry Point File

File: main.jsx

🎯 Purpose

Renders React App into DOM

Wraps App inside BrowserRouter

Enables routing across pages

💾 Data Persistence

The system uses Local Storage API to store all book records.

✅ Advantages

Data remains after browser refresh

No backend server required

Fast and lightweight storage

🛠 Tech Stack

React.js

React Router DOM

React Bootstrap

JavaScript ES6

HTML5

CSS3

Local Storage API

🚀 Key Features

✅ Add Books
✅ Display Book List
✅ Edit Book Details
✅ Delete Books
✅ Search Books
✅ Filter Books by Category
✅ Sort Books by Price
✅ View Complete Book Details
✅ Persistent Storage without Backend










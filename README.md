# Wizard Tax Preparer Backend

This is the backend server for the Wizard Tax Preparer application, built to securely handle form submissions, file uploads, and administrative tasks. The backend is implemented using **Node.js**, **Express**, and connected to **AWS S3** for file storage.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Endpoints](#endpoints)
- [Security Features](#security-features)
- [License](#license)

---

## Features

- Multi-step form handling.
- Secure file upload to **AWS S3**.
- Admin dashboard for managing users and submissions.
- Role-based access control (Admin-only routes).
- HTTPS enforcement and strict security policies.

---

## Technologies Used

- **Node.js**: Backend runtime environment.
- **Express.js**: Web framework for creating RESTful APIs.
- **Multer**: Middleware for handling file uploads.
- **AWS SDK**: To integrate with AWS S3 for file storage.
- **JSON Web Tokens (JWT)**: Authentication and authorization.
- **dotenv**: Environment variable management.

---

## Installation

### Prerequisites

1. Node.js >= 16.x
2. npm or yarn package manager
3. AWS S3 bucket configured for file storage
4. MongoDB or any database for storing user data (optional)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/wizard-tax-preparer-backend.git
   cd wizard-tax-preparer-backend
2. Install dependencies:
   npm install
3. Set up environment variables (see [Environment Variables](https://chatgpt.com/c/6781e988-6a78-800f-ac14-bbaf424a094e#environment-variables)).
4. Start the server:
    npm start 

Endpoints
Auth Routes
Method	Endpoint	Description	Access
POST	/api/auth/login	Login as an admin user	Public
POST	/api/auth/logout	Logout current session	Admin-only
Form Routes
Method	Endpoint	Description	Access
POST	/api/forms	Submit a multi-step form	Public
GET	/api/forms	Retrieve all form submissions	Admin-only
DELETE	/api/forms/:id	Delete a form submission	Admin-only
File Upload Route
Method	Endpoint	Description	Access
POST	/api/upload	Upload a file to AWS S3	Public

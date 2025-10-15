# Full-Stack Gift & E-Commerce Application (MERN Stack)

A modern MERN (MongoDB, Express, React, Node.js) web application for managing and discovering gifts.  
This project demonstrates secure authentication, RESTful API design, scalable backend structure, and a React-based frontend using React Router and Bootstrap.

---

## 🚀 Overview

- User registration, login, and profile management with JWT-based authentication.
- Browse, search, and view gift details.
- Modular React frontend with Bootstrap styling.
- Production-ready logging, validation, and API organization.

---

## 🧩 Tech Stack

| Layer      | Technology                             |
| ---------- | -------------------------------------- |
| Frontend   | React 18, React Router, Bootstrap, CSS |
| Backend    | Node.js, Express.js, MongoDB           |
| Auth       | JWT, bcryptjs                          |
| Logging    | Pino                                   |
| Database   | MongoDB (Atlas/local)                  |
| Config     | dotenv                                 |
| Validation | express-validator                      |

---

## ✨ Key Features

### 🔐 Authentication

- Register, login, and update profile routes.
- JWT authentication for secure communication.
- Password hashing via bcrypt.
- Duplicate email prevention and validation.

### 🧾 Gift Management

- `/api/gifts` endpoints for CRUD operations.
- Designed for future expansion (categories, search, details).

### 🔍 Search Functionality

- `/api/search` route (placeholder, ready for integration).

### 🗄️ MongoDB Integration

- Centralized connection via `db.js` with caching.
- Connection pooling for performance.

### 🧠 Logging & Error Handling

- Structured logs via Pino and pino-http.
- Global Express error handler.

### 🧰 Frontend Features

- Modular React components (Navbar, Login, Register, Profile, Search, Details, Home).
- Routing via React Router v6.
- Responsive Bootstrap UI.
- Conditional Navbar rendering.

---

## 🗂️ Project Structure

```
fullstack-capstone-project/
├── backend/
│   ├── server.js                # Express app entrypoint
│   ├── models/
│   │   └── db.js                # MongoDB connection
│   ├── routes/
│   │   ├── authRoutes.js        # Auth APIs
│   │   ├── giftRoutes.js        # Gift endpoints
│   │   └── searchRoutes.js      # Search endpoints
│   ├── logger.js                # Pino logger
│   ├── .env                     # Environment variables
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── App.js               # React Router setup
│   │   ├── components/
│   │   │   ├── Navbar/
│   │   │   ├── LoginPage/
│   │   │   ├── RegisterPage/
│   │   │   ├── Profile/
│   │   │   ├── DetailsPage/
│   │   │   ├── SearchPage/
│   │   │   └── HomePage/
│   │   ├── index.js
│   │   └── App.css
│   ├── public/
│   │   └── index.html
│   └── package.json
└── README.md
```

---

## 🔌 API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint  | Description                   |
| ------ | --------- | ----------------------------- |
| POST   | /register | Create new user account       |
| POST   | /login    | Authenticate user, return JWT |
| PUT    | /update   | Update profile (requires JWT) |

- Passwords hashed with bcryptjs.
- JWT for secure token creation.

---

## ⚙️ Environment Variables (`.env`)

```
PORT=3060
MONGO_URL=mongodb+srv://<username>:<password>@cluster.mongodb.net/giftdb
JWT_SECRET=your_jwt_secret
```

---

## ⚡ Backend Setup

```bash
npm install
node server.js
# Server runs on http://localhost:3060
```

- Express JSON middleware for parsing.
- CORS enabled.
- Routes: `/api/auth`, `/api/gifts`, `/api/search`.
- MongoDB connection via `connectToDatabase()`.

---

## 💻 Frontend Setup

```bash
cd client
npm install
npm start
```

- React Router for navigation.
- Responsive Bootstrap layout.
- Conditional Navbar via `useLocation()`.

### Pages

- `/` — Home
- `/app` — Main listing
- `/app/login` — Login
- `/app/register` — Register
- `/app/profile` — Profile
- `/app/search` — Search gifts
- `/app/product/:productId` — Product details

---

## 🧠 Authentication Flow

1. **Register:** POST email + password to `/api/auth/register`.
2. **JWT Generation:** Server returns token with user ID.
3. **Login:** User receives JWT for requests.
4. **Update:** Authenticated users can modify profile; JWT refreshed.

#### Example Register Request

```http
POST /api/auth/register
{
    "firstName": "John",
    "lastName": "Doe",
    "email": "john@example.com",
    "password": "password123"
}
```

**Response:**

```json
{
  "authtoken": "<jwt_token>",
  "email": "john@example.com"
}
```

---

## 🔒 Security Practices

- Hashing with bcrypt (salt rounds: 10)
- JWT signed with secret key
- Input validation via express-validator
- No plain-text password storage
- Consistent error handling

---

## 🪪 License

Open-sourced under the MIT License.  
Fork and modify for educational or commercial use.

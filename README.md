
# 🎨 Portfolio API - Node.js, Express & MongoDB

Welcome to **Day 10** of my **10 Days of Node.js/Express/MongoDB** challenge!  
This project is a **Portfolio API** that allows an admin to manage portfolio projects. Admin can add, update, delete, and view portfolio projects, while users can view public portfolio details.

---

## 🚀 Features

- 🎨 Admin login and JWT-based authentication
- 🖼️ Add, update, and delete portfolio projects
- 🌐 Public API to view portfolio projects
- 🔑 Admin-only routes protected with JWT authentication
- 🛠️ Clean and modular Express setup

---

## 🧠 Technologies Used

- Node.js
- Express.js
- MongoDB + Mongoose
- JSON Web Token (JWT)
- dotenv

---

## 📁 Folder Structure

```
portfolio-api/
├── models/
│   └── Portfolio.js
├── routes/
│   ├── portfolioRoutes.js
│   └── authRoutes.js
├── middleware/
│   └── verifyToken.js
├── controllers/
│   ├── portfolioController.js
│   └── authController.js
├── server.js
├── .env
├── package.json
└── README.md
```

---

## 📦 Installation & Setup

1. **Clone the repo**
```bash
git clone https://github.com/Y0GESHSHINDE/portfolio-api.git
cd portfolio-api
```

2. **Install dependencies**
```bash
npm install
```

3. **Create a `.env` file**
```
MONGO_URI=mongodb://127.0.0.1:27017/portfolioDB
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

4. **Start the server**
```bash
npm run dev
```

App runs at:  
👉 `http://localhost:5000`

---

## 📬 API Endpoints

### 📩 Admin Login

| Method | Endpoint      | Description              |
|--------|---------------|--------------------------|
| POST   | `/api/auth/login`    | Admin login to get JWT token |

**Request Body:**
```json
{
  "username": "admin",
  "password": "adminpassword"
}
```

**Response:**
```json
{
  "token": "your_jwt_token_here"
}
```

---

### 🖼️ Get All Portfolio Projects (Public)

| Method | Endpoint         | Description              |
|--------|------------------|--------------------------|
| GET    | `/api/portfolio` | Get all portfolio projects (public) |

**Response:**
```json
[
  {
    "_id": "project_id",
    "title": "Project Title",
    "description": "Project description",
    "tags": ["JavaScript", "Node.js"],
    "githubLink": "https://github.com/project",
    "liveLink": "https://project.live",
    "__v": 0
  }
]
```

---

### 🖼️ Get Portfolio Project by ID (Public)

| Method | Endpoint             | Description               |
|--------|----------------------|---------------------------|
| GET    | `/api/portfolio/:id` | Get a specific portfolio project |

**URL Parameter**:
- `id`: The unique ID of the portfolio project.

**Response:**
```json
{
  "_id": "project_id",
  "title": "Project Title",
  "description": "Project description",
  "tags": ["JavaScript", "Node.js"],
  "githubLink": "https://github.com/project",
  "liveLink": "https://project.live",
  "__v": 0
}
```

---

### 🔐 Create Portfolio Project (Admin only)

| Method | Endpoint            | Description               |
|--------|---------------------|---------------------------|
| POST   | `/api/portfolio`    | Add a new portfolio project (Admin only) |

**Headers:**
```
Authorization: Bearer <admin_jwt_token>
```

**Request Body:**
```json
{
  "title": "New Project",
  "description": "Detailed project description",
  "tags": ["Node.js", "Express", "MongoDB"],
  "githubLink": "https://github.com/new-project",
  "liveLink": "https://new-project.live"
}
```

**Response:**
```json
{
  "_id": "new_project_id",
  "title": "New Project",
  "description": "Detailed project description",
  "tags": ["Node.js", "Express", "MongoDB"],
  "githubLink": "https://github.com/new-project",
  "liveLink": "https://new-project.live",
  "__v": 0
}
```

---

### 🔐 Update Portfolio Project (Admin only)

| Method | Endpoint               | Description               |
|--------|------------------------|---------------------------|
| PUT    | `/api/portfolio/:id`   | Update an existing project (Admin only) |

**Headers:**
```
Authorization: Bearer <admin_jwt_token>
```

**URL Parameter**:
- `id`: The unique ID of the portfolio project.

**Request Body:**
```json
{
  "title": "Updated Project Title",
  "description": "Updated description",
  "tags": ["Node.js", "MongoDB"],
  "githubLink": "https://github.com/updated-project",
  "liveLink": "https://updated-project.live"
}
```

**Response:**
```json
{
  "_id": "project_id",
  "title": "Updated Project Title",
  "description": "Updated description",
  "tags": ["Node.js", "MongoDB"],
  "githubLink": "https://github.com/updated-project",
  "liveLink": "https://updated-project.live",
  "__v": 0
}
```

---

### 🔐 Delete Portfolio Project (Admin only)

| Method | Endpoint               | Description               |
|--------|------------------------|---------------------------|
| DELETE | `/api/portfolio/:id`   | Delete a portfolio project (Admin only) |

**Headers:**
```
Authorization: Bearer <admin_jwt_token>
```

**Response:**
```json
{
  "message": "Project deleted successfully"
}
```

---

## 🧠 Learning Goals

- Secure admin routes using JWT
- Design and implement CRUD operations for managing portfolio projects
- Organize routes, controllers, and models effectively
- Work with MongoDB for storing portfolio project data

---

## 🧪 Test with Postman

1. `POST /api/auth/login` to get an admin JWT token
2. Use the token in the `Authorization` header to test the admin-only routes (`POST /api/portfolio`, `PUT /api/portfolio/:id`, `DELETE /api/portfolio/:id`)
3. `GET /api/portfolio` to view portfolio projects (public route)
4. `GET /api/portfolio/:id` to view a specific project

---

## 👨‍💻 Author

**Yogesh Shinde**  
📧 yogeshshinde3624@gmail.com  
🔗 [LinkedIn](https://linkedin.com/in/y0geshshinde)  
🐙 [GitHub](https://github.com/y0geshshinde)

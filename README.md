# 🏡 WanderNest

> WanderNest is a full-stack web application that helps users discover and book rural homestays. The platform provides a seamless experience for browsing accommodations, viewing details, and managing homestay information through a RESTful API.

---

# 🚀 Tech Stack

### Frontend
- React.js
- HTML
- CSS
- JavaScript

### Backend
- Node.js
- Express.js

### Database
- PostgreSQL
- Prisma ORM

### Development Tools
- Git
- GitHub
- Postman

---

# 📂 Project Structure

```
WanderNest/
│
├── frontend/
├── backend/
│   ├── controllers/
│   ├── routes/
│   ├── prisma/
│   │    └── schema.prisma
│   ├── package.json
│   └── .env.example
│
└── README.md
```

---

# 📦 Database

This project uses **PostgreSQL** with **Prisma ORM**.

### Why PostgreSQL?

- Reliable relational database
- Supports ACID transactions
- Well suited for booking systems
- Easy integration with Prisma ORM
- Scalable and production-ready

---

# 🗄️ Database Schema

The application currently contains the following entity:

### Homestay

| Field | Type |
|--------|------|
| id | Integer |
| title | String |
| location | String |
| price | Float |
| description | String |
| image | String |
| createdAt | DateTime |

> **Schema Diagram**

![Schema Diagram](images/schema.png)

---

# ⚙️ Environment Variables

Create a `.env` file inside the backend folder.

Example:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/wandernest"

PORT=5000
```

---

# 🔧 Setup the Database

### 1. Clone the repository

```bash
git clone <repository-url>
```

### 2. Install dependencies

```bash
cd backend
npm install
```

### 3. Generate Prisma Client

```bash
npx prisma generate
```

### 4. Run Database Migration

```bash
npx prisma migrate dev
```

### 5. Start Backend Server

```bash
npm run dev
```

Backend runs at

```
http://localhost:5000
```

---

# 📡 REST API Endpoints

### Get all homestays

```
GET /api/homestays
```

### Get homestay by ID

```
GET /api/homestays/:id
```

### Create a homestay

```
POST /api/homestays
```

### Update a homestay

```
PUT /api/homestays/:id
```

### Delete a homestay

```
DELETE /api/homestays/:id
```

### Search homestays

```
GET /api/homestays/search?location=Kasol
```

---

# ✅ Features

### Authentication
- JWT-based user authentication
- Google OAuth login
- Protected dashboard routes

### Homestays
- Create, Read, Update and Delete (CRUD)
- Search homestays by location
- Real-time updates using REST APIs

### AI Travel Planner
- AI-generated travel itineraries using Google Gemini
- Custom trip generation based on destination, budget, duration, interests and travel style

### Dashboard
- Authenticated user dashboard
- Dynamic homestay statistics
- Loading, error and empty states

### Backend
- RESTful API with Express.js
- PostgreSQL database with Prisma ORM
- Modular architecture with controllers, routes and services

---

# 📸 Screenshots

Frontend and CRUD screenshots are included in the Week 5 submission.

---

# 👩‍💻 Author

**Drishti Malhotra**

Summer Internship Program 2026

WanderNest Project

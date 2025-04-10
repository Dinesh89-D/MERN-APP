🔐 MERN Authentication App
A full-stack MERN (MongoDB, Express, React, Node.js) authentication application with JWT-based login/register functionality, protected routes, role-based access, and secure password handling.

🚀 Features
User registration & login with JWT

Protected routes (frontend & backend)

Role-based access control (Admin/User)

Password hashing using bcrypt

Persistent login with tokens stored in HTTP-only cookies

Fully RESTful API

Responsive React UI with context-based state management

Logout and auto-token refresh (optional enhancement)

🛠️ Tech Stack
Frontend:

React

React Router

Axios

Context API or Redux (optional)

Backend:

Node.js

Express

MongoDB

Mongoose

JWT

bcrypt

📸 Demo
Add screenshots or a Loom video link/gif here
(e.g., "Click below to see the app in action")

🧰 Installation
📦 Clone the repo
bash
Copy
git clone https://github.com/your-username/mern-auth-app.git
cd mern-auth-app
⚙️ Backend Setup
bash
Copy
cd backend
npm install
Create a .env file in the backend/ directory and add:

env
Copy
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Then start the server:

bash
Copy
npm run dev
🖼️ Frontend Setup
bash
Copy
cd frontend
npm install
npm start
Make sure the backend server is running on port 5000 (or change proxy in package.json).

📁 Folder Structure
css
Copy
mern-auth-app/
│
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── App.js
│
└── README.md
🔒 API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login existing user
GET	/api/user/profile	Get user profile (auth)
GET	/api/admin/data	Admin-only route
✅ To-Do
 JWT auth

 Route protection

 Email verification

 Password reset

 Dark mode 🌙

📄 License
This project is licensed under the MIT License.

🙌 Acknowledgements
MongoDB

React

Express

JWT.io

bcrypt

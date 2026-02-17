# 🧩 Task & Comment System

A small full-stack software product that allows users to manage tasks and add comments to each task.  
Built as part of an engineering assessment focusing on structure, correctness, and maintainability rather than feature count.

---

# 🚀 Tech Stack

## Backend
- Python
- Flask (REST API)
- SQLAlchemy (ORM)
- SQLite (Relational Database)

## Frontend
- React
- Axios (API calls)
- External CSS for styling

---

# ✨ Features

## Tasks
- Create task
- View all tasks
- Update title & status
- Delete task

## Comments
- Add comment to task
- View task comments
- Update comment
- Delete comment

## System Quality
- Input validation
- Error handling
- RESTful API design
- Relational integrity (comments linked to tasks)

---

# 📁 Project Structure

task-comment-system/

backend/
- app.py
- requirements.txt
- app.db

frontend/
- src/
  - components/
  - api.js
  - App.js
- public/
- package.json

README.md

---

# ⚙️ Setup Instructions

## 🔹 1. Clone Repository

git clone <repo-url>  
cd task-comment-system  

---

## 🔹 2. Backend Setup

cd backend  

python -m venv venv  
venv\Scripts\activate  

pip install -r requirements.txt  
python app.py  

Backend runs on → http://127.0.0.1:5000

---

## 🔹 3. Frontend Setup

cd frontend  
npm install  
npm start  

Frontend runs on → http://localhost:3000

---

# 🔌 API Endpoints

## Tasks

### Create Task
POST /tasks

{
  "title": "My Task"
}

### Get Tasks
GET /tasks

### Update Task
PUT /tasks/{id}

{
  "title": "Updated Task",
  "status": "completed"
}

### Delete Task
DELETE /tasks/{id}

---

## Comments

### Add Comment
POST /tasks/{task_id}/comments

{
  "content": "This is a comment"
}

### Get Comments
GET /tasks/{task_id}/comments

### Update Comment
PUT /comments/{id}

### Delete Comment
DELETE /comments/{id}

---

# 🧠 Key Technical Decisions

1. Flask + SQLAlchemy chosen for simplicity and clarity  
2. SQLite used as lightweight relational database  
3. Clear separation between frontend and backend  
4. Validation implemented at API level  

---

# 🛡️ System Correctness & Safety

- Prevents comments on non-existent tasks  
- Guards invalid status updates  
- Uses relational constraints  
- Returns clear HTTP error responses  

---

# 🔍 Observability

- Flask debug logs for errors  
- Clear JSON error messages  
- Deterministic API responses  

---

# 🧪 Testing Approach

Manual API testing using Postman and browser network tools.

Future improvements:
- Pytest for backend  
- React Testing Library for frontend  

---

# 📈 Possible Extensions

- Authentication & user ownership  
- Pagination  
- Task priorities  
- Search & filters  
- Real-time updates  
- Docker deployment  

---

# ⚠️ Known Limitations

- No authentication  
- SQLite not suitable for high scale  
- No automated tests  

---

# 🎥 Walkthrough Summary

The system demonstrates:
- Clean architecture  
- Safe interfaces  
- Predictable data flow  
- Easy extensibility  

---

# 👤 Author

Deepak Mundhra

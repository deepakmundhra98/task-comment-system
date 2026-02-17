**Task & Comment Management System**

**Overview**

This project is a simple backend system that manages tasks and their associated comments.
It demonstrates RESTful API design, relational data modeling, validation, and predictable system behavior.

The focus of the project is correctness, simplicity, and maintainability, not feature count.

**Tech Stack**

- Python (Flask)
- SQLAlchemy ORM
- SQLite database
- REST API
- Data Model

Task

- id (Primary Key)
- title (Required)
- status (pending / completed)

Comment
- id (Primary Key)
- content (Required, max 500 chars)
- task_id (Foreign Key → Task)

Relationship:
One Task → Many Comments

**API Endpoints**
*Tasks*

- POST /tasks → Create task
- GET /tasks → List tasks
- PUT /tasks/{id} → Update task
- DELETE /tasks/{id} → Delete task

*Comments*

- POST /tasks/{id}/comments → Add comment
- GET /tasks/{id}/comments → List comments
- PUT /comments/{id} → Update comment
- DELETE /comments/{id} → Delete comment


**Validation Rules**

- Task title is required
- Status must be pending or completed
- Comment content is required
- Comment length ≤ 500 characters
- Cannot create comment for non-existing task

These rules ensure the system never enters an invalid state.


**Key Design Decisions**

- Simple Domain Model
Only two entities to keep logic easy to reason about.

- Validation at API Layer
Prevents bad data early and keeps DB consistent.

- Consistent Responses
Predictable API behavior improves reliability.

- Logging for Observability
Important actions are logged for easier debugging.


**Tradeoffs**

- Single file architecture for simplicity
- SQLite instead of Postgres
- No authentication
- No migrations
- These choices prioritize clarity and speed of implementation.


**Future Improvements**

- Modular structure with Blueprints
- Database migrations (Alembic)
- Authentication & authorization
- Pagination & filtering
- Automated tests
- Docker setup

**How to Run**

pip install flask flask_sqlalchemy
python app.py


Server runs at:
http://127.0.0.1:5000
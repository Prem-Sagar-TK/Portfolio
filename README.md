# 🚀 Prem Sagar T.K — Portfolio

A full-stack personal portfolio website showcasing projects, skills, leadership roles, and a working contact form. Built with a React + Vite frontend and a FastAPI + MongoDB backend.

---

## 📸 Overview

This portfolio highlights:
- **About** — Background, interests, and a brief introduction
- **Skills** — Programming languages, frameworks, AI/ML tools, and soft skills
- **Projects** — Featured work including JnanaSetu, LZW Compression, Ship Routing, and LIME Research
- **Leadership** — Roles across student organizations and events
- **Contact** — A live contact form that stores messages in MongoDB

---

## 🗂️ Project Structure

```
Portfolio/
├── frontend/          # React + Vite application
│   ├── src/
│   │   ├── component/ # UI components (Hero, Skills, Projects, Contact, etc.)
│   │   ├── lib/       # Shared data (data.js)
│   │   └── ...
│   ├── index.html
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
│
└── backend/           # Python FastAPI application
    ├── server.py      # API routes and MongoDB logic
    ├── requirements.txt
    └── .env           # Environment variables (not committed)
```

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Vite 6 | Build tool & dev server |
| Tailwind CSS 3 | Utility-first styling |
| Framer Motion | Animations |
| Lucide React | Icon library |
| React Router DOM | Client-side routing |
| Axios | HTTP client |
| Sonner | Toast notifications |

### Backend
| Technology | Purpose |
|---|---|
| FastAPI | REST API framework |
| MongoDB (Motor) | Async database driver |
| Pydantic v2 | Data validation |
| Python-dotenv | Environment config |
| Uvicorn | ASGI server |
| Starlette | CORS middleware |

---

## ⚙️ Getting Started

### Prerequisites
- Node.js ≥ 18
- Python ≥ 3.10
- MongoDB instance (local or Atlas)

---

### 🖥️ Frontend Setup

```bash
cd frontend
npm install        # or: yarn install
npm run dev        # starts dev server at http://localhost:5173
```

**Build for production:**
```bash
npm run build
npm run preview    # preview the production build locally
```

---

### 🐍 Backend Setup

```bash
cd backend

# Create and activate a virtual environment
python -m venv venv
venv\Scripts\activate       # Windows
# source venv/bin/activate  # macOS / Linux

# Install dependencies
pip install -r requirements.txt

# Start the server
uvicorn server:app --reload --port 8000
```

The API will be available at `http://localhost:8000`.

---

### 🔐 Environment Variables

Create a `.env` file inside the `backend/` directory:

```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=portfolio
CORS_ORIGINS=http://localhost:5173
```

> **Note:** Don't commit the `.env` file. It is listed in `.gitignore`.

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/` | Health check |
| `POST` | `/api/contact` | Submit a contact message |
| `GET` | `/api/contact` | List all contact messages |
| `POST` | `/api/status` | Create a status check entry |
| `GET` | `/api/status` | Retrieve all status checks |

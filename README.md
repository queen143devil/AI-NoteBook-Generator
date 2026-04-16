# AI NoteBook Generator 📚✨

> **Transform your ideas into professional eBooks in minutes with AI-powered assistance.**

AI NoteBook Generator is a full-stack MERN application that revolutionizes the eBook creation process. With intelligent AI assistance, beautiful design tools, and seamless export options, bringing your stories to life has never been easier.

---

## 🌟 Features

### ✍️ Smart Writing Experience

- **AI-Powered Content Generation**: Generate book outlines and chapter content using Google's Gemini AI
- **Rich Text Editor**: Markdown-based editor with real-time preview and syntax highlighting
- **Drag & Drop Organization**: Reorder chapters effortlessly with intuitive drag-and-drop interface

### 🎨 Professional Design

- **Custom Cover Images**: Upload and manage beautiful book covers (JPEG, PNG, GIF, WebP)
- **Chapter Management**: Organize chapters with titles, descriptions, and rich content
- **Responsive Interface**: Beautiful UI that works seamlessly across all devices

### 📤 Flexible Export Options

- **PDF Export**: Download your eBook as a professionally formatted PDF
- **DOCX Export**: Export to Microsoft Word format for further editing
- **Instant Downloads**: One-click export with proper formatting and styling

### 🔐 Secure & Personal

- **User Authentication**: JWT-based secure authentication system
- **Personal Library**: Manage multiple books in your private dashboard
- **Profile Management**: Customize your author profile and preferences

### 🚀 Performance Optimized

- **Fast Loading**: Optimized build with Vite and modern React
- **Efficient API**: RESTful API with proper error handling and validation
- **Scalable Architecture**: MongoDB for reliable data persistence

---

## 🛠️ Tech Stack

### Frontend

- **React 19.2** - Latest React with concurrent features
- **React Router 7.9** - Client-side routing
- **Tailwind CSS 4.1** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **React Markdown Editor** - Rich markdown editing experience
- **DnD Kit** - Smooth drag-and-drop interactions
- **React Hot Toast** - Elegant notifications
- **Axios** - HTTP client with interceptors

### Backend

- **Node.js & Express** - Server runtime and framework
- **MongoDB & Mongoose** - NoSQL database with ODM
- **JWT Authentication** - Secure token-based auth
- **Multer** - File upload handling
- **BCrypt** - Password hashing
- **Google Gemini AI** - AI content generation
- **Docx & PDFKit** - Document generation libraries

### DevOps & Tools

- **pnpm** - Fast, disk space efficient package manager
- **Render** - Cloud hosting platform
- **Git & GitHub** - Version control

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- pnpm (v9 or higher)
- Google Gemini API key

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/queen143devil/AI-NoteBook-Generator.git
cd imprintly-ai-e-book-creator-mern
```

2. **Install dependencies**

```bash
# Install backend dependencies
cd backend
pnpm install

# Install frontend dependencies
cd ../frontend
pnpm install
```

3. **Set up environment variables**

Backend (.env in `/backend`):

```env
NODE_ENV=development
PORT=3000
DB_URI=your_mongodb_connection_string
JWT_SECRET_KEY=your_super_secret_jwt_key
GEMINI_API_KEY=your_gemini_api_key
CLIENT_URL=http://localhost:5173
```

Frontend (.env in `/frontend`):

```env
VITE_API_BASE_URL=http://localhost:3000
```

4. **Run the application**

```bash
# Terminal 1 - Run backend
cd backend
pnpm run dev

# Terminal 2 - Run frontend
cd frontend
pnpm run dev
```

5. **Open your browser**
   Navigate to `http://localhost:5173`

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📝 License

This project is licensed under the Apache License 2.0.

---

## 👨‍💻 Author

**K. Kumar**

---

**AI NoteBook Generator created by K.Kumar**

⭐ Star this repo if you found it helpful!

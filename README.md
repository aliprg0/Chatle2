# Chatle

A modern, full-stack real-time chat application built with React, Vite, Express, MongoDB, and Socket.IO. Chatle enables users to sign up, log in, and exchange instant messages with other users in a sleek, responsive interface.

---

## Screenshots

![homepage2](https://github.com/user-attachments/assets/df32dd74-d821-40ea-97f9-17247b579d0d)
![homepage](https://github.com/user-attachments/assets/4277e1d4-76e1-4bc8-b887-7c4e585dffea)
![chat-app](https://github.com/user-attachments/assets/f348b950-9f0b-43c2-a257-ec4e903cd2c2)

---

## Features

- **User Authentication**: Secure sign up, login, and logout with JWT-based authentication and password hashing.
- **Real-Time Messaging**: Instant message delivery using Socket.IO for seamless real-time communication.
- **Online Status**: See which users are online in the sidebar.
- **Responsive UI**: Beautiful, modern interface built with React, Tailwind CSS, and DaisyUI.
- **Protected Routes**: Backend API endpoints are protected and require authentication.
- **Conversation List**: Sidebar displays all available users to chat with.
- **Message History**: View previous messages in each conversation.
- **Gender Selection & Avatars**: Users select gender during signup and receive a unique avatar.
- **Notifications**: Audio notification for new messages.
- **Persistent Sessions**: User sessions are persisted with cookies and local storage.

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, DaisyUI, Zustand, React Router, Socket.IO Client
- **Backend**: Node.js, Express, MongoDB, Mongoose, Socket.IO, JWT, bcryptjs
- **Dev Tools**: ESLint, Nodemon

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- MongoDB instance (local or cloud)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/chatle.git
   cd chatle2
   ```

2. **Install backend dependencies:**

   ```sh
   npm install
   ```

3. **Install frontend dependencies:**

   ```sh
   cd frontend
   npm install
   cd ..
   ```

4. **Set up environment variables:**
   - Create a `.env` file in the root with:
     ```env
     PORT=5000
     MONGO_DB_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     NODE_ENV=development
     ```

### Running the App

- **Start the backend server:**

  ```sh
  npm run server
  ```

- **Start the frontend:**

  ```sh
  cd frontend
  npm run dev
  ```

- Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

- `backend/` — Express API, authentication, messaging, MongoDB models, Socket.IO server
- `frontend/` — React app, UI components, hooks, Zustand store, context providers

## License

This project is licensed under the ISC License.

---

**Description for GitHub:**

> Chatle is a full-stack real-time chat app built with React, Vite, Express, MongoDB, and Socket.IO. Features include authentication, real-time messaging, online status, notifications, and a modern responsive UI.

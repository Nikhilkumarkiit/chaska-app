# CHASKA - The Ultimate Bomboloni Experience

Welcome to the codebase for CHASKA, a premium MERN stack e-commerce site for ordering delicious chocolate Bomboloni.

## Features
- **Order Page**: A sleek, Gen-Z inspired UI for placing orders.
- **Admin Panel**: Secure view for the owner to manage incoming orders.
- **Deploy Ready**: Configured for deployment on Render (Backend) and Vercel (Frontend).

## Tech Stack
- **Frontend**: React, Vite
- **Backend**: Node.js, Express, MongoDB
- **Styling**: Vanilla CSS with a Neo-Brutalist twist

## Getting Started

### Prerequisites
- Node.js installed
- MongoDB connection string

### Installation
1.  Clone the repo.
2.  Install dependencies:
    ```bash
    cd server && npm install
    cd ../client && npm install
    ```
3.  Set up environment variables:
    - `server/.env`: `MONGODB_URI=...`
    - `client/.env`: `VITE_API_URL=http://localhost:5000`

### Running Locally
1.  Start backend:
    ```bash
    cd server
    npm run dev
    ```
2.  Start frontend:
    ```bash
    cd client
    npm run dev
    ```

## deployment
See [DEPLOY.md](DEPLOY.md) for full deployment instructions.

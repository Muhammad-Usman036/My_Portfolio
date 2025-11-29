# 🚀 How to Run the MERN Stack Portfolio Project

## Prerequisites Checklist

Before running, make sure you have:
- ✅ **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- ✅ **MongoDB** installed locally OR MongoDB Atlas account
- ✅ **npm** or **yarn** package manager

---

## Step-by-Step Instructions

### Step 1: Install Frontend Dependencies

Open terminal in the project root directory:

```bash
npm install
```

This installs all React, TypeScript, and frontend dependencies.

---

### Step 2: Install Backend Dependencies

```bash
cd server
npm install
cd ..
```

This installs Express, MongoDB, and all backend dependencies.

---

### Step 3: Set Up MongoDB

**Option A: Local MongoDB (Recommended for Development)**

1. Make sure MongoDB is installed and running
2. MongoDB should be accessible at `mongodb://localhost:27017`

**Option B: MongoDB Atlas (Cloud - Free)**

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster (free tier)
4. Get your connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/portfolio`)

---

### Step 4: Create Environment File

Create a file named `.env` in the `server` folder:

**For Local MongoDB:**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
```

**For MongoDB Atlas:**
```env
PORT=5000
MONGODB_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
NODE_ENV=development
```

**Optional:** Create `.env` in root folder for custom API URL:
```env
VITE_API_URL=http://localhost:5000/api
```

---

### Step 5: Start MongoDB (If Using Local)

**Windows:**
```bash
# MongoDB should start automatically as a service
# Or run: net start MongoDB
```

**Mac/Linux:**
```bash
# Start MongoDB service
sudo systemctl start mongod
# OR
brew services start mongodb-community
```

---

### Step 6: Run the Backend Server

Open **Terminal 1** and run:

```bash
cd server
npm run dev
```

You should see:
```
Server running on port 5000
MongoDB Connected: localhost:27017
```

✅ **Backend is now running at:** `http://localhost:5000`

---

### Step 7: Run the Frontend

Open **Terminal 2** (keep Terminal 1 running) and run:

```bash
npm run dev
```

You should see:
```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:8080/
```

✅ **Frontend is now running at:** `http://localhost:8080`

---

### Step 8: Open in Browser

Open your browser and go to:
```
http://localhost:8080
```

🎉 **Your portfolio is now running!**

---

## Quick Command Reference

### Start Everything (Two Terminals Required)

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

### Build for Production

**Frontend:**
```bash
npm run build
```

**Backend:**
```bash
cd server
npm start
```

---

## Verify Everything is Working

1. **Backend Health Check:**
   - Open: http://localhost:5000/api/health
   - Should show: `{"success":true,"message":"Server is running"}`

2. **Frontend:**
   - Open: http://localhost:8080
   - Should see your portfolio homepage

3. **Test Contact Form:**
   - Scroll to Contact section
   - Fill out and submit the form
   - Check backend terminal for "Contact submission" message
   - Check MongoDB database for saved contact

---

## Troubleshooting

### ❌ "Cannot connect to MongoDB"

**Solution:**
- Make sure MongoDB is running: `mongod --version`
- Check your `MONGODB_URI` in `server/.env`
- For Atlas: Whitelist your IP address in MongoDB Atlas dashboard

### ❌ "Port 5000 already in use"

**Solution:**
- Change port in `server/.env`: `PORT=5001`
- Update `VITE_API_URL` in root `.env` to match

### ❌ "Port 8080 already in use"

**Solution:**
- Change port in `vite.config.ts`:
  ```ts
  server: {
    port: 3000, // or any other port
  }
  ```

### ❌ "Module not found" errors

**Solution:**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again in both root and server folders

### ❌ CORS errors in browser

**Solution:**
- Make sure backend is running before frontend
- Check that `VITE_API_URL` matches your backend URL
- Verify CORS is enabled in `server/server.js`

---

## Project Structure

```
portfolio-architect-pro/
├── server/              # Backend (Express + MongoDB)
│   ├── config/         # Database config
│   ├── models/         # MongoDB models
│   ├── routes/         # API routes
│   └── server.js       # Express server
├── src/                # Frontend (React)
│   ├── components/     # React components
│   ├── contexts/       # React contexts (Theme)
│   └── lib/           # Utilities & API client
└── package.json
```

---

## Next Steps

- ✅ Test the contact form
- ✅ Try different color schemes (palette button bottom-right)
- ✅ Customize your content in component files
- ✅ Add your projects via API or directly in code

---

**Need help?** Check the main [README.md](./README.md) for more details!



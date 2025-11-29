# 🚀 How to Run Your Portfolio - Simple Guide

## Step 1: Install Dependencies

Open terminal in the project folder and run:

```bash
npm install
```

Then install backend dependencies:

```bash
cd server
npm install
cd ..
```

---

## Step 2: Set Up MongoDB

**Option A: Use Local MongoDB (if installed)**
- Make sure MongoDB is running on your computer
- That's it! Skip to Step 3.

**Option B: Use MongoDB Atlas (Free Cloud - Recommended)**
1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up for free account
3. Create a free cluster
4. Click "Connect" → "Connect your application"
5. Copy the connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/`)

---

## Step 3: Create Environment File

Create a file named `.env` inside the `server` folder with this content:

**For Local MongoDB:**
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
```

**For MongoDB Atlas (replace with your connection string):**
```
PORT=5000
MONGODB_URI=mongodb+srv://your-username:your-password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
NODE_ENV=development
```

---

## Step 4: Run the Project

You need **TWO terminal windows** open:

### Terminal 1 - Backend Server
```bash
cd server
npm run dev
```
Wait until you see: `Server running on port 5000`

### Terminal 2 - Frontend
```bash
npm run dev
```
Wait until you see: `Local: http://localhost:8080`

---

## Step 5: Open in Browser

Open your browser and go to:
```
http://localhost:8080
```

🎉 **Done! Your portfolio is running!**

---

## Quick Troubleshooting

**"Cannot connect to MongoDB"**
- Make sure MongoDB is running (if local)
- Check your connection string in `server/.env`
- For Atlas: Make sure you whitelisted your IP address

**"Port already in use"**
- Close other applications using port 5000 or 8080
- Or change the port in `server/.env` and `vite.config.ts`

**"Module not found"**
- Run `npm install` again in both root and server folders

---

That's it! Simple and easy! 🎯



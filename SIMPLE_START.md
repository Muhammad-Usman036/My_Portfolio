# 🎯 SUPER SIMPLE - How to Run

## ⚡ Quick Start (3 Steps)

### 1️⃣ Install Everything
```bash
npm install
cd server && npm install && cd ..
```

### 2️⃣ Create `server/.env` File
Create a file named `.env` in the `server` folder:

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
```

**OR if using MongoDB Atlas (cloud):**
```
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
NODE_ENV=development
```

### 3️⃣ Run It!

**Windows:**
- Double-click `run.bat` file
- OR open 2 terminals:
  - Terminal 1: `cd server && npm run dev`
  - Terminal 2: `npm run dev`

**Mac/Linux:**
- Run: `chmod +x run.sh && ./run.sh`
- OR open 2 terminals:
  - Terminal 1: `cd server && npm run dev`
  - Terminal 2: `npm run dev`

### 4️⃣ Open Browser
Go to: **http://localhost:8080**

---

## ✅ That's It!

Your portfolio is now running! 🎉

---

## 📝 What You'll See

- ✅ Portfolio website at http://localhost:8080
- ✅ Backend API at http://localhost:5000
- ✅ 5 color themes (click palette icon bottom-right)
- ✅ Working contact form (saves to MongoDB)

---

## ❌ Problems?

**"Cannot connect to MongoDB"**
→ Make sure MongoDB is running OR use MongoDB Atlas (free cloud)

**"Port in use"**
→ Close other apps using ports 5000 or 8080

**"Module not found"**
→ Run `npm install` again

---

**Need more help?** Check `START_HERE.md` for detailed steps.



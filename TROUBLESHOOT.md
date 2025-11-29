# 🆘 Troubleshooting Guide

## Your Current Issues:

### ✅ Issue 1: Backend "Cannot GET /" - FIXED!
I just added a root route. Now when you visit http://localhost:5000/ you'll see a welcome message!

### ❌ Issue 2: Frontend "Connection Refused" - NEEDS FIXING

**The frontend server is NOT running!**

---

## 🔧 How to Fix Frontend Issue:

### Step 1: Check if Backend is Running

Look at your backend terminal. You should see:
```
Server running on port 5000
MongoDB Connected: localhost:27017
```

If you see errors about MongoDB, that's okay for now - backend will still work.

### Step 2: Start Frontend Server

**Open a NEW terminal window** (don't close the backend one!)

In the NEW terminal, run:
```bash
npm run dev
```

**You should see:**
```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:8080/
➜  Network: use --host to expose
```

### Step 3: Open Browser

Go to: **http://localhost:8080**

---

## ✅ Quick Checklist:

- [ ] Backend terminal shows: `Server running on port 5000`
- [ ] Frontend terminal shows: `Local: http://localhost:8080/`
- [ ] http://localhost:5000/ shows welcome message
- [ ] http://localhost:8080 shows your portfolio

---

## 🚨 Common Problems:

### Problem: "npm run dev" doesn't work

**Solution:**
```bash
# Make sure you're in the root folder (not server folder)
cd portfolio-architect-pro
npm run dev
```

### Problem: "Cannot find module"

**Solution:**
```bash
# Install dependencies
npm install
```

### Problem: Port 8080 already in use

**Solution:**
- Close other applications using port 8080
- Or change port in `vite.config.ts`:
  ```js
  server: {
    port: 3000, // Change to any other port
  }
  ```

### Problem: Backend shows MongoDB error

**Solution:**
- This is okay! Backend will still work
- To fix: Make sure MongoDB is running OR use MongoDB Atlas
- Create `server/.env` file with MongoDB connection string

---

## 📞 Still Not Working?

**Check these:**

1. **Are both terminals open?**
   - Terminal 1: Backend (`cd server && npm run dev`)
   - Terminal 2: Frontend (`npm run dev`)

2. **Are dependencies installed?**
   ```bash
   npm install
   cd server && npm install
   ```

3. **Check for error messages in terminals**
   - Read the error carefully
   - Google the error message
   - Check `FIX_ISSUES.md` for more help

---

## 🎯 Expected Result:

When everything works:
- ✅ http://localhost:5000/ → Shows API info
- ✅ http://localhost:5000/api/health → Shows `{"success":true}`
- ✅ http://localhost:8080 → Shows your beautiful portfolio!

---

**You got this!** 💪


